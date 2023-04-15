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
  addNewSale(state,payload){
    state.sales.push(payload);
  }
};
