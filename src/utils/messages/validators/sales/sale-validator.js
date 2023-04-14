export function salesValidator(
  serialNumber,
  quantity,
  unityValue,
  selectedProduct,
  selectedPaymentMethod,
  selectedClient,
  saleDate
) {
  return [
    validateSerialNumber(serialNumber),
    validateQuantity(quantity),
    validateUnityValue(unityValue),
    validateSelectedProduct(selectedProduct),
    validateSelectedPaymentMethod(selectedPaymentMethod),
    validateSelectedClient(selectedClient),
    validateSaleDate(saleDate),
  ];
}

function validateSerialNumber(serialNumber) {
  return serialNumber == null || serialNumber == ""
    ? "O Número de Série não pode ficar vazio."
    : "";
}
function validateQuantity(quantity) {
  return quantity == null || quantity == ""
    ? "A Quantidade não pode ficar vazia."
    : quantity < 1
    ? "A Quantidade não pode ser menor que 1."
    : "";
}

function validateUnityValue(unityValue) {
  return unityValue == null || unityValue == ""
    ? "O Valor da Unidade não pode ficar vazia."
    : unityValue < 1
    ? "A quantidade não pode ser menor que 1."
    : "";
}
export function validateSelectedProduct(selectedProduct) {
  return selectedProduct == null || selectedProduct == ""
    ? "Selecione um Produto."
    : "";
}
export function validateSelectedPaymentMethod(selectedPaymentMethod) {
  return selectedPaymentMethod == null || selectedPaymentMethod == ""
    ? "Selecione um Método de Pagamento."
    : "";
}
export function validateSelectedClient(selectedClient) {
  return selectedClient == null || selectedClient == ""
    ? "Selecione um Cliente."
    : "";
}
export function validateSaleDate(saleDate) {
  return saleDate == null || saleDate == "" ? "Selecione uma Data." : "";
}
