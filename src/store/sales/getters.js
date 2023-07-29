export const getters = {
  isEditingSale(state) {
    return state.isEditingSale;
  },
  addProductDialog(state) {
    return state.productDialog;
  },
  getSales(state) {
    return state.sales;
  },
  paymentMethods(state) {
    return state.paymentMethods;
  },
  getHeaders(state) {
    return state.headers;
  },
  productFormFields(state) {
    return state.productFormFields;
  },
  salesFormFields(state) {
    return state.salesFormFields;
  },
  salesErrorMessages(state) {
    return state.salesErrorMessages;
  },
  serialNumbersDialog(state) {
    return state.serialNumbersDialog;
  },
  serialNumbers(state) {
    return state.salesFormFields.serialNumbers;
  },
  showContent(state) {
    return state.showContent;
  },
  productsByManufacturers(state) {
    return state.productsByManufacturers;
  },
  selectedManufacturerFromFilter(state) {
    return state.selectedManufacturerFromFilter;
  },
  salesTypes(state) {
    return state.salesTypes;
  },
};
