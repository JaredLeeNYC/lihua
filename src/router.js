import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/index",
      name: "index",
      component: Home
    },
    {
      path: "/pcba",
      name: "pcba",
      component: () => import("./views/PCBA.vue")
    },
    {
      path: "/cable",
      name: "cable",
      component: () => import("./views/Cable.vue")
    },
    {
      path: "/box",
      name: "box",
      component: () => import("./views/Box.vue")
    }
  ]
});
