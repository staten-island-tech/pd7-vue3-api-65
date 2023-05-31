import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Chart1 from "./views/Chart1.vue";
import Chart2 from "./views/Chart2.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/chart1",
      component: Chart1,
    },
    {
      path: "/chart2",
      component: Chart2,
    },
  ],
});
