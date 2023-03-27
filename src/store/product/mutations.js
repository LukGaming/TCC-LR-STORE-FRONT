export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  setProductName(state, payload) {
    state.productName = payload;
  },
  setSelectedManufacturer(state, payload) {
    state.selectedManufacturer = payload;
  },
  setProductErrorMessages(state, payload) {
    state.productErrorMessages[payload.part] = payload.value;
  },
  addNewProduct(state, payload) {
    state.products.push(payload);
  },
  clearProductForm(state) {
    state.productErrorMessages.selectedManufacturer = "";
    state.productErrorMessages.productName = "";
    state.productName = "";
    state.selectedManufacturer = "";
  },
  setProductDialog(state, payload){
    state.productDialog = payload;
  }
};
