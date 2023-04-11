<template>
  <div>
    <div class="mt-5"></div>
    <v-select
      v-model="switchSelectedProduct"
      label="Selecione um Produto"
      :items="products"
      item-text="name"
      item-value="id"
      outlined
      hide-details
      @blur="validateFields('validateSelectedProduct')"
      :menu-props="{ bottom: true, offsetY: true }"
    >
    </v-select>

    <!-- <ErrorAlertComponent
      v-if="salesErrorMessages.selectedProduct != ''"
      :errorMessage="salesErrorMessages.selectedProduct"
    /> -->

    <v-select
      v-model="switchSelectedPaymentMethod"
      label="Selecione o Método de Pagamento"
      :items="paymentMethods"
      item-text="name"
      item-value="id"
      outlined
      hide-details
      @blur="validateFields('validateSelectedPaymentMethod')"
      :menu-props="{ bottom: true, offsetY: true }"
    >
    </v-select>

    <!-- <ErrorAlertComponent
      v-if="salesErrorMessages.selectedPaymentMethod != ''"
      :errorMessage="salesErrorMessages.selectedPaymentMethod"
    /> -->

    <div class="mt-5"></div>

    <div class="d-flex justify-center">
      <DefaultButton text_button="Criar Venda" @callback="createSale">
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
    // ErrorAlertComponent: () =>
    //   import("@/components/utilities/ErrorAlertComponent.vue"),
  },
  computed: {
    ...mapGetters({
      paymentMethods: "paymentMethodStore/paymentMethods",
      products: "productStore/products",
      salesFormFields: "salesStore/salesFormFields",
    }),
    switchSelectedProduct: {
      get() {
        return this.salesFormFields.selectedProduct;
      },
      set(value) {
        this.setSaleFormField({ part: "selectedProduct", value: value });
      },
    },
    switchSelectedPaymentMethod: {
      get() {
        return this.salesFormFields.selectedPaymentMethod;
      },
      set(value) {
        this.setSaleFormField({ part: "selectedPaymentMethod", value: value });
      },
    },
  },

  methods: {
    ...mapActions({
      getPaymentMethods: "paymentMethodStore/getPaymentMethods",
      getProducts: "productStore/getProducts",
      validateFields: "paymentMethodStore/validateFields",
      setSaleFormField: "salesStore/setSaleFormField",
      createSale: "salesStore/createSale"
    }),
  },
  created() {
    this.getPaymentMethods();
    this.getProducts();
  },
};
</script>
<style></style>
