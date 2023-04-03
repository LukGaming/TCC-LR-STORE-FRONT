export const state = {
  paymentMethods: [],
  headers: [
    {
      text: "Nome do Método de Pagamento",
      align: "start",
      value: "full_name",
    },
  ],
  paymentMethodsFormFields: {
    paymentMethodName: "",
  },
  paymentMethodsErrorMessages: {
    paymentMethodName: "",
  },
  paymentMethodDialog: false,
};
