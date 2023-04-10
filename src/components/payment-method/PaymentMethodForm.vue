<template>
  <div>
    <div class="mt-5"></div>

    <v-text-field
      v-model="switchPaymentMethodName"
      label="Nome do Método de pagamento"
      hide-details
      outlined
      @blur="validateFields('validateProductName')"
    >
    </v-text-field>

    <ErrorAlertComponent
      v-if="paymentMethodErrorMessages.paymentMethodName != ''"
      :errorMessage="paymentMethodErrorMessages.paymentMethodName"
    />

    <div class="mt-5"></div>
    <div class="d-flex justify-center">
      <DefaultButton
        text_button="Criar Método de pagamento"
        @callback="createPaymentMethod"
      >
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
      paymentMethodName: "paymentMethodStore/paymentMethodName",
      paymentMethodErrorMessages:
        "paymentMethodStore/paymentMethodErrorMessages",
    }),
    switchPaymentMethodName: {
      get() {
        return this.paymentMethodName;
      },
      set(value) {
        this.setPaymentMethodName(value);
      },
    },
  },

  methods: {
    ...mapActions({
      setPaymentMethodName: "paymentMethodStore/setPaymentMethodName",
      createPaymentMethod: "paymentMethodStore/createPaymentMethod",
      validateFields: "paymentMethodStore/validateFields",
    }),
  },
  created() {},
};
</script>
<style></style>
