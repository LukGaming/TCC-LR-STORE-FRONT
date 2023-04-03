export const getters = {
  clients(state) {
    return state.clients;
  },
  headers(state) {
    return state.headers;
  },
  clientFormFields(state){
    return state.clientFormFields;
  },
  getClientErrorMessages(state){
    return state.clientErrorMessages;
  },
  clientDialog(state){
    return state.clientDialog;
  }

};
