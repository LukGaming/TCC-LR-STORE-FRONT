export const mutations = {
  setDebits(state, payload) {
    state.debits = payload;
  },
  setDebitDialog(state, payload) {
    state.debitDialog = payload;
  },
  setDebitForm(state, payload) {
    state.debitForm[payload.part] = payload.value;
  },
  setIsEditing(state, payload) {
    state.isEditing = payload;
  },
  setDebitErrorMessages(state, payload) {
    state.debitErrorMessages[payload.part] = payload.value;
  },
  clearDebitFields(state) {
    state.debitForm = {
      installment_quantity: 0,
      installment_percentage: 0,
    };
    state.debitErrorMessages = {
      installment_quantity: "",
      installment_percentage: "",
    };
  },
  addNewDebit(state, payload) {
    state.debits.push(payload);
  },
  closeDeleteDialog(state) {
    state.deleteDialog = false;
  },
};
