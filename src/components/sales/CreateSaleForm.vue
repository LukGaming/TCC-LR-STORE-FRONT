<template>
  <div>
    <v-container>
      <div class="mt-5"></div>

      <v-text-field
        v-model="switchSerialNumber"
        label="Número de Série"
        hide-details
        outlined
        @blur="validateFields('validateSerialNumber')"
      >
      </v-text-field>
      <ErrorAlertComponent
        v-if="salesErrorMessages.serialNumber != ''"
        :errorMessage="salesErrorMessages.serialNumber"
      />
      <div class="mt-5"></div>
      <v-text-field
        v-model="switchQuantity"
        label="Quantidade"
        hide-details
        outlined
        type="number"
        min="1"
        @blur="validateFields('validateQuantity')"
      >
      </v-text-field>
      <ErrorAlertComponent
        v-if="salesErrorMessages.quantity != ''"
        :errorMessage="salesErrorMessages.quantity"
      />
      <div class="mt-5"></div>

      <v-text-field
        v-model="switchUnityValue"
        label="Valor da unidade"
        hide-details
        outlined
        type="number"
        @blur="validateFields('validateUnityValue')"
      >
      </v-text-field>
      <ErrorAlertComponent
        v-if="salesErrorMessages.unityValue != ''"
        :errorMessage="salesErrorMessages.unityValue"
      />
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

      <ErrorAlertComponent
        v-if="salesErrorMessages.selectedProduct != ''"
        :errorMessage="salesErrorMessages.selectedProduct"
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

      <v-select
        v-model="switchSelectedClient"
        label="Selecione o Cliente"
        :items="clients"
        item-text="full_name"
        item-value="id"
        outlined
        hide-details
        @blur="validateFields('validateSelectedClient')"
        :menu-props="{ bottom: true, offsetY: true }"
      >
      </v-select>

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

      {{ salesFormFields }}

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
  },
  computed: {
    ...mapGetters({
      paymentMethods: "paymentMethodStore/paymentMethods",
      products: "productStore/products",
      salesFormFields: "salesStore/salesFormFields",
      salesErrorMessages: "salesStore/salesErrorMessages",
      clients: "clientStore/clients",
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
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        case "sm":
          return 400;
        case "md":
          return 500;
        case "lg":
          return 600;
        case "xl":
          return 800;
        default:
          return null;
      }
    },
  },

  methods: {
    ...mapActions({
      getPaymentMethods: "paymentMethodStore/getPaymentMethods",
      getProducts: "productStore/getProducts",
      validateFields: "salesStore/validateFields",
      setSaleFormField: "salesStore/setSaleFormField",
      createSale: "salesStore/createSale",
      getClients: "clientStore/getClients",
    }),
  },
  created() {
    this.getPaymentMethods();
    this.getProducts();
    this.getClients();
  },
};
</script>
<style></style>
