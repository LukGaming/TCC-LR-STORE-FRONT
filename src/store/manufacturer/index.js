import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";
export const manufacturerStore = {
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
};
