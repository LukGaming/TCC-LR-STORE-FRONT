import $http from "@/plugins/axios";

export async function getPaymentMethods() {
  var response = await $http.get("payment-method");
  if (response.status == 200) {
    return response.data;
  }
}

export async function createPaymentMethod(paymentMethodName) {
  var formData = new FormData();
  formData.append("name", paymentMethodName);

  var resposta = await $http.post("payment-method", formData);
  if (resposta.status == 201) {
    return resposta.data;
  }

  throw new Error(resposta.data);
}
