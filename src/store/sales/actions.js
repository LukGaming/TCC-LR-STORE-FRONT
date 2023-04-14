import $http from "@/plugins/axios";
import { salesValidator } from "@/utils/messages/validators/sales/sale-validator";

export const actions = {
  async getSales({ commit }, payload) {
    var response = await $http.get("getAllSales");
    if (response.status == 200) {
      commit("setSales", response.data.vendas);
    }
    return payload;
  },
  async createSale() {},
  setSaleFormField({ commit }, payload) {
    commit("setSaleFormField", payload);
  },
  validateFields({ commit, state }, payload) {
    let order = 0;
    switch (payload) {
      case "validateSerialNumber":
        order = 1;
        break;
      case "validateQuantity":
        order = 2;
        break;
      case "validateUnityValue":
        order = 3;
        break;
      case "validateSelectedProduct":
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
      serialNumberError,
      quantityError,
      unityValueError,
      selectedProductError,
      selectedPaymentMethodError,
      selectedClientError,
      saleDateError,
    ] = salesValidator(
      state.salesFormFields.serialNumber,
      state.salesFormFields.quantity,
      state.salesFormFields.unityValue,
      state.salesFormFields.selectedProduct,
      state.salesFormFields.selectedPaymentMethod,
      state.salesFormFields.selectedClient,
      state.salesFormFields.saleDate
    );

    if (order >= 1) {
      commit("setSalesErrorMessages", {
        part: "serialNumber",
        value: serialNumberError,
      });
    }
    if (order >= 2) {
      commit("setSalesErrorMessages", {
        part: "quantity",
        value: quantityError,
      });
    }
    if (order >= 3) {
      commit("setSalesErrorMessages", {
        part: "unityValue",
        value: unityValueError,
      });
    }
    if (order >= 4) {
      commit("setSalesErrorMessages", {
        part: "selectedProduct",
        value: selectedProductError,
      });
    }
    if (order >= 5) {
      commit("setSalesErrorMessages", {
        part: "selectedPaymentMethod",
        value: selectedPaymentMethodError,
      });
    }
    if (order >= 6) {
      commit("setSalesErrorMessages", {
        part: "selectedClient",
        value: selectedClientError,
      });
    }
    if (order >= 7) {
      commit("setSalesErrorMessages", {
        part: "saleDate",
        value: saleDateError,
      });
    }
    return commit, payload;
  },
  
};
