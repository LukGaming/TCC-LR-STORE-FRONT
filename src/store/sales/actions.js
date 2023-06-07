import $http from "@/plugins/axios";
import { createSale } from "@/services/sales";
import {
  canSendSaleForm,
  salesValidator,
} from "@/utils/messages/validators/sales/sale-validator.js";
import {
  CanCloseSerialNumbersForm,
  VerifyIfCanSendSerialNumbersForm,
  createSerialNumbersToSend,
} from "@/utils/messages/validators/sales/sales-serial-number-validator";

export const actions = {
  setAddProductDialog({ commit }, payload) {
    commit("setAddProductDialog", payload);
  },
  addProduct({ commit, state }, payload) {
    commit("addProduct", state.productFormFields);
    return commit, payload;
  },
  addSerialNumber({ commit }, payload) {
    commit("addSerialNumber");
    return commit, payload;
  },
  removeSerialNumber({ commit }, payload) {
    commit("removeSerialNumber");
    return commit, payload;
  },

  async getSales({ commit }, payload) {
    var response = await $http.get("sales");
    if (response.status == 200) {
      console.log(response.data.sales);

      commit("setSales", response.data.sales);
    }
    return payload;
  },
  async createSale({ dispatch, state, commit, rootState }) {
    dispatch("validateFields", "validateAll");
    var canSendForm = canSendSaleForm(
      state.salesFormFields.quantity,
      state.salesFormFields.unityValue,
      state.salesFormFields.selectedProduct.id,
      state.salesFormFields.selectedPaymentMethod,
      state.salesFormFields.selectedClient.id,
      state.salesFormFields.selectedSalesType,
      state.salesFormFields.saleDate
    );

    var canSendSerialNumbers = VerifyIfCanSendSerialNumbersForm(
      state.salesFormFields.serialNumbers
    );
    if (canSendForm && canSendSerialNumbers) {
      try {
        var userId = rootState.userStore.user.id;
        let serialNumbers = createSerialNumbersToSend(
          state.salesFormFields.serialNumbers
        );
        var sale = await createSale(
          serialNumbers,
          state.salesFormFields.quantity,
          state.salesFormFields.unityValue,
          state.salesFormFields.selectedProduct.id,
          state.salesFormFields.selectedPaymentMethod,
          state.salesFormFields.selectedClient.id,
          state.salesFormFields.selectedSalesType,
          state.salesFormFields.saleDate,
          userId
        );
        commit("addNewSale", sale);
        let snackBarAlert = {
          showSnackBar: true,
          message: "Venda criada com sucesso.",
          textColor: "white--color",
          color: "black",
        };

        commit("utilitiesStore/setSnackBarCompletly", snackBarAlert, {
          root: true,
        });
        commit("clearSalesForm");
      } catch (e) {
        let snackBarAlert = {
          showSnackBar: true,
          message: e,
          textColor: "red--color",
          color: "white",
        };

        commit("utilitiesStore/setSnackBarCompletly", snackBarAlert, {
          root: true,
        });
      }
    } else {
      console.log("nao pode enviar form");
    }
  },
  setSaleFormField({ commit }, payload) {
    commit("setSaleFormField", payload);
  },
  setProductFormFields({ commit }, payload) {
    commit("setProductFormFields", payload);
  },
  validateFields({ commit, state, dispatch }, payload) {
    let order = 0;
    switch (payload) {
      case "validateQuantity":
        order = 1;
        break;
      case "validateUnityValue":
        order = 2;
        break;
      case "validateSelectedProduct":
        order = 3;
        break;
      case "validateSelectedSalesType":
        order = 4;
        break;
      case "validateSelectedPaymentMethod":
        order = 5;
        break;
      case "validateSelectedClient":
        order = 6;
        break;
      case "validateSaleDate":
        order = 7;
        break;
      case "validateAll":
        order = 8;
        break;

      default:
        break;
    }

    const [
      products,
      selectedPaymentMethodError,
      selectedClientError,
      selectedSalesTypeError,
      saleDateError,
    ] = salesValidator(
      state.salesFormFields.products,
      state.salesFormFields.selectedPaymentMethod,
      state.salesFormFields.selectedClient,
      state.salesFormFields.selectedSalesType,
      state.salesFormFields.saleDate
    );

    console.log(products);

    if (order >= 1) {
      commit("setSalesErrorMessages", {
        part: "selectedSalesType",
        value: selectedSalesTypeError,
      });
    }

    if (order >= 2) {
      commit("setSalesErrorMessages", {
        part: "selectedPaymentMethod",
        value: selectedPaymentMethodError,
      });
    }
    if (order >= 3) {
      commit("setSalesErrorMessages", {
        part: "selectedClient",
        value: selectedClientError,
      });
    }
    if (order >= 4) {
      commit("setSalesErrorMessages", {
        part: "saleDate",
        value: saleDateError,
      });
    }
    // if (order >= 5) {
    //   for (var i = 0; i < state.salesFormFields.serialNumbers.length; i++) {
    //     dispatch("validateSerialNumbers", {
    //       index: i,
    //       value: state.salesFormFields.serialNumbers[i],
    //     });
    //   }
    //   var canCloseForm = CanCloseSerialNumbersForm(
    //     state.salesErrorMessages.serialNumbers
    //   );
    //   if (canCloseForm) {
    //     commit("setSalesErrorMessages", {
    //       part: "serialNumber",
    //       value: "",
    //     });
    //   } else {
    //     commit("setSalesErrorMessages", {
    //       part: "serialNumber",
    //       value: "Por favor preencha os Números de Série",
    //     });
    //   }
    // }
    return commit, payload, dispatch;
  },
  validateSerialNumbers({ commit }, payload) {
    let errorMessage = "";
    errorMessage =
      payload.value == null || payload.value == ""
        ? "O Número de série não pode ficar vazio."
        : "";
    commit("setSerialNumberErrorMessages", {
      index: payload.index,
      value: errorMessage,
    });
  },
  setSerialNumbersDialog({ commit }, payload) {
    commit("setSerialNumbersDialog", payload);
  },
  setSerialNumbers({ commit }, payload) {
    commit("setSerialNumbers", payload);
  },
  validateAllSerialNumbers({ commit, state, dispatch }, payload) {
    console.log("payload[i]", payload[i]);
    for (var i = 0; i < state.salesFormFields.serialNumbers.length; i++) {
      dispatch("validateSerialNumbers", { index: i, value: payload[i] });
    }

    return payload, state, commit;
  },
  setSerialNumberFields({ commit }) {
    commit("setSerialNumberFields");
  },
  setShowContent({ commit }, payload) {
    commit("setShowContent", payload);
  },
  setfirstSerialNumbers({ commit }, payload) {
    commit("setfirstSerialNumbers", payload);
  },
  concludeSerialNumbers({ commit, state }, payload) {
    var canCloseForm = CanCloseSerialNumbersForm(
      state.salesErrorMessages.serialNumbers
    );
    if (canCloseForm) {
      commit("setSerialNumbersDialog", false);
    }
    return commit, payload;
  },
  setSelectedManufacturer({ dispatch, rootState }, payload) {
    console.log(rootState.productStore.products);
    return dispatch, rootState, payload;
  },
  async getProductsByManufacturers({ commit }, payload) {
    console.log("payload", payload);
    var response = await $http.get("product");
    if (payload == null) {
      commit("setProductsByManufacturers", response.data);
    } else {
      var products = response.data;
      console.log(products);
      var filteredProductsByManufacturer = products.filter(
        (product) => product.manufacture_id == payload
      );
      commit("setProductsByManufacturers", filteredProductsByManufacturer);
    }
    commit("setSelectedManufacturerFromFilter", payload);
  },
};
