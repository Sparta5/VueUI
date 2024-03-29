import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Access1 from "../views/Access1";
import Access2 from "../views/Access2";
import Changeage from "../views/Changeage";
import AddProduct from "../views/AddProduct";
import Ajax from "../views/Ajax";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/access1",
    component: Access1,
  },
  {
    path: "/access2",
    component: Access2,
  },
  {
    path: "/changeage",
    component: Changeage,
  },
  {
    path: "/addproduct",
    component: AddProduct,
  },
  {
    path: "/ajax",
    component: Ajax,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/video",
    name: "Video",
    // route level code-splitting
    // this generates a separate chunk (video.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "video" */ "../views/video.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
