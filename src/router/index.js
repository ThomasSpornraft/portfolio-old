import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Ausbildung from "../views/Ausbildung.vue";
import Erfahrung from "../views/Erfahrung.vue";
import Skills from "../views/Skills.vue";
import Sonstiges from "../views/Sonstiges.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ausbildung",
    name: "Ausbildung",
    component: Ausbildung,
  },
  {
    path: "/erfahrung",
    name: "Erfahrung",
    component: Erfahrung,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/sonstiges",
    name: "Sonstiges",
    component: Sonstiges,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
