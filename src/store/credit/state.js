export const state = {
  credits: [],
  isEditing: false,
  headers: [
    { text: "Quantidade de parcelas", value: "installments_quantity" },
    { text: "Porcentagem ", value: "installment_percentage" },
    { text: "Actions", value: "actions", sortable: false },
  ],
  creditDialog: false,
  creditForm: {
    installment_quantity: 0,
    installment_percentage: 0,
  },
  creditErrorMessages: {
    installment_quantity: "",
    installment_percentage: "",
  },
  deleteDialog: true,
};
