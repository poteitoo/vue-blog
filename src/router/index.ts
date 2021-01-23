import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Top from "../views/Top.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "top",
    component: Top,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/experience-note",
    name: "experience-note",
    component: () =>
      import(
        /* webpackChunkName: "experience-note" */ "../views/ExperienceNote.vue"
      ),
  },
  {
    path: "/rules",
    name: "rules",
    component: () =>
      import(/* webpackChunkName: "rules" */ "../views/Rules.vue"),
  },
  {
    path: "/awards",
    name: "awards",
    component: () =>
      import(/* webpackChunkName: "awards" */ "../views/Awards.vue"),
  },
  {
    path: "/winners",
    name: "winners",
    component: () =>
      import(/* webpackChunkName: "winners" */ "../views/Winners.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () =>
      import(/* webpackChunkName: "winners" */ "../views/_Test.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
