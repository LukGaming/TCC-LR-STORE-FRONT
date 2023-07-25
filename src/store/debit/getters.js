export const getters = {
  debits(state) {
    return state.debits;
  },
  headers(state) {
    return state.headers;
  },
  debitDialog(state) {
    return state.creditDialog;
  },
  debitForm(state) {
    return state.creditForm;
  },
  debitErrorMessages(state) {
    return state.creditErrorMessages;
  },
  isEditing(state) {
    return state.isEditing;
  },
  deleteDialog(state) {
    return state.deleteDialog;
  },
};
