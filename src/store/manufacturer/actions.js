import $http from "@/plugins/axios";
export const actions = {
    async getManufacturers({ commit }, payload) {
        var response = await $http.get("manufacturer");
        if(response.status == 200){
            commit("setManufacturers", response.data);
        }
        return payload;
    },
    setManufacturerName({commit}, payload){
        commit("setManufacturerName", payload);
    },
    validateFields({commit}, payload){
        return commit, payload
    }
};
