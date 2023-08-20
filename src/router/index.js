import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";
import Login from "../views/login/LoginScreen.vue";
import HomePage from "@/components/home/Home-Page.vue";
import CreateSale from "@/components/sales/CreateSaleForm.vue";
import ManufacturerPage from "@/components/manufacturer/ManufacturerPage.vue";
import ProductPage from "@/components/product/ProductPage.vue";
import ClientPage from "@/components/client/ClientPage.vue";
import PaymentMethodPageVue from "@/components/payment-method/PaymentMethodPage.vue";
import DebitPage from "@/components/debit/DebitPage.vue";
import CreditPage from "@/components/credit/CreditPage.vue";
import ViewSale from "@/components/sales/ViewSale.vue";

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
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/vendas",
    name: "vendas",
    component: CreateSale,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/fabricantes",
    name: "fabricantes",
    component: ManufacturerPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/produtos",
    name: "produtos",
    component: ProductPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/clientes",
    name: "clientes",
    component: ClientPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/credit",
    name: "creditos",
    component: CreditPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/metodo-pagamento",
    name: "metodo-pagamento",
    component: PaymentMethodPageVue,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/debit",
    name: "debitos",
    component: DebitPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/vendas/:id",
    name: "vendas",
    component: ViewSale,
    meta: {
      requiresAuth: true,
    },
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

router.beforeEach((to, from, next) => {
  let isLogged = store.state.userStore.isLogged;

  let path = to.matched[0].path;

  if (path == "/login" && isLogged) {
    next("/home");
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isLogged) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
