import $router from "@/router/index";
export const actions = {
  setUser({ commit }, payload) {
    commit("setUser", payload);
  },
  logout({ commit }, payload) {
    commit("setIslogged", false);
    commit("setUser", {});
    $router.push("/login");
    let snackBarAlert = {
      showSnackBar: true,
      message: "Deslogado com sucesso.",
      textColor: "white--color",
      color: "black",
    };
    commit("utilitiesStore/setSnackBarCompletly", snackBarAlert, {
      root: true,
    });

    return payload;
  },
};
