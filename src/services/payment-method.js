import $http from "@/plugins/axios";

export async function getPaymentMethods() {
  var response = await $http.get("payment-method");
  if (response.status == 200) {
    return response.data;
  }
}
