export const mutations = {
  setSales(state, payload) {
    state.sales = payload;
  },
  setSaleFormField(state, payload) {
    state.salesFormFields[payload.part] = payload.value;
  },
  setSalesErrorMessages(state, payload) {
    state.salesErrorMessages[payload.part] = payload.value;
  },
  addNewSale(state, payload) {
    state.sales.push(payload);
  },
  addSerialNumber(state) {
    if (state.salesFormFields.quantity < 10) {
      state.salesFormFields.quantity++;
      state.salesErrorMessages.serialNumbers.push("")
    }
  },
  removeSerialNumber(state) {
    if (state.salesFormFields.quantity > 1) {
      state.salesFormFields.quantity--;
      state.salesErrorMessages.serialNumbers.pop()
    }
  },
};
