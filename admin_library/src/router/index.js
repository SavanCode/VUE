import Vue from 'vue'
import Router from 'vue-router'
import ViewsRouter from "./views/index";
import CommonRouter from "./common/index";
import { checkTokenValid } from "@/api/user";
import store from "@/store";
import { getStore } from "@/util/store";
Vue.use(Router)

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


router.beforeEach((to, from, next) => {
  const meta = to.meta || {};
  if (meta.title) {
    document.title = to.meta.title;
  }
  if (meta.isAuth !== true || from.name === "login") {
    next();
  } else {
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
    };
    console.log(user,token)
    checkTokenValid(user, token)
      .then(res => {
        console.log(res)
        if (res.ok) {
          next();
        } else {
          throw new Error(res.message);
        }
      })
      .catch(error => {
        console.log(error)
        store.dispatch("ClearToken").then(() => {
          next({ path: "/login" });
        });
      });
  }
});

router.addRoutes([...CommonRouter, ...ViewsRouter]);

export default router;