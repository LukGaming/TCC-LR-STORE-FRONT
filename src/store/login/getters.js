export const getters = {
  getPasswordField(state) {
    return state.passwordField;
  },
  getLoginField(state) {
    return state.loginField;
  },
  getLoginErrors(state) {
    return state.loginErrors;
  },
  canSendFormCategory(state) {
    let canSend = true;
    for (const key in state.loginErrors) {
      if (state.loginErrors[key].length > 0) {
        canSend = false;
        break;
      }
    }
    return canSend;
  },
  
};
