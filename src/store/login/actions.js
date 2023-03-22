import $http from "@/plugins/axios";
import $router from "@/router/index";
export const actions = {
  async login({ commit, dispatch, getters, state }, payload) {
    dispatch("validateFields", "validateAll");
    var canSendForm = getters.canSendFormCategory;
    if (canSendForm) {
      console.log(`canSendForm ${canSendForm}`);
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
    }
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
  validateFields({ commit, state, getters, dispatch }, payload) {
    console.log("validando");

    let order;
    switch (payload) {
      case "validateLogin":
        order = 1;
        break;
      case "validatePassword":
        order = 2;
        break;
      case "validateAll":
        order = 3;
        break;
      default:
        break;
    }
    if (order >= 1) {
      console.log("validando campo 1");
      let fieldToValidate;
      let errorMessage = "";
      fieldToValidate = state.loginField;
      console.log(state.loginField);
      errorMessage =
        fieldToValidate == null || fieldToValidate == ""
          ? "O campo de login não pode ficar vazio."
          : fieldToValidate.length <= 5
          ? "O campo de Login deve conter no mínimo 5 caractéres."
          : fieldToValidate.length >= 20
          ? "O campo de login deve conter no máximo 20 caractéres"
          : "";
      console.log(`mensagem de erro: ${errorMessage}`);
      commit("setLoginErrors", {
        part: "loginFieldError",
        value: errorMessage,
      });
    }
    if (order >= 2) {
      let fieldToValidate;
      let errorMessage = "";
      fieldToValidate = state.passwordField;
      errorMessage =
        fieldToValidate == null || fieldToValidate == ""
          ? "O campo de Senha não pode ficar vazio."
          : fieldToValidate.length < 8
          ? "O campo de Senha deve conter no mínimo 8 caractéres."
          : fieldToValidate.length >= 20
          ? "O campo de Senha deve conter no máximo 20 caractéres"
          : "";
      commit("setLoginErrors", {
        part: "passwordFieldError",
        value: errorMessage,
      });
    }

    return getters, dispatch;
  },
};
