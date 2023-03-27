import $http from "@/plugins/axios";
export const actions = {
  async getProducts({ commit }, payload) {
    var response = await $http.get("product");
    if (response.status == 200) {
      commit("setProducts", response.data);
    }
    return payload;
  },
  setProductName({commit}, payload){
    commit("setProductName", payload)
  },
  createProduct({commit}, payload){
    return commit, payload
  },
  validateFields({commit}, payload){
    return commit, payload
  },
  setSelectedManufacturer({commit}, payload){
    commit("setSelectedManufacturer", payload)
  }
  
};
