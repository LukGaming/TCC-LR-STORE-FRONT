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
  clientFormFields: {
    clientName: "",
    clientPhoneNumber: "",
    clientCpf: "",
  },
  clientErrorMessages: {
    clientName: "",
    clientPhoneNumber: "",
    clientCpf: "",
  },
  clientDialog: false,
};
