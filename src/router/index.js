import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/LoginScreen.vue";
import HomePage from "@/components/home/Home-Page.vue";
import CreateSale from "@/components/sales/CreateSale.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/vendas",
    name: "vendas",
    component: CreateSale,
  },
  {
    path: "*",
    redirect: "/home",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
