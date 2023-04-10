export const getters = {
  paymentMethods(state) {
    return state.paymentMethods;
  },
  headers(state) {
    return state.headers;
  },
  paymentMethodName(state) {
    return state.paymentMethodName;
  },
  paymentMethodErrorMessages(state) {
    return state.paymentMethodErrorMessages;
  },
  paymentMethodDialog(state) {
    return state.paymentMethodDialog;
  },
  isEditing(state) {
    return state.isEditing;
  },
};
