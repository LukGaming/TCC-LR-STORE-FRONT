export const getters = {
  selectedPaymentInstallMentItem(state) {
    return state.selectedPaymentInstallMentItem;
  },
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
  computedPercentage: (state) => {
    const selectedInstallment = state.selectedPaymentInstallMentItem;
    console.log("selectedInstallment: ", selectedInstallment);

    const computedTotalValue = state.salesFormFields.products.reduce(
      (total, product) => {
        return total + product.quantity * product.unityValue;
      },
      0
    );

    console.log("computedTotalValue: ", computedTotalValue);

    if (computedTotalValue === 0) return 0;

    if (state.salesFormFields.paymentMethod === 1) {
      return computedTotalValue;
    } else if (
      state.salesFormFields.paymentMethod === 2 ||
      state.salesFormFields.paymentMethod === 3
    ) {
      if (selectedInstallment === null) return computedTotalValue;

      // Convert the percentage string to a number
      const percentage = parseFloat(selectedInstallment.installment_percentage);

      if (isNaN(percentage)) {
        // Handle invalid percentage value
        console.error(
          "Invalid percentage value:",
          selectedInstallment.installment_percentage
        );
        return computedTotalValue;
      }

      // Calculate the amount to add based on the percentage
      const amountToAdd = (percentage / 100) * computedTotalValue;
      return computedTotalValue + amountToAdd;
    } else {
      return 0;
    }
  },
};
