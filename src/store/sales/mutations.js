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
  setSerialNumberErrorMessages(state, payload){
    console.log(payload.index)
    state.salesErrorMessages.serialNumbers[payload.index] = payload.value
    console.log(state.salesErrorMessages.serialNumbers[payload.index])
  },
  setSerialNumbers(state, payload){
    state.salesFormFields.serialNumbers[payload.index] = payload.value
  },
  setSerialNumberFields(state){
    state.salesFormFields.serialNumbers = new Array(state.salesFormFields.quantity).fill("");
  },
  setShowContent(state, payload){
    state.showContent = payload
  },
  setfirstSerialNumbers(state, payload){
    state.salesFormFields.serialNumbers = payload;
  }
  
};
