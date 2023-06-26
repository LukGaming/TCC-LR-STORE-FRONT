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
  const [
    productError,
    selectedPaymentMethodError,
    selectedClientError,
    selectedSalesTypeError,
    saleDateError,
  ] = salesValidator(
    products,
    selectedPaymentMethod,
    selectedClient,
    selectedSalesType,
    saleDate
  );
  return (
    productError == "" &&
    selectedPaymentMethodError == "" &&
    selectedClientError == "" &&
    selectedSalesTypeError == "" &&
    saleDateError == ""
  );
}
