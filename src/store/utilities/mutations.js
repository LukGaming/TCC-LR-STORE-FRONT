export const mutations = {
  setIsLoading(state, payload) {
    state.isLoading = payload;
  },
  setSnackBar(state, payload) {
    state.snackBarAlert[payload.part] = payload.value;
  },
  setSnackBarCompletly(state, payload) {
    state.snackBarAlert = payload;
  },
};
