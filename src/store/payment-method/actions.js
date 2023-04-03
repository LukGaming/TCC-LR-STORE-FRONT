import { createClient } from "@/services/client";
import { getPaymentMethods } from "@/services/payment-method";

import {
  clientValidator,
  verifyIfCanSendForm,
} from "@/utils/messages/validators/client/ClientValidator";

export const actions = {
  async getPaymentMethods({ commit }, payload) {
    var paymentMethods = await getPaymentMethods();
    commit("setPaymentMethods", paymentMethods);
    return payload;
  },
  setClientFormFields({ commit }, payload) {
    commit("setClientFormFields", payload);
  },
  async createClient({ state, commit, dispatch }, payload) {
    dispatch("validateFields", "validateAll");
    var canSendForm = verifyIfCanSendForm(
      state.clientFormFields.clientName,
      state.clientFormFields.clientPhoneNumber,
      state.clientFormFields.clientCpf
    );

    if (canSendForm) {
      try {
        var client = await createClient(
          state.clientFormFields.clientName,
          state.clientFormFields.clientPhoneNumber,
          state.clientFormFields.clientCpf
        );
        commit("addNewClient", client);
        commit("clearClientForm");
        commit("setClientDialog", false);
        let snackBarAlert = {
          showSnackBar: true,
          message: "Cliente criado com sucesso.",
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
      case "validateClientName":
        order = 1;
        break;
      case "validateClientPhoneNumber":
        order = 2;
        break;
      case "validateClientCpf":
        order = 3;
        break;
      case "validateAll":
        order = 4;
        break;
      default:
        break;
    }

    const [nameError, phoneNumberError, cpfError] = clientValidator(
      state.clientFormFields.clientName,
      state.clientFormFields.clientPhoneNumber,
      state.clientFormFields.clientCpf
    );

    if (order >= 1) {
      commit("SetClientErrorMessages", {
        part: "clientName",
        value: nameError,
      });
    }

    if (order >= 2) {
      commit("SetClientErrorMessages", {
        part: "clientPhoneNumber",
        value: phoneNumberError,
      });
    }

    if (order >= 3) {
      commit("SetClientErrorMessages", {
        part: "clientCpf",
        value: cpfError,
      });
    }
  },
  setSelectedManufacturer({ commit }, payload) {
    commit("setSelectedManufacturer", payload);
  },
  setClientDialog({ commit }, payload) {
    commit("setClientDialog", payload);
  },
  openClientDialog({ commit }, payload) {
    if (payload.edit == false) {
      commit("setClientDialog", true);
    }
  },
};
