export const getters = {
  paymentMethods(state) {
    return state.paymentMethods;
  },
  headers(state) {
    return state.headers;
  },
  paymentMethodsFormFields(state) {
    return state.paymentMethodsFormFields;
  },
  getPaymentMethodsErrorMessages(state) {
    return state.paymentMethodsErrorMessages;
  },
  paymentMethodDialog(state) {
    return state.paymentMethodDialog;
  },
};
