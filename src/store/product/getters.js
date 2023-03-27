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
  }
  
  // manufacturerDialog(state) {
  //   return state.manufacturerDialog;
  // },
  
  // manufacturerName(state) {
  //   return state.manufacturerName;
  // },
  // getManufacturerMessages(state) {
  //   return state.manufacturerMessages;
  // },
  // canSendManufacturerForm(state) {
  //   let canSend = true;
  //   for (const key in state.manufacturerMessages) {
  //     if (state.manufacturerMessages[key].length > 0) {
  //       canSend = false;
  //       break;
  //     }
  //   }
  //   return canSend;
  // },
};
