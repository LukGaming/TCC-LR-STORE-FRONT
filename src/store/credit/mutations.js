export const mutations = {
  setCredits(state, payload) {
    state.credits = payload;
  },
  setCreditDialog(state, payload) {
    state.creditDialog = payload;
  },
  setCreditForm(state, payload) {
    state.creditForm[payload.part] = payload.value;
  },
};
