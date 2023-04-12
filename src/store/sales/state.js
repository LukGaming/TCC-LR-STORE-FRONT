export const state = {
  sales: [],
  headers: [
    {
      text: "Modelo",
      align: "start",
      value: "product.name",
    },
    { text: "Fabricante", value: "product.manufecturer.manufacture_name" },
    { text: "Quantidade", value: "quantity" },
    { text: "Cliente", value: "client.full_name" },
    { text: "Método de pagamento", value: "payment_method.name" },
    { text: "Usuário", value: "user.user_name" },
    { text: "Ações", value: "actions" },
  ],
  salesFormFields: {
    serialNumber: "",
    quantity: 1,
    unityValue: 0,
    selectedProduct: "",
    selectedPaymentMethod: "",
    selectedClient: "",
    saleDate: "",
  },
  salesErrorMessages: {
    serialNumber: "O número de série não pode ficar vazio.",
    quantity: "A quantidade não pode ser 0.",
    unityValue: "O valor não pode ser 0.",
    selectedProduct: "Você precisa selecionar um Produto.",
    selectedPaymentMethod: "Você precisa selecionar um Método de Pagamento.",
    selectedClient: "Você precisa selecionar um Cliente.",
    saleDate: "Por favor, selecione uma Data.",
  },
};
