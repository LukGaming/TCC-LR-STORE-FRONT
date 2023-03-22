export const mutations = {
  setFields(state, payload) {
    state[payload.part] = payload.value;
  },
  setLoginErrors(state, payload) {
    state.loginErrors[payload.part] = payload.value;
  },
};
