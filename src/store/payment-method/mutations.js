export const mutations = {
  setPaymentMethods(state, payload) {
    state.paymentMethods = payload;
  },
  setPaymentMethodName(state, payload) {
    state.paymentMethodName = payload;
  },
  SetPaymentMethodErrorMessages(state, payload) {
    state.paymentMethodErrorMessages[payload.part] = payload.value;
  },
  addNewPaymentMethod(state, payload) {
    state.paymentMethods.push(payload);
  },
  clearPaymentMethodForm(state) {
    state.paymentMethodsFormFields = {
      paymentMethodName: "",
    };

    state.paymentMethodName = "";
  },
  setClientDialog(state, payload) {
    state.clientDialog = payload;
  },
  setPaymentMethodDialog(state, payload){
    state.paymentMethodDialog = payload;
  }
};
