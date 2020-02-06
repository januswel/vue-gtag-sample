import VueRouter from "vue-router";

import App from "./App";
import Foo from "./components/Foo";

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: App,
    },
    {
      path: "/foo",
      component: Foo,
    },
  ]
});
