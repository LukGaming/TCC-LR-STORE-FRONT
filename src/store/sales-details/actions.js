import $http from "@/plugins/axios";

export const actions = {
  async getSaleById({ commit, state }, payload) {
    commit("setIsloading", true);
    var creditResponse = await $http.get(`credit`);
    if (creditResponse.status == 200) {
      commit("setCredits", creditResponse.data);
    }

    var debitResponse = await $http.get(`credit`);
    if (debitResponse.status == 200) {
      commit("setDebits", debitResponse.data);
    }

    var saleResponse = await $http.get(`sales/${payload.id}`);

    if (saleResponse.status == 200) {
      commit("setSale", saleResponse.data);
    }

    if (saleResponse.data.payment_method == 3) {
      var foundDebit = state.debits.find(
        (debit) =>
          debit.id == saleResponse.data.selectedPaymentMethod.debit_table_id
      );

      commit("setInstallmentsQuantity", foundDebit.installments_quantity);
      commit("setInstallmentsPercentage", foundDebit.installment_percentage);
    }

    if (saleResponse.data.payment_method == 2) {
      var foundCredit = state.debits.find(
        (credit) =>
          credit.id == saleResponse.data.selectedPaymentMethod.credit_table_id
      );

      commit("setInstallmentsQuantity", foundCredit.installments_quantity);
      commit("setInstallmentsPercentage", foundCredit.installment_percentage);
    }

    commit("setIsloading", false);
  },
};
