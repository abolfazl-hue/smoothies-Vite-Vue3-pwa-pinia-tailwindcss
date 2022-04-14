import { createRouter, createWebHistory } from "vue-router";
import SmoothiesView from "../views/smoothiesView.vue";
import AddSmoothie from '../views/addSmoothie.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "smoothies",
      component: SmoothiesView,
    },
    {
      path: "/add-smoothie",
      name: "add-smoothie",
      component: AddSmoothie,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
