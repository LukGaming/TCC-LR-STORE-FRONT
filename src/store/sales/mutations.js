export const mutations = {
  setAddProductDialog(state, payload) {
    state.productDialog = payload;
  },
  addProduct(state, payload) {
    const newProduct = {
      ...payload,
      selectedProduct: { ...payload.selectedProduct },
    };
    state.salesFormFields.products.push(newProduct);
  },
  setSelectedPaymentInstallMentItem(state, payload) {
    state.selectedPaymentInstallMentItem = payload;
  },
  setSales(state, payload) {
    state.sales = payload;
  },
  setSaleFormField(state, payload) {
    state.salesFormFields[payload.part] = payload.value;
  },
  setProductFormFields(state, payload) {
    state.productFormFields[payload.part] = payload.value;
  },
  setSalesErrorMessages(state, payload) {
    state.salesErrorMessages[payload.part] = payload.value;
  },
  addNewSale(state, payload) {
    state.sales.push(payload);
  },
  addSerialNumber(state) {
    if (state.productFormFields.quantity < 10) {
      state.productFormFields.quantity++;
      state.productFormFields.serialNumbers.push("");
    }
  },
  removeSerialNumber(state) {
    if (state.productFormFields.quantity > 1) {
      state.productFormFields.quantity--;
      state.productFormFields.serialNumbers.pop();
    }
  },
  setSerialNumbersDialog(state, payload) {
    state.serialNumbersDialog = payload;
  },
  setSerialNumberErrorMessages(state, payload) {
    state.salesErrorMessages.serialNumbers[payload.index] = payload.value;
  },
  setSerialNumbers(state, payload) {
    state.productFormFields.serialNumbers[payload.index] = payload.value;
  },
  setSerialNumberFields(state) {
    state.salesFormFields.serialNumbers = new Array(
      state.salesFormFields.quantity
    ).fill("");
  },
  setShowContent(state, payload) {
    state.showContent = payload;
  },
  setfirstSerialNumbers(state, payload) {
    state.salesFormFields.serialNumbers = payload;
  },
  setProductsByManufacturers(state, payload) {
    state.productsByManufacturers = payload;
  },
  clearSalesForm(state) {
    state.salesFormFields = {
      serialNumbers: [],
      quantity: 1,
      unityValue: 0,
      selectedProduct: "",
      selectedPaymentMethod: "",
      selectedClient: "",
      saleDate: "",
      selectedSalesType: null,
      products: [],
    };

    state.salesErrorMessages = {
      products: "",
      selectedProduct: "",
      selectedPaymentMethod: "",
      selectedClient: "",
      saleDate: "",
      selectedSalesType: "",
    };
  },
  setSelectedManufacturerFromFilter(state, payload) {
    state.selectedManufacturerFromFilter = payload;
  },
};
