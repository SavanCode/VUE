import Vue from "vue";
import Router from "vue-router";
import ViewsRouter from "./views/index";
import CommonRouter from "./common/index";
import { checkTokenValid } from "@/api/user";
import store from "@/store";
import { getStore } from "@/util/store";
import { MessageBox } from "element-ui";
Vue.use(Router);

//滑动页面操作的设置
const router = new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      };
    }
  },
  mode: "history",
  routes: []
});

//返回login页面
function backToLogin() {
  store.dispatch("ClearToken").then(() => {
    router.push({ path: "/login" });
  });
}

//设置导航卫士
router.beforeEach((to, from, next) => {
  const meta = to.meta || {};
  if (meta.title) {
    document.title = to.meta.title;
  }
  //检查页面是否可以跳转
  if (meta.isAuth !== true || from.name === "login") {
    next();
  } else {
    //判断 localStroage 中有无 token 以及 user，有继续，没有就重新登陆
    const token = getStore({ name: "token" }),
      user = getStore({ name: "user" });
    if (
      "" === token ||
      undefined === token ||
      "" === user ||
      undefined === user
    ) {
      next({ path: "/login" });
      return;
    }
    // check token router内部跳转 检查账户身份
    checkTokenValid(user, token)
      .then(res => {
        //检查用户权限
        const role = user.isAdmin ? "admin" : "student";
        // token ok & role ok
        if (res.ok && to.meta.roles.includes(role)) {
          next();
        } else {
          // token ok & role bad & error
          MessageBox.confirm("此操作请登录管理员账户, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              backToLogin();
            })
            .catch(error => {});
        }
      })
      .catch(err => {
        console.log(err);
        backToLogin();
      });
  }
});

router.addRoutes([...CommonRouter, ...ViewsRouter]);

export default router;
