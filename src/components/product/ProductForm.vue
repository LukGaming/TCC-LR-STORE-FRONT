<template>
  <div>
    <div class="mt-5"></div>
    <v-text-field
      v-model="switchProductName"
      label="Nome do Produto"
      hide-details
      outlined
      @blur="validateFields('validateProductName')"
    >
    </v-text-field>

    <ErrorAlertComponent
      v-if="productErrorMessages.productName != ''"
      :errorMessage="productErrorMessages.productName"
    />
    <div class="mt-5"></div>
    <v-select
      v-model="switchSelectedManufacturer"
      label="Selecionar uma fabricante"
      :items="manufacturers"
      item-text="manufacture_name"
      item-value="id"
      outlined
      hide-details
      @blur="validateFields('validateSelectedManufacturer')"
    >
    </v-select>
    <ErrorAlertComponent
      v-if="productErrorMessages.selectedManufacturer != ''"
      :errorMessage="productErrorMessages.selectedManufacturer"
    />

    <div class="mt-5"></div>
    <div class="d-flex justify-center">
      <DefaultButton text_button="Criar Fabricante" @callback="createProduct">
      </DefaultButton>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    DefaultButton: () =>
      import("@/components/utilities/DefaultBlackButton.vue"),
    ErrorAlertComponent: () =>
      import("@/components/utilities/ErrorAlertComponent.vue"),
  },
  computed: {
    ...mapGetters({
      productName: "productStore/productName",
      manufacturers: "manufacturerStore/manufacturers",
      selectedManufacturer: "productStore/selectedManufacturer",
      productErrorMessages: "productStore/productErrorMessages",
    }),
    switchProductName: {
      get() {
        return this.productName;
      },
      set(value) {
        this.setProductName(value);
      },
    },
    switchSelectedManufacturer: {
      get() {
        return this.selectedManufacturer;
      },
      set(value) {
        this.setSelectedManufacturer(value);
      },
    },
  },

  methods: {
    ...mapActions({
      setProductName: "productStore/setProductName",
      getManufacturers: "manufacturerStore/getManufacturers",
      createProduct: "productStore/createProduct",
      setSelectedManufacturer: "productStore/setSelectedManufacturer",
      validateFields: "productStore/validateFields",
    }),
  },
  created() {
    this.getManufacturers();
  },
};
</script>
<style></style>
