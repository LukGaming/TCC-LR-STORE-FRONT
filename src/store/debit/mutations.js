export const mutations = {
  setDebits(state, payload) {
    console.log(payload);
    state.debits = payload;
  },
  setCreditDialog(state, payload) {
    state.creditDialog = payload;
  },
  setCreditForm(state, payload) {
    state.creditForm[payload.part] = payload.value;
  },
  setIsEditing(state, payload) {
    state.isEditing = payload;
  },
  setCreditErrorMessages(state, payload) {
    state.creditErrorMessages[payload.part] = payload.value;
  },
  clearCreditFields(state) {
    state.creditForm = {
      installment_quantity: 0,
      installment_percentage: 0,
    };
    state.creditErrorMessages = {
      installment_quantity: "",
      installment_percentage: "",
    };
  },
  addNewCredit(state, payload) {
    state.credits.push(payload);
  },
  closeDeleteDialog(state) {
    state.deleteDialog = false;
  },
};
