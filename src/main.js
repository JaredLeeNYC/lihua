import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.config.productionTip = false;

new Vue({
  router,
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
      //Or for Vue 3:
      //return {el: to.hash}
    } else {
      return { x: 0, y: 0 };
    }
  },
  render: (h) => h(App)
}).$mount("#app");
