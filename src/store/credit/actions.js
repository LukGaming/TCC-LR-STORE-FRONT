import $http from "@/plugins/axios";

export const actions = {
  async getCreditsFromApi({ commit }) {
    var credits = await $http.get("credit");
    commit("setCredits", credits.data);
  },
  setCreditDialog({ commit }, payload) {
    commit("setCreditDialog", payload);
  },
  setCreditForm({ commit }, payload) {
    commit("setCreditForm", payload);
  },
  createCredit({ commit }, payload) {
    console.log("validating");
    return commit, payload;
  },
};
