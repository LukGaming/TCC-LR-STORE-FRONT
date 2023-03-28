import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/LoginScreen.vue";
import HomePage from "@/components/home/Home-Page.vue";
import CreateSale from "@/components/sales/CreateSale.vue";
import ManufacturerPage from '@/components/manufacturer/ManufacturerPage.vue';
import ProductPage from '@/components/product/ProductPage.vue';
import ClientPage from "@/components/client/ClientPage.vue";
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
    path: "/fabricantes",
    name: "fabricantes",
    component: ManufacturerPage,
  },
  {
    path: "/produtos",
    name: "produtos",
    component: ProductPage,
  },
  {
    path: "/clientes",
    name: "clientes",
    component: ClientPage,
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
