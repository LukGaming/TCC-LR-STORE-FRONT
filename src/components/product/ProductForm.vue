<template>
  <div>
    <div class="mt-5"></div>
    <v-text-field
      v-model="switchProductName"
      label="Nome do Produto"
      hide-details
      outlined
      @blur="validateFields('validadeProductName')"
    >
    </v-text-field>
    <ErrorAlertComponent errorMessage="Erro de nome" />
    <v-select
      v-model="switchSelectedManufacturer"
      label="Selecionar uma fabricante"
      :items="manufacturers"
      item-text="manufacture_name"
      item-value="id"
      outlined
      hide-details
    >
    </v-select>
    <ErrorAlertComponent errorMessage="Erro de fabricante" />

    <!-- <ErrorAlertComponent
      v-if="getManufacturerMessages.manufacturerName != ''"
      :errorMessage="getManufacturerMessages.manufacturerName"
    /> -->

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
    }),
  },
  created() {
    this.getManufacturers();
  },
};
</script>
<style></style>
