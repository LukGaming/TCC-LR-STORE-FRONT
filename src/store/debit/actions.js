import $http from "@/plugins/axios";

export const actions = {
  async getDebitsFromApi({ commit }) {
    var debits = await $http.get("debit");
    commit("setDebits", debits.data);
  },
  setDebitDialog({ commit }, payload) {
    commit("setDebitDialog", payload);
  },
  setDebitForm({ commit }, payload) {
    commit("setDebitForm", payload);
  },
  async createDebit({ commit, dispatch, state }, payload) {
    dispatch("validateDebitFields", "validateAll");
    if (isDebitFormValid(state.debitErrorMessages)) {
      var formData = {
        installments_quantity: state.debitForm.installment_quantity,
        installment_percentage: state.debitForm.installment_percentage,
      };
      if (!state.isEditing) {
        var result = await $http.post("debit", { ...formData });
        if (result.status == 201) {
          commit("clearDebitFields");

          commit("addNewDebit", result.data);

          let snackBarAlert = {
            showSnackBar: true,
            message: "Débito criado com sucesso.",
            textColor: "white--color",
            color: "black",
          };

          commit("utilitiesStore/setSnackBarCompletly", snackBarAlert, {
            root: true,
          });

          commit("setDebitDialog", false);
        }
      } else {
        var res = await $http.patch(`debit/${state.creditForm.id}`, {
          ...formData,
        });

        if (res.status == 200) {
          commit("clearDebitFields");
          dispatch("getDebitsFromApi");
          let snackBarAlert = {
            showSnackBar: true,
            message: "Debito editado com sucesso.",
            textColor: "white--color",
            color: "black",
          };

          commit("utilitiesStore/setSnackBarCompletly", snackBarAlert, {
            root: true,
          });

          commit("setDebitDialog", false);
        }
      }
    } else {
      return;
    }
    return commit, payload;
  },
  openDebitDialogToCreate({ commit, dispatch }, payload) {
    commit("clearDebitFields");
    commit("setIsEditing", false);
    commit("setDebitDialog", true);
    return commit, dispatch, payload;
  },
  openDebitDialogToEdit({ commit, dispatch }, payload) {
    dispatch("setDebitForm", {
      part: "installment_quantity",
      value: payload.item.installments_quantity,
    });

    dispatch("setDebitForm", {
      part: "installment_percentage",
      value: payload.item.installment_percentage,
    });

    dispatch("setDebitForm", {
      part: "id",
      value: payload.item.id,
    });
    commit("setDebitDialog", true);
    commit("setIsEditing", true);
    return commit, payload;
  },
  closeDeleteDialog({ commit }) {
    commit("closeDeleteDialog");
  },
  validateDebitFields({ commit, state }, payload) {
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
      fieldToValidate = state.debitForm.installment_quantity;

      errorMessage =
        fieldToValidate == null || fieldToValidate == ""
          ? "Por favor preencha o campo de quantidade."
          : fieldToValidate == 0
          ? "A quantidade de parcelas de débito não pode ser zero."
          : "";

      commit("setCreditErrorMessages", {
        part: "setDebitErrorMessages",
        value: errorMessage,
      });
    }
    if (order >= 2) {
      let fieldToValidate;
      let errorMessage = "";
      fieldToValidate = state.debitForm.installment_percentage;
      errorMessage =
        fieldToValidate == null || fieldToValidate == ""
          ? "Por favor preencha o campo de porcentagem."
          : "";
      console.log(errorMessage, "percentage");
      commit("setDebitErrorMessages", {
        part: "installment_percentage",
        value: errorMessage,
      });
    }
  },
  async deleteDebit({ commit, dispatch }, payload) {
    await $http.delete(`debit/${payload.id}`);
    await dispatch("getDebitsFromApi");
    let snackBarAlert = {
      showSnackBar: true,
      message: "Débito removido com sucesso.",
      textColor: "white--color",
      color: "black",
    };

    commit("utilitiesStore/setSnackBarCompletly", snackBarAlert, {
      root: true,
    });
  },
};

function isDebitFormValid(debitForm) {
  let canSend = true;
  for (const key in debitForm) {
    if (debitForm[key].length > 0) {
      canSend = false;
      break;
    }
  }
  return canSend;
}
