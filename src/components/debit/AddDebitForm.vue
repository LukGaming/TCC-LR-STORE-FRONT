<template>
  <div>
    <v-text-field
      v-model="switchInstallmentQuantity"
      label="Quantidade de parcelas"
      type="number"
      hide-details
      outlined
      @blur="validateDebitFields('quantity')"
    >
    </v-text-field>

    <ErrorAlertComponent
      v-if="debitErrorMessages.installment_quantity != ''"
      :errorMessage="debitErrorMessages.installment_quantity"
    />
    <div class="mt-5"></div>

    <v-text-field
      v-model.number="SwitchInstallMentPercentage"
      label="Porcentagem de juros"
      type="number"
      hide-details
      outlined
      value
      @blur="validateDebitFields('percentage')"
    >
    </v-text-field>

    <ErrorAlertComponent
      v-if="debitErrorMessages.installment_percentage != ''"
      :errorMessage="debitErrorMessages.installment_percentage"
    />

    <div class="mt-5"></div>

    <div class="d-flex justify-center">
      <DefaultButton
        :text_button="isEditing ? 'Salvar Parcelamento' : 'Criar parcelamento'"
        @callback="createDebit"
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
      debitForm: "debitStore/debitForm",
      debitErrorMessages: "debitStore/debitErrorMessages",
      isEditing: "debitStore/isEditing",
    }),
    switchInstallmentQuantity: {
      get() {
        return this.debitForm.installment_quantity;
      },
      set(value) {
        this.setDebitForm({ part: "installment_quantity", value: value });
      },
    },
    SwitchInstallMentPercentage: {
      get() {
        return this.debitForm.installment_percentage;
      },
      set(value) {
        this.setDebitForm({ part: "installment_percentage", value: value });
      },
    },
  },
  methods: {
    ...mapActions({
      setDebitForm: "debitStore/setDebitForm",
      createDebit: "debitStore/createDebit",
      validateDebitFields: "debitStore/validateDebitFields",
    }),
  },
};
</script>
<style></style>
