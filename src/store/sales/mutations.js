export const mutations = {
  setSales(state, payload) {
    state.sales = payload;
  },
  setSaleFormField(state, payload) {
    state.salesFormFields[payload.part] = payload.value;
    console.log(state.salesFormFields)
  },
};
