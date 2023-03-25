import $http from "@/plugins/axios";
export const actions = {
    async getSales({ commit }, payload) {
        var response = await $http.get("getAllSales");
        if(response.status == 200){
            commit("setSales", response.data.vendas);
        }
        return payload;
    }
};
