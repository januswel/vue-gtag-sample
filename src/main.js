import Vue from "vue";
import VueRouter from "vue-router";
import VueGtag from "vue-gtag";

import router from "./Routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueGtag, {
  config: {
    id: "UA-157906734-1"
  }
});

new Vue({
  el: "#app",
  router
});
