import $http from "@/plugins/axios";

export const actions = {
  async getCreditsFromApi({ commit }) {
    var credits = await $http.get("credit");
    commit("setCredits", credits.data);
  },
};
