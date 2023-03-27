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
      value: "manufacturer.manufacture_name",
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
