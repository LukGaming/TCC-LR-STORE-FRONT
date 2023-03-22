import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
// import VuexPersistence from "vuex-persist";
// const vuexLocal = new VuexPersistence({
//   key: "vuex",
//   storage: window.localStorage,
//   reducer: (state) => ({ loginStore: state.loginStore }),
// });

import { loginStore } from "./login/index";
import { utilitiesStore } from "./utilities";
export default new Vuex.Store({
  modules: { loginStore, utilitiesStore },
  // plugins: [vuexLocal.plugin],
});
