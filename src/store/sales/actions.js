import $http from "@/plugins/axios";
import { createSale } from "@/services/sales";
import {
  canSendSaleForm,
  salesValidator,
} from "@/utils/messages/validators/sales/sale-validator";
import {
  CanCloseSerialNumbersForm,
  VerifyIfCanSendSerialNumbersForm,
  createSerialNumbersToSend,
} from "@/utils/messages/validators/sales/sales-serial-number-validator";

export const actions = {
  addSerialNumber({ commit }, payload) {
    commit("addSerialNumber");
    return commit, payload;
  },
  removeSerialNumber({ commit }, payload) {
    commit("removeSerialNumber");
    return commit, payload;
  },
  async getSales({ commit }, payload) {
    var response = await $http.get("getAllSales");
    if (response.status == 200) {
      commit("setSales", response.data.vendas);
    }
    return payload;
  },
  async createSale({ dispatch, state, commit, rootState }) {
    dispatch("validateFields", "validateAll");
    var canSendForm = canSendSaleForm(
      state.salesFormFields.quantity,
      state.salesFormFields.unityValue,
      state.salesFormFields.selectedProduct,
      state.salesFormFields.selectedPaymentMethod,
      state.salesFormFields.selectedClient,
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
          state.salesFormFields.selectedProduct,
          state.salesFormFields.selectedPaymentMethod,
          state.salesFormFields.selectedClient,
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
      case "validateSelectedPaymentMethod":
        order = 4;
        break;
      case "validateSelectedClient":
        order = 5;
        break;
      case "validateSaleDate":
        order = 6;
        break;
      case "validateAll":
        order = 7;
        break;

      default:
        break;
    }
    const [
      quantityError,
      unityValueError,
      selectedProductError,
      selectedPaymentMethodError,
      selectedClientError,
      saleDateError,
    ] = salesValidator(
      state.salesFormFields.quantity,
      state.salesFormFields.unityValue,
      state.salesFormFields.selectedProduct,
      state.salesFormFields.selectedPaymentMethod,
      state.salesFormFields.selectedClient,
      state.salesFormFields.saleDate
    );

    if (order >= 1) {
      commit("setSalesErrorMessages", {
        part: "quantity",
        value: quantityError,
      });
    }
    if (order >= 2) {
      commit("setSalesErrorMessages", {
        part: "unityValue",
        value: unityValueError,
      });
    }
    if (order >= 3) {
      commit("setSalesErrorMessages", {
        part: "selectedProduct",
        value: selectedProductError,
      });
    }
    if (order >= 4) {
      commit("setSalesErrorMessages", {
        part: "selectedPaymentMethod",
        value: selectedPaymentMethodError,
      });
    }
    if (order >= 5) {
      commit("setSalesErrorMessages", {
        part: "selectedClient",
        value: selectedClientError,
      });
    }
    if (order >= 6) {
      commit("setSalesErrorMessages", {
        part: "saleDate",
        value: saleDateError,
      });
    }
    if (order >= 7) {
      for (var i = 0; i < state.salesFormFields.serialNumbers.length; i++) {
        dispatch("validateSerialNumbers", {
          index: i,
          value: state.salesFormFields.serialNumbers[i],
        });
      }
      var canCloseForm = CanCloseSerialNumbersForm(
        state.salesErrorMessages.serialNumbers
      );
      if (canCloseForm) {
        commit("setSalesErrorMessages", {
          part: "serialNumber",
          value: "",
        });
      } else {
        commit("setSalesErrorMessages", {
          part: "serialNumber",
          value: "Por favor preencha os Números de Série",
        });
      }
    }
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
};
