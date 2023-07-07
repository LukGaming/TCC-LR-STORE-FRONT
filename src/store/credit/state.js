export const state = {
  credits: [],
  headers: [
    { text: "Quantidade de parcelas", value: "installments_quantity" },
    { text: "Porcentagem ", value: "installment_percentage" },
  ],
  creditDialog: true,
  creditForm: {
    installment_quantity: 0,
    installment_percentage: 0,
  },
};
