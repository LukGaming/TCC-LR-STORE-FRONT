export const mutations = {
  setManufacturers(state, payload) {
    state.manufacturers = payload;
  },
  setManufacturerName(state, payload) {
    state.manufacturerName = payload;
  },
  setErrorMessages(state, payload) {
    state.manufacturerMessages[payload.part] = payload.value;
  },
  addNewManufacturer(state, payload) {
    state.manufacturers.push(payload);
  },
  setManufacturerDialog(state, payload) {
    state.manufacturerDialog = payload;
  },
  setIsEditing(state, payload) {
    state.isEditing = payload;
  },
  setEditingManufacturer(state, payload) {
    state.editingManufacturer = payload;
  },

};
