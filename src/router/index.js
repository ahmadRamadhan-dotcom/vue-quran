import { createRouter, createWebHistory } from "vue-router";
import Homeview from "~/views/Homeview.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homeview,
  },
  {
    path: "/surah/:no",
    name: "Surah",
    component: () => import("~/views/Surahview.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
