import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  key: "vuex",
  storage: window.localStorage,
  reducer: (state) => ({ userStore: state.userStore }),
});

import { loginStore } from "./login/index";
import { utilitiesStore } from "./utilities";
import { userStore } from "./user";
import { salesStore } from "./sales";
import { manufacturerStore } from "./manufacturer";

export default new Vuex.Store({
  modules: { 
    loginStore, 
    utilitiesStore, 
    userStore, 
    salesStore,
    manufacturerStore,
  },
  plugins: [vuexLocal.plugin],
});
