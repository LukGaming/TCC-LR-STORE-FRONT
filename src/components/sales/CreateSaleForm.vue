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

      <v-select
        v-model="switchPaymentMethod"
        label="Método de pagamento"
        :items="paymentMethods"
        item-value="id"
        item-text="name"
        outlined
        hide-details
        @blur="validateFields('validateSelectedSalesType')"
        :menu-props="{ bottom: true, offsetY: true }"
      >
      </v-select>
      <div class="mt-5"></div>
      <div v-if="salesFormFields.paymentMethod == 2">
        <v-select
          @change="($value) => setPaymentMethodToForm($value)"
          label="Selecione a quantidade de parcelas em crédito"
          :items="credits"
          item-value="id"
          :item-text="
            (item) =>
              `${item.installments_quantity} parcelas - ${item.installment_percentage}%`
          "
          outlined
          hide-details
          :menu-props="{ bottom: true, offsetY: true }"
        >
        </v-select>
      </div>
      <div v-if="salesFormFields.paymentMethod == 3">
        <v-select
          @change="(item) => setPaymentMethodToForm(item)"
          item-value="id"
          label="Selecione a quantidade de juros em débito"
          :items="debits"
          :item-text="
            (item) =>
              `${item.installments_quantity} parcela - ${item.installment_percentage}%`
          "
          outlined
          hide-details
          @blur="validateFields('validateSelectedSalesType')"
          :menu-props="{ bottom: true, offsetY: true }"
        >
        </v-select>
      </div>

      <ErrorAlertComponent
        v-if="salesErrorMessages.saleDate != ''"
        :errorMessage="salesErrorMessages.saleDate"
      />
      <div class="mt-5"></div>
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

      <div v-for="(product, index) in salesFormFields.products" :key="index">
        <div>Quantidade : {{ product.quantity }}</div>
        <div>Valor da unidade: {{ product.unityValue }}</div>
        <div>
          Valor total: {{ (product.quantity * product.unityValue).toFixed(2) }}
        </div>
        <hr />
      </div>

      Valor total dos produtos: {{ computedTotalValue }} <br />
      Valor a ser cobrado: {{ computedPercentage }}<br />
      Valor pago em juros: {{ computedPercentage - computedTotalValue }}
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
    computedTotalValue: {
      get() {
        const products = this.salesFormFields.products;
        if (products.length === 0) {
          return 0;
        }

        return products.reduce((total, product) => {
          return total + product.quantity * product.unityValue;
        }, 0);
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
    switchPaymentMethod: {
      get() {
        return this.salesFormFields.paymentMethod;
      },
      set(value) {
        this.setSaleFormField({ part: "paymentMethod", value: value });
      },
    },
    ...mapGetters({
      products: "productStore/products",
      salesFormFields: "salesStore/salesFormFields",
      salesErrorMessages: "salesStore/salesErrorMessages",
      clients: "clientStore/clients",
      manufacturers: "manufacturerStore/manufacturers",
      productsByManufacturers: "salesStore/productsByManufacturers",
      selectedManufacturerFromFilter:
        "salesStore/selectedManufacturerFromFilter",
      salesTypes: "salesStore/salesTypes",
      credits: "credit/credits",
      debits: "debitStore/debits",
      paymentMethods: "salesStore/paymentMethods",
      computedPercentage: "salesStore/computedPercentage",
      selectedPaymentInstallMentItem:
        "salesStore/selectedPaymentInstallMentItem",
    }),
  },

  methods: {
    ...mapActions({
      setAddProductDialog: "salesStore/setAddProductDialog",
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
      getCreditsFromApi: "credit/getCreditsFromApi",
      getDebitsFromApi: "debitStore/getDebitsFromApi",
      setSelectedPaymentInstallMentItem:
        "salesStore/setSelectedPaymentInstallMentItem",
    }),
    setPaymentMethodToForm(value) {
      this.setSelectedPaymentInstallMentItem(value);
    },
  },
  created() {
    this.getProducts();
    this.getClients();
    this.getManufacturers();
    this.getProductsByManufacturers(null);
    this.getCreditsFromApi();
    this.getDebitsFromApi();
  },
};
</script>
<style></style>
