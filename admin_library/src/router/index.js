import Vue from 'vue'
import Router from 'vue-router'
import ViewsRouter from "./views/index";
import CommonRouter from "./common/index";

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

router.addRoutes([...CommonRouter, ...ViewsRouter]);

export default router;