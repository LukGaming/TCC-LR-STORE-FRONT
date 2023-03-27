export const state = {
  products: [],
  headers: [
    {
      text: "Nome do Produto",
      align: "start",
      value: "name",
    },
    {
      text: "Fabricante",
      value: "manufecturer.manufacture_name",
    },
  ],
  productName: "",
  selectedManufacturer: null,
  productErrorMessages: {
    productName: "",
    selectedManufacturer: "",
  },
  productDialog: false,
};
