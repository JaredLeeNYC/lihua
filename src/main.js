import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  }
}).$mount("#app");
