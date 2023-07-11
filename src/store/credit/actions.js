import $http from "@/plugins/axios";

export const actions = {
  async getCreditsFromApi({ commit }) {
    var credits = await $http.get("credit");
    commit("setCredits", credits.data);
  },
  setCreditDialog({ commit }, payload) {
    commit("setCreditDialog", payload);
  },
  setCreditForm({ commit }, payload) {
    commit("setCreditForm", payload);
  },
  async createCredit({ commit, dispatch, state }, payload) {
    dispatch("validateCreditFields", "validateAll");
    if (isCreditFormValid(state.creditErrorMessages)) {
      var formData = {
        installments_quantity: state.creditForm.installment_quantity,
        installment_percentage: state.creditForm.installment_percentage,
      };
      if (!state.isEditing) {
        console.log("is not editing");
        var result = await $http.post("credit", { ...formData });
        if (result.status == 201) {
          commit("clearCreditFields");

          commit("addNewCredit", result.data);

          let snackBarAlert = {
            showSnackBar: true,
            message: "Parcelamento  criado com sucesso.",
            textColor: "white--color",
            color: "black",
          };

          commit("utilitiesStore/setSnackBarCompletly", snackBarAlert, {
            root: true,
          });

          commit("setCreditDialog", false);
        }
      } else {
        var res = await $http.patch(`credit/${state.creditForm.id}`, {
          ...formData,
        });

        if (res.status == 200) {
          commit("clearCreditFields");
          dispatch("getCreditsFromApi");
          let snackBarAlert = {
            showSnackBar: true,
            message: "Parcelamento  editado com sucesso.",
            textColor: "white--color",
            color: "black",
          };

          commit("utilitiesStore/setSnackBarCompletly", snackBarAlert, {
            root: true,
          });

          commit("setCreditDialog", false);
        }
      }
    } else {
      return;
    }
    return commit, payload;
  },
  openManufacturerDialogToCreate({ commit, dispatch }, payload) {
    commit("clearCreditFields");
    commit("setIsEditing", false);
    commit("setCreditDialog", true);
    return commit, dispatch, payload;
  },
  openManufacturerDialogToEdit({ commit, dispatch }, payload) {
    dispatch("setCreditForm", {
      part: "installment_quantity",
      value: payload.item.installments_quantity,
    });

    dispatch("setCreditForm", {
      part: "installment_percentage",
      value: payload.item.installment_percentage,
    });

    dispatch("setCreditForm", {
      part: "id",
      value: payload.item.id,
    });
    commit("setCreditDialog", true);
    commit("setIsEditing", true);
    return commit, payload;
  },
  closeDeleteDialog({ commit }) {
    commit("closeDeleteDialog");
  },
  validateCreditFields({ commit, state }, payload) {
    let order;
    switch (payload) {
      case "quantity":
        order = 1;
        break;

      case "percentage":
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
      fieldToValidate = state.creditForm.installment_quantity;

      errorMessage =
        fieldToValidate == null || fieldToValidate == ""
          ? "Por favor preencha o campo de quantidade."
          : fieldToValidate == 0
          ? "A quantidade de parcelas não pode ser zero."
          : "";

      commit("setCreditErrorMessages", {
        part: "installment_quantity",
        value: errorMessage,
      });
    }
    if (order >= 2) {
      let fieldToValidate;
      let errorMessage = "";
      fieldToValidate = state.creditForm.installment_percentage;
      errorMessage =
        fieldToValidate == null || fieldToValidate == ""
          ? "Por favor preencha o campo de porcentagem."
          : "";
      console.log(errorMessage, "percentage");
      commit("setCreditErrorMessages", {
        part: "installment_percentage",
        value: errorMessage,
      });
    }
  },
  async deleteCredit({ commit, dispatch }, payload) {
    console.log(payload);
    await $http.delete(`credit/${payload.id}`);
    await dispatch("getCreditsFromApi");
    let snackBarAlert = {
      showSnackBar: true,
      message: "Parcelamento removido com sucesso.",
      textColor: "white--color",
      color: "black",
    };

    commit("utilitiesStore/setSnackBarCompletly", snackBarAlert, {
      root: true,
    });
  },
};

function isCreditFormValid(creditForm) {
  let canSend = true;
  for (const key in creditForm) {
    if (creditForm[key].length > 0) {
      canSend = false;
      break;
    }
  }
  return canSend;
}
