export const mutations = {
  setSales(state, payload) {
    state.sales = payload;
  },
  setSaleFormField(state, payload) {
    console.log("inside mutation");
    console.log("part", payload.part)
    console.log("value", payload.value)
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
      state.salesFormFields.serialNumbers.push("");
      state.salesErrorMessages.serialNumbers.push("");
    }
  },
  removeSerialNumber(state) {
    if (state.salesFormFields.quantity > 1) {
      state.salesFormFields.quantity--;
      state.salesFormFields.serialNumbers.pop();
      state.salesErrorMessages.serialNumbers.pop();
    }
  },
  setSerialNumbersDialog(state, payload) {
    state.serialNumbersDialog = payload;
  },
  setSerialNumberErrorMessages(state, payload) {
    state.salesErrorMessages.serialNumbers[payload.index] = payload.value;
  },
  setSerialNumbers(state, payload) {
    state.salesFormFields.serialNumbers[payload.index] = payload.value;
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
  clearSalesForm(state){
    state.salesFormFields=  {
      serialNumbers: [],
      quantity: 1,
      unityValue: 0,
      selectedProduct: "",
      selectedPaymentMethod: "",
      selectedClient: "",
      saleDate: "",
      selectedSalesType: null,
    };

    state.salesErrorMessages =  {
      serialNumber: "",
      serialNumbers: [""],
      quantity: "",
      unityValue: "",
      selectedProduct: "",
      selectedPaymentMethod: "",
      selectedClient: "",
      saleDate: "",
      selectedSalesType: "",
    }
  },
  setSelectedManufacturerFromFilter(state, payload){
    state.selectedManufacturerFromFilter = payload;
  }
};
