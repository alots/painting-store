import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/painting/Index.vue";
import About from "../pages/about/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Index
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
