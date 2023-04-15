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
    serialNumbers: [],
    quantity: 1,
    unityValue: 0,
    selectedProduct: "",
    selectedPaymentMethod: "",
    selectedClient: "",
    saleDate: "",
  },
  salesErrorMessages: {
    serialNumbers: [""],
    quantity: "",
    unityValue: "",
    selectedProduct: "",
    selectedPaymentMethod: "",
    selectedClient: "",
    saleDate: "",
  },
};
