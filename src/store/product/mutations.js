export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  setProductName(state, payload){
    state.productName = payload;
  },
  setSelectedManufacturer(state, payload){
    state.selectedManufacturer = payload
  }

};
