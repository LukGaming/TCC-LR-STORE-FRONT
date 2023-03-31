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
    clientName: "Paulo",
    clientPhoneNumber: "64992753115",
    clientCpf: "70198256132",
  },
  clientErrorMessages: {
    clientName: "",
    clientPhoneNumber: "",
    clientCpf: "",
  },
  clientDialog: false,
};
