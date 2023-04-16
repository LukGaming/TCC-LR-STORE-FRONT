export const getters = {
  getSales(state) {
    return state.sales;
  },
  getHeaders(state) {
    return state.headers;
  },
  salesFormFields(state) {
    return state.salesFormFields;
  },
  salesErrorMessages(state) {
    return state.salesErrorMessages;
  },
  serialNumbersDialog(state){
    return state.serialNumbersDialog;
  },
  serialNumbers(state){
    return state.salesFormFields.serialNumbers
  },
  showContent(state){
    return state.showContent
  }
};
