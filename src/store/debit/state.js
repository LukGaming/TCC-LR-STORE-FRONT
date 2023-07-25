export const state = {
  debits: [],
  isEditing: false,
  headers: [
    { text: "Quantidade de parcelas", value: "installments_quantity" },
    { text: "Porcentagem ", value: "installment_percentage" },
    { text: "Actions", value: "actions", sortable: false },
  ],
  debitDialog: false,
  debitForm: {
    installment_quantity: 0,
    installment_percentage: 0,
  },
  debitErrorMessages: {
    installment_quantity: "",
    installment_percentage: "",
  },
  deleteDialog: true,
};
