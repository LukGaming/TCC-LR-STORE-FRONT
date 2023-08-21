export const mutations = {
  setIsloading(state, payload) {
    state.isLoading = payload;
  },
  setSale(state, payload) {
    state.sale = payload;
  },
  setCredits(state, payload) {
    state.credits = payload;
  },
  setDebits(state, payload) {
    state.debits = payload;
  },
  setInstallmentsQuantity(state, payload) {
    state.installments_quantity = payload;
  },
  setInstallmentsPercentage(state, payload) {
    state.installments_percentage = payload;
  },
};
