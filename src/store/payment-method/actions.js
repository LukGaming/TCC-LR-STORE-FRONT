import {
  createPaymentMethod,
  getPaymentMethods,
} from "@/services/payment-method";
import {
  paymentMethodValidator,
  verifyIfCanSendPaymentMethodForm,
} from "@/utils/messages/validators/payment-method/PaymentMethod";

export const actions = {
  async getPaymentMethods({ commit }, payload) {
    var paymentMethods = await getPaymentMethods();
    commit("setPaymentMethods", paymentMethods);
    return payload;
  },
  setPaymentMethodName({ commit }, payload) {
    commit("setPaymentMethodName", payload);
  },
  async createPaymentMethod({ state, commit, dispatch }, payload) {
    dispatch("validateFields", "validateAll");
    var canSendForm = verifyIfCanSendPaymentMethodForm(state.paymentMethodName);

    if (canSendForm) {
      try {
        var paymentMethod = await createPaymentMethod(state.paymentMethodName);
        commit("addNewPaymentMethod", paymentMethod);
        commit("clearPaymentMethodForm");
        commit("setPaymentMethodDialog", false);
        let snackBarAlert = {
          showSnackBar: true,
          message: "Método de pagamento criado com sucesso.",
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
          textColor: "white--color",
          color: "black",
        };
        commit("utilitiesStore/setSnackBarCompletly", snackBarAlert, {
          root: true,
        });
      }
    }

    return payload;
  },
  validateFields({ commit, state }, payload) {
    let order = 0;
    switch (payload) {
      case "validatePaymentMethodName":
        order = 1;
        break;
      case "validateAll":
        order = 2;
        break;
      default:
        break;
    }

    const [paymentMethodNameError] = paymentMethodValidator(
      state.paymentMethodName
    );

    if (order >= 1) {
      commit("SetPaymentMethodErrorMessages", {
        part: "paymentMethodName",
        value: paymentMethodNameError,
      });
    }
  },
  setSelectedManufacturer({ commit }, payload) {
    commit("setSelectedManufacturer", payload);
  },
  setPaymentMethodDialog({ commit }, payload) {
    commit("setPaymentMethodDialog", payload);
  },
  openPaymentMethodDialog({ commit }, payload) {
    if (payload.edit == false) {
      commit("setPaymentMethodDialog", true);
    }
  },
};
