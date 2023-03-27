import $http from "@/plugins/axios";

export const actions = {
  async getProducts({ commit }, payload) {
    var response = await $http.get("product");
    if (response.status == 200) {
      commit("setProducts", response.data);
    }
    return payload;
  },
  setProductName({ commit }, payload) {
    commit("setProductName", payload);
  },
  async createProduct({ commit, getters, dispatch, state }, payload) {
    dispatch("validateFields", "validateAll");
    var canSendForm = getters.canSendProductForm;
    if (canSendForm) {
      var formData = new FormData();
      formData.append("name", state.productName);
      formData.append("manufacture_id", state.selectedManufacturer);

      var resposta = await $http.post("product", formData);
      if (resposta.status == 201) {
        commit("addNewProduct", resposta.data);
        commit("clearProductForm");
        let snackBarAlert = {
          showSnackBar: true,
          message: "Produto criado com sucesso.",
          textColor: "white--color",
          color: "black",
        };

        commit("utilitiesStore/setSnackBarCompletly", snackBarAlert, {
          root: true,
        });
        commit("setProductDialog", false);
      }
    }
    console.log(canSendForm);

    return payload;
  },
  validateFields({ commit, state }, payload) {
    let order = 0;
    switch (payload) {
      case "validateProductName":
        order = 1;
        break;
      case "validateSelectedManufacturer":
        order = 2;
        break;
      case "validateAll":
        order = 3;
        break;
      default:
        break;
    }

    console.log(order);
    if (order >= 1) {
      let fieldToValidate = state.productName;
      let message = "";
      message =
        fieldToValidate == null || fieldToValidate == ""
          ? "O campo de nome não pode ficar vazio."
          : "";
      commit("setProductErrorMessages", {
        part: "productName",
        value: message,
      });
    }
    if (order >= 2) {
      let fieldToValidate = state.selectedManufacturer;
      let message = "";
      message =
        fieldToValidate == null || fieldToValidate == ""
          ? "Selecione uma fabricante."
          : "";
      commit("setProductErrorMessages", {
        part: "selectedManufacturer",
        value: message,
      });
    }
  },
  setSelectedManufacturer({ commit }, payload) {
    commit("setSelectedManufacturer", payload);
  },
  setProductDialog({ commit }, payload) {
    commit("setProductDialog", payload);
  },
  openProductDialog({ commit }, payload) {
    if (payload.edit == false) {
      commit("setProductDialog", true);
    }
  },
};
