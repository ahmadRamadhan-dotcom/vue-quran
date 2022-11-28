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

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
