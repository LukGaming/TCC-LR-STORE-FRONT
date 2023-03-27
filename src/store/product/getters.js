export const getters = {
  products(state) {
    return state.products;
  },
  headers(state) {
    return state.headers;
  },
  productName(state){
    return state.productName
  },
  selectedManufacturer(state){
    return state.selectedManufacturer
  },
  productErrorMessages(state){
    return state.productErrorMessages
  },
  
  productDialog(state) {
    return state.productDialog;
  },
  
  // manufacturerName(state) {
  //   return state.manufacturerName;
  // },
  // getManufacturerMessages(state) {
  //   return state.manufacturerMessages;
  // },
  canSendProductForm(state) {
    let canSend = true;
    for (const key in state.productErrorMessages) {
      if (state.productErrorMessages[key].length > 0) {
        canSend = false;
        break;
      }
    }
    return canSend;
  },
};
