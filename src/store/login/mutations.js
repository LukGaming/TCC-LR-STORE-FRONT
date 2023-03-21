export const mutations = {
  login(state, payload) {
    state[payload.part] = payload.value;
  },
  logout(state, payload) {
    state.isLogged = false;
    state.loggedUser = {};
    return payload;
  },
};
