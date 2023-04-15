import $http from "@/plugins/axios";

export async function createSale(
  serialNumber,
  quantity,
  unityValue,
  selectedProduct,
  selectedPaymentMethod,
  selectedClient,
  saleDate,
  user_id
) {
  //TODO: send saleDate
  console.log(saleDate);
  var formData = new FormData();
  formData.append("serial_number", serialNumber);
  formData.append("quantity", quantity);
  formData.append("unity_value", unityValue);
  formData.append("product_id", selectedProduct);
  formData.append("payment_method_id", selectedPaymentMethod);
  formData.append("client_id", selectedClient);
  formData.append("user_id", user_id);
  var response = await $http.post("sales", formData);

  if (response.status == 201) {
    return response.data;
  }
  throw new Error(response.statusText);
}
