<template>
  <div>
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

    <v-menu
      ref="menu1"
      v-model="menu1"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="SwitchDate"
          label="Data da Venda"
          hint="Formato DD/MM/AAA"
          persistent-hint
          outlined
          hide-details
          prepend-icon="mdi-calendar"
          v-bind="attrs"
          @blur="date = parseDate(dateFormatted)"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        no-title
        @input="menu1 = false"
      ></v-date-picker>
    </v-menu>

    {{ salesFormFields }}

    <div class="d-flex justify-center">
      <DefaultButton text_button="Criar Venda" @callback="createSale">
      </DefaultButton>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: this.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
    };
  },
  components: {
    DefaultButton: () =>
      import("@/components/utilities/DefaultBlackButton.vue"),
    ErrorAlertComponent: () =>
      import("@/components/utilities/ErrorAlertComponent.vue"),
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
    SwitchDate: {
      get() {
        return this.salesFormFields.saleDate;
      },
      set(value) {
        this.setSaleFormField({ part: "saleDate", value: value });
      },
    },
  },

  methods: {
    ...mapActions({
      getPaymentMethods: "paymentMethodStore/getPaymentMethods",
      getProducts: "productStore/getProducts",
      validateFields: "paymentMethodStore/validateFields",
      setSaleFormField: "salesStore/setSaleFormField",
      createSale: "salesStore/createSale",
      getClients: "clientStore/getClients",
    }),
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${day.padStart(2, "0")}-${month.padStart(2, "0")}-${year}`;
    },
  },
  created() {
    this.getPaymentMethods();
    this.getProducts();
    this.getClients();
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
      this.setSaleFormField({ part: "saleDate", value: this.dateFormatted });
      return val;
    },
  },
};
</script>
<style></style>
