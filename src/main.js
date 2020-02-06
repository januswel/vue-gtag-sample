import Vue from "vue";
import VueRouter from "vue-router";

import router from "./Routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  el: "#app",
  router
});
