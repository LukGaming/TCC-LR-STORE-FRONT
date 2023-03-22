export const mutations = {
  login(state, payload) {
    state[payload.part] = payload.value;
  },
  logout(state, payload) {
    state.isLogged = false;
    state.loggedUser = {};
    return payload;
  },
  setFields(state, payload) {
    state[payload.part] = payload.value;
  },
  setLoginErrors(state, payload) {
    state.loginErrors[payload.part] = payload.value;
  },
};
