import $http from "@/plugins/axios";
import $router from "@/router/index";
export const actions = {
  async login({ commit, dispatch }, payload) {
    var users = await $http.get("user");
    console.log(users);
    dispatch("utilitiesStore/setIsLoading", true, { root: true });
    commit("login", {
      part: "user",
      value: payload,
    });
    commit("login", {
      part: "isLogged",
      value: true,
    });
    dispatch("utilitiesStore/setIsLoading", false, { root: true });
    $router.push("/home");
  },
  logout({ commit }, payload) {
    commit("logout");
    $router.push("/login");
    return payload;
  },
};
