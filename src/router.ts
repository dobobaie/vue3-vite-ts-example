import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: () => import("./App.vue"),
      name: "home",
      path: "/",
    },
  ],
});
