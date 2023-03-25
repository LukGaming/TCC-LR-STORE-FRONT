import $http from "@/plugins/axios";
import $router from "@/router/index";
import { LoginMessages } from "@/utils/messages/login/login_fields";
export const actions = {
  async login({ commit, dispatch, getters, state }, payload) {
    await dispatch("validateFields", "validateAll");
    var canSendForm = getters.canSendFormCategory;

    if (canSendForm) {
      dispatch("utilitiesStore/setIsLoading", true, { root: true });
      const formData = new FormData();
      formData.append("user_name", state.loginField);
      formData.append("password", state.passwordField);

      var request = await $http.post("/user/authenticate", formData);
      if (request.status == 200) {
        if (request.data.sucesso == true) {
          commit("userStore/setUser", request.data.user, {
            root: true,
          });
          commit("userStore/setIslogged", true, {
            root: true,
          });

          $router.push("/home");
          let snackBarAlert = {
            showSnackBar: true,
            message: "logado com sucesso.",
            textColor: "white--color",
            color: "black",
          };

          commit("utilitiesStore/setSnackBarCompletly", snackBarAlert, {
            root: true,
          });
        } else {
          let snackBarAlert = {
            showSnackBar: true,
            message: request.data.mensagem,
            textColor: "white--color",
            color: "red",
          };
          commit("utilitiesStore/setSnackBarCompletly", snackBarAlert, {
            root: true,
          });
        }
      } else {
        let snackBarAlert = {
          showSnackBar: true,
          message: "Ocorreu algum erro interno.",
          textColor: "white--color",
          color: "red",
        };
        commit("utilitiesStore/setSnackBarCompletly", snackBarAlert, {
          root: true,
        });
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
      let fieldToValidate;
      let errorMessage = "";
      fieldToValidate = state.loginField;

      errorMessage =
        fieldToValidate == null || fieldToValidate == ""
          ? LoginMessages.LoginFieldCannotBeEmpty
          : fieldToValidate.length <= 5
          ? LoginMessages.LoginFieldCharactereInsuficient
          : fieldToValidate.length >= 20
          ? LoginMessages.LoginFieldCharactereInsuficient
          : "";

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
