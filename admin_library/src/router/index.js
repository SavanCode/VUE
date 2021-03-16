import Vue from 'vue'
import Router from 'vue-router'
import ViewsRouter from "./views/index";
import CommonRouter from "./common/index";
import { checkTokenValid } from "@/api/user";
import store from "@/store";
import { getStore } from "@/util/store";
import { MessageBox } from 'element-ui';
Vue.use(Router);

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
  mode:'history',
  routes: []
});

function backToLogin(){
  store.dispatch("ClearToken").then(() => {
    router.push({ path: "/login" });
  });
}


router.beforeEach((to, from, next) => {
  const meta = to.meta || {};
  if (meta.title) {
    document.title = to.meta.title;
  }
  if (meta.isAuth !== true || from.name === "login") {
    //console.log("checking")
    next();
  } else {
    const token = getStore({ name: "token" }), 
      user = getStore({ name: "user" }),
      role = user.isAdmin ? "admin" : "student";
    if (
      "" === token ||
      undefined === token ||
      "" === user ||
      undefined === user
    ) {
      next({ path: "/login" });
      return;
    };
    console.log(user,token)
    // check token router内部跳转 检查账户身份
    checkTokenValid(user, token)
      .then(res => {
        //token ok & role ok
        //console.log(res,to.meta.roles,role)
        if (res.ok && to.meta.roles.includes(role)) { 
          console.log("user",token)
          next();
        }else{
          // token ok & role bad & error
          console.log(res,to.meta.roles,role)
          MessageBox.confirm('此操作请登录管理员账户, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              backToLogin();
            }).catch((error) => {
               //backToLogin();
            });
        }
      })
      .catch((err) => {
        console.log(err)
        backToLogin();
    })

  }
});

router.addRoutes([...CommonRouter, ...ViewsRouter]);

export default router;