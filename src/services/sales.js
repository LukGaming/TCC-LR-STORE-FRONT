import $http from "@/plugins/axios";

export async function createSale(sale, userId) {
  sale.userId = userId;
  console.log("sale", sale);
  var response = await $http.post("sales", sale);
  if (response.status == 201) {
    return response.data;
  }
  throw new Error(response.statusText);
}
