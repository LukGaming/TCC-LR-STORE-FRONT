import $http from "@/plugins/axios";
import $router from "@/router/index";
export const actions = {
  async login({ commit, dispatch, state }, payload) {
    dispatch("utilitiesStore/setIsLoading", true, { root: true });
    const formData = new FormData();
    formData.append("user_name", state.loginField);
    formData.append("password", state.passwordField);

    var request = await $http.post("/user/authenticate", formData);
    if (request.status == 200) {
      if (request.data.sucesso == true) {
        commit("login", {
          part: "loggedUser",
          value: request.data.user,
        });

        commit("login", {
          part: "isLogged",
          value: true,
        });
        //TODO: implement a toastr
        $router.push("/home");
      } else {
        //TODO: implement a toastr
        console.log(request.data.mensagem);
      }
    } else {
      //TODO: implement a toastr
      console.log("Aconteceu um erro interno");
    }
    dispatch("utilitiesStore/setIsLoading", false, { root: true });

    return payload;
  },
  logout({ commit }, payload) {
    commit("logout");
    $router.push("/login");
    return payload;
  },
  setPasswordField({ commit }, payload) {
    commit("setFields", {
      part: "passwordField",
      value: payload,
    });
  },
  setLoginField({ commit }, payload) {
    commit("setFields", {
      part: "loginField",
      value: payload,
    });
  },
};
