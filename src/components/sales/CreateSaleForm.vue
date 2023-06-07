<template>
  <div>
    <v-container>
      <AddProductFormDialog />

      <div class="mt-5"></div>
      <v-select
        v-model="switchSelectedSalesType"
        label="Selecione o Tipo de venda"
        :items="salesTypes"
        outlined
        hide-details
        @blur="validateFields('validateSelectedSalesType')"
        :menu-props="{ bottom: true, offsetY: true }"
      >
      </v-select>

      <ErrorAlertComponent
        v-if="salesErrorMessages.selectedSalesType != ''"
        :errorMessage="salesErrorMessages.selectedSalesType"
      />

      <div class="mt-5"></div>

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

      <ErrorAlertComponent
        v-if="salesErrorMessages.selectedPaymentMethod != ''"
        :errorMessage="salesErrorMessages.selectedPaymentMethod"
      />

      <div class="mt-5"></div>

      <v-combobox
        v-model="switchSelectedClient"
        label="Selecione o Cliente"
        :items="clients"
        item-text="full_name"
        item-value="id"
        outlined
        hide-details
        @blur="validateFields('validateSelectedClient')"
        :menu-props="{ bottom: true, offsetY: true }"
        autocomplete
      >
      </v-combobox>

      <ErrorAlertComponent
        v-if="salesErrorMessages.selectedClient != ''"
        :errorMessage="salesErrorMessages.selectedClient"
      />

      <div class="mt-5"></div>

      <DatePickerComponent />

      <ErrorAlertComponent
        v-if="salesErrorMessages.saleDate != ''"
        :errorMessage="salesErrorMessages.saleDate"
      />

      <div class="d-flex justify-start">
        <DefaultButton
          text_button="Adicionar Produto"
          @callback="setAddProductDialog(true)"
        >
        </DefaultButton>
      </div>

      <div class="d-flex justify-center">
        <DefaultButton text_button="Criar Venda" @callback="createSale">
        </DefaultButton>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    DefaultButton: () =>
      import("@/components/utilities/DefaultBlackButton.vue"),
    ErrorAlertComponent: () =>
      import("@/components/utilities/ErrorAlertComponent.vue"),
    DatePickerComponent: () =>
      import("@/components/sales/DatePickerComponent.vue"),
    AddProductFormDialog: () =>
      import("@/components/sales/AddProductDialog.vue"),
  },
  computed: {
    switchSelectedSalesType: {
      get() {
        return this.salesFormFields.selectedSalesType;
      },
      set(value) {
        this.setSaleFormField({ part: "selectedSalesType", value: value });
      },
    },
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
    switchSerialNumber: {
      get() {
        return this.salesFormFields.serialNumber;
      },
      set(value) {
        this.setSaleFormField({ part: "serialNumber", value: value });
      },
    },
    switchQuantity: {
      get() {
        return this.salesFormFields.quantity;
      },
      set(value) {
        this.setSaleFormField({ part: "quantity", value: value });
      },
    },
    switchUnityValue: {
      get() {
        return this.salesFormFields.unityValue;
      },
      set(value) {
        this.setSaleFormField({ part: "unityValue", value: value });
      },
    },
    switchSelectedClient: {
      get() {
        return this.salesFormFields.selectedClient;
      },
      set(value) {
        this.setSaleFormField({ part: "selectedClient", value: value });
      },
    },
    switchSelectedManufacturer: {
      get() {
        return this.selectedManufacturer;
      },
      set(value) {
        this.getProductsByManufacturers(value.id);
      },
    },
    ...mapGetters({
      paymentMethods: "paymentMethodStore/paymentMethods",
      products: "productStore/products",
      salesFormFields: "salesStore/salesFormFields",
      salesErrorMessages: "salesStore/salesErrorMessages",
      clients: "clientStore/clients",
      manufacturers: "manufacturerStore/manufacturers",
      productsByManufacturers: "salesStore/productsByManufacturers",
      selectedManufacturerFromFilter:
        "salesStore/selectedManufacturerFromFilter",
      salesTypes: "salesStore/salesTypes",
    }),
  },

  methods: {
    ...mapActions({
      setAddProductDialog: "salesStore/setAddProductDialog",
      getPaymentMethods: "paymentMethodStore/getPaymentMethods",
      getProducts: "productStore/getProducts",
      getManufacturers: "manufacturerStore/getManufacturers",
      validateFields: "salesStore/validateFields",
      setSaleFormField: "salesStore/setSaleFormField",
      createSale: "salesStore/createSale",
      getClients: "clientStore/getClients",
      addSerialNumber: "salesStore/addSerialNumber",
      removeSerialNumber: "salesStore/removeSerialNumber",
      setSerialNumbersDialog: "salesStore/setSerialNumbersDialog",
      setSelectedManufacturer: "salesStore/setSelectedManufacturer",
      getProductsByManufacturers: "salesStore/getProductsByManufacturers",
    }),
  },
  created() {
    this.getProducts();
    this.getPaymentMethods();
    this.getClients();
    this.getManufacturers();
    this.getProductsByManufacturers(null);
  },
};
</script>
<style></style>
