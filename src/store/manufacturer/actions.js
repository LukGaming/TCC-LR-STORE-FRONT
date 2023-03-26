import $http from "@/plugins/axios";
import { manufacturerMessages } from "@/utils/messages/manufacturer/manufacturer_fields";
export const actions = {
  async getManufacturers({ commit }, payload) {
    var response = await $http.get("manufacturer");
    if (response.status == 200) {
      commit("setManufacturers", response.data);
    }
    return payload;
  },
  async createManufacturer({ commit, dispatch, getters, state }, payload) {
    dispatch("validateFields", "validateAll");
    var camSendForm = getters.canSendManufacturerForm;
    if (camSendForm) {
      var formData = new FormData();
      formData.append("manufacture_name", state.manufacturerName);

      var response = await $http.post("manufacturer", formData);
      if (response.status == 201) {
        commit("addNewManufacturer", response.data);
        dispatch("clearManufacturerForm");
        commit("setManufacturerDialog", false);
        let snackBarAlert = {
          showSnackBar: true,
          message: "Fabricante criada com sucesso.",
          textColor: "white--color",
          color: "black",
        };

        commit("utilitiesStore/setSnackBarCompletly", snackBarAlert, {
          root: true,
        });
      }
    }

    return commit, payload;
  },
  setManufacturerName({ commit }, payload) {
    commit("setManufacturerName", payload);
  },
  validateFields({ commit, state }, payload) {
    let order;
    switch (payload) {
      case "validateManufacturerName":
        order = 1;
        break;

      case "validateAll":
        order = 2;
        break;

      default:
        break;
    }
    if (order >= 1) {
      let fieldToValidate;
      let errorMessage = "";
      fieldToValidate = state.manufacturerName;

      errorMessage =
        fieldToValidate == null || fieldToValidate == ""
          ? manufacturerMessages.minimumCarachters
          : fieldToValidate.length == 0
          ? manufacturerMessages.LoginFieldCannotBeEmpty
          : "";
      commit("setErrorMessages", {
        part: "manufacturerName",
        value: errorMessage,
      });
    }
  },
  setManufacturerDialog({ commit }, payload) {
    commit("setManufacturerDialog", payload);
  },
  openManufacturerDialog({ commit }, payload) {
    if (payload.edit == false) {
      commit("setManufacturerDialog", true);
    }
  },
  clearManufacturerForm({ commit }) {
    commit("setManufacturerName", "");
    commit("setErrorMessages", {
      part: "manufacturerName",
      value: "",
    });
  },
};
