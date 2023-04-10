export const state = {
  paymentMethods: [
    {
      id: 3,
      name: "Método 1",
      created_at: "2023-03-15T12:44:27.000000Z",
      updated_at: "2023-03-15T12:44:27.000000Z",
    },
  ],
  headers: [
    {
      text: "Nome do Método de Pagamento",
      align: "start",
      value: "name",
    },
  ],
  paymentMethodName: "",
  paymentMethodErrorMessages: {
    paymentMethodName: "",
  },
  paymentMethodDialog: false,
  isEditing: false,
};
