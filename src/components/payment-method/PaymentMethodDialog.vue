<template>
  <v-row justify="center">
    <v-dialog v-model="switchDialog" persistent>
      <v-card>
        <div class="d-flex justify-center pt-5">
          <span class="text-h5">{{
            isEditing
              ? "Editando Método de Pagamento"
              : "Criando Método de Pagamento"
          }}</span>
        </div>
        <v-container><PaymentMethodForm /></v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <DefaultButton
            text_button="fechar"
            @callback="setPaymentMethodDialog(false)"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    DefaultButton: () =>
      import("@/components/utilities/DefaultBlackButton.vue"),
    PaymentMethodForm: () =>
      import("@/components/payment-method/PaymentMethodForm.vue"),
  },

  methods: {
    ...mapActions({
      setPaymentMethodDialog: "paymentMethodStore/setPaymentMethodDialog",
    }),
  },
  computed: {
    ...mapGetters({
      paymentMethodDialog: "paymentMethodStore/paymentMethodDialog",
      isEditing: "paymentMethodStore/isEditing",
    }),
    switchDialog: {
      get() {
        return this.paymentMethodDialog;
      },
      set(value) {
        this.setPaymentMethodDialog(value);
      },
    },
  },
};
</script>
<style></style>
