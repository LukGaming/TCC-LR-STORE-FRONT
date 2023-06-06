export function salesValidator(
  products,
  selectedPaymentMethod,
  selectedClient,
  selectedSalesType,
  saleDate
) {
  return [
    validateProducts(products),
    validateSelectedPaymentMethod(selectedPaymentMethod),
    validateSelectedClient(selectedClient),
    validateSalesType(selectedSalesType),
    validateSaleDate(saleDate),
  ];
}

function validateProducts(products) {
  return products == null || products == []
    ? "A lista de produtos não pode ficar vazia."
    : "";
}
// function validateQuantity(quantity) {
//   return quantity == null || quantity == ""
//     ? "A Quantidade não pode ficar vazia."
//     : quantity < 1
//     ? "A Quantidade não pode ser menor que 1."
//     : "";
// }

// function validateUnityValue(unityValue) {
//   return unityValue == null || unityValue == ""
//     ? "O Valor da Unidade não pode ficar vazia."
//     : unityValue < 1
//     ? "A quantidade não pode ser menor que 1."
//     : "";
// }
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

export function validateSalesType(saleType) {
  console.log("inside validator", saleType);
  return saleType == null || saleType == ""
    ? "Selecione um tipo de Venda."
    : "";
}

export function canSendSaleForm(
  products,
  selectedPaymentMethod,
  selectedClient,
  selectedSalesType,
  saleDate
) {
  return salesValidator(
    products,
    selectedPaymentMethod,
    selectedClient,
    selectedSalesType,
    saleDate
  );
}
