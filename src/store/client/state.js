export const state = {
  clients: [],
  headers: [
    {
      text: "Nome do cliente",
      align: "start",
      value: "full_name",
    },
    {
      text: "Número de telefone",
      value: "phone_number",
    },
    {
      text: "Cpf",
      value: "cpf",
    },
  ],
  productName: "",
  selectedManufacturer: null,
  productErrorMessages: {
    productName: "",
    selectedManufacturer: "",
  },
  productDialog: false,
};
