export const mutations = {
  setPaymentMethods(state, payload) {
    state.paymentMethods = payload;
  },
  setClientFormFields(state, payload) {
    state.clientFormFields[payload.part] = payload.value;
  },
  SetClientErrorMessages(state, payload) {
    state.clientErrorMessages[payload.part] = payload.value;
  },
  addNewClient(state, payload) {
    state.clients.push(payload);
  },
  clearClientForm(state) {
    state.clientFormFields = {
      clientName: "",
      clientPhoneNumber: "",
      clientCpf: "",
    };

    state.clientErrorMessages = {
      clientName: "",
      clientPhoneNumber: "",
      clientCpf: "",
    };
  },
  setClientDialog(state, payload) {
    state.clientDialog = payload;
  },
  
};
