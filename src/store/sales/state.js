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
    { text: "Usuário", value: "user.user_name", },
    { text: "Ações", value: "actions" },
  ],
  salesFormFields: {
    serial_number: "",
    quantity: 1,
    unity_value: 0,
    selectedProduct: "",
    selectedPaymentMethod: "",
    selectedClient: "",
  },
  salesErrorMessages: {
    serial_number: "",
    quantity: "",
    unity_value: "",
    selectedProduct: "",
    selectedPaymentMethod: "",
    selectedClient: "",
  }
};
