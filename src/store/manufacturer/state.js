export const state = {
  manufacturers: [],
  headers: [
    {
      text: "Nome da Fabricante",
      align: "start",
      value: "manufacture_name",
    },
    { text: "Actions", value: "actions", sortable: false },
  ],
  manufacturerName: "",
  manufacturerMessages: {
    manufacturerName: "",
  },
  manufacturerDialog: false,
  isEditing: false,
  editingManufacturer: {},
};
