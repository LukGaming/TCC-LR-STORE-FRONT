<template>
  <div>
    <v-container>
      <div class="mt-5"></div>
      <SerialNumberForm />

      <div class="mt-5"></div>
      <v-row no-gutters>
        <v-col xl="1" lg="1">
          <v-text-field
            readonly
            v-model="switchQuantity"
            label="Quantidade"
            hide-details
            outlined
            type="number"
            min="1"
            @blur="validateFields('validateQuantity')"
          >
          </v-text-field>
        </v-col>
        <v-col xlg="3" class="ml-2">
          <v-row no-gutters>
            <v-btn color="black" small @click="addSerialNumber()">
              <v-icon color="white">mdi-plus</v-icon>
            </v-btn>
          </v-row>
          <v-row no-gutters class="mt-1">
            <v-btn color="black" small @click="removeSerialNumber()">
              <v-icon color="white">mdi-minus</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <div class="mt-5"></div>
      <DefaultButton
        text_button="Preencher Números de Série"
        @callback="setSerialNumbersDialog(true)"
      />
      <ErrorAlertComponent
        v-if="salesErrorMessages.serialNumber != ''"
        :errorMessage="salesErrorMessages.serialNumber"
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
      <v-combobox
        v-model="switchSelectedManufacturer"
        label="Filtrar por Fabricante"
        :items="manufacturers"
        item-text="manufacture_name"
        item-value="id"
        outlined
        hide-details
        clearable
        :menu-props="{ bottom: true, offsetY: true }"
        @click:clear="getProductsByManufacturers(null)"
      >
      </v-combobox>
      <div class="mt-5"></div>
      <v-combobox
        v-model="switchSelectedProduct"
        label="Selecione um Produto"
        :items="productsByManufacturers"
        item-text="name"
        item-value="id"
        outlined
        hide-details
        @blur="validateFields('validateSelectedProduct')"
        :menu-props="{ bottom: true, offsetY: true }"
      >
      </v-combobox>

      <ErrorAlertComponent
        v-if="salesErrorMessages.selectedProduct != ''"
        :errorMessage="salesErrorMessages.selectedProduct"
      />
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


      {{ salesFormFields.selectedSalesType }}
      {{ salesErrorMessages.selectedSalesType }}
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
    SerialNumberForm: () => import("@/components/sales/SerialNumberForm.vue"),
  },
  computed: {
    switchSelectedSalesType: {
      get(){
        console.log(  "inside get" ,this.salesFormFields.selectedSalesType)
        return this.salesFormFields.selectedSalesType
      },
      set(value){
        console.log("inside set", value)
        this.setSaleFormField({ part: "selectedSalesType", value: value });
      }
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
      selectedManufacturerFromFilter: "salesStore/selectedManufacturerFromFilter",
      salesTypes: "salesStore/salesTypes",
    }),
  },

  methods: {
    ...mapActions({
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
