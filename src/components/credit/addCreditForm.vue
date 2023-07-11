<template>
  <div>
    <v-text-field
      v-model="switchInstallmentQuantity"
      label="Quantidade de parcelas"
      type="number"
      hide-details
      outlined
      @blur="validateCreditFields('quantity')"
    >
    </v-text-field>

    <ErrorAlertComponent
      v-if="creditErrorMessages.installment_quantity != ''"
      :errorMessage="creditErrorMessages.installment_quantity"
    />
    <div class="mt-5"></div>

    <v-text-field
      v-model.number="SwitchInstallMentPercentage"
      label="Porcentagem de juros"
      type="number"
      hide-details
      outlined
      value
      @blur="validateCreditFields('percentage')"
    >
    </v-text-field>

    <ErrorAlertComponent
      v-if="creditErrorMessages.installment_percentage != ''"
      :errorMessage="creditErrorMessages.installment_percentage"
    />

    <div class="mt-5"></div>

    <div class="d-flex justify-center">
      <DefaultButton
        :text_button="isEditing ? 'Salvar Parcelamento' : 'Criar parcelamento'"
        @callback="createCredit"
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
      creditForm: "credit/creditForm",
      creditErrorMessages: "credit/creditErrorMessages",
      isEditing: "credit/isEditing",
    }),
    switchInstallmentQuantity: {
      get() {
        return this.creditForm.installment_quantity;
      },
      set(value) {
        this.setCreditForm({ part: "installment_quantity", value: value });
      },
    },
    SwitchInstallMentPercentage: {
      get() {
        return this.creditForm.installment_percentage;
      },
      set(value) {
        this.setCreditForm({ part: "installment_percentage", value: value });
      },
    },
  },
  methods: {
    ...mapActions({
      setCreditForm: "credit/setCreditForm",
      createCredit: "credit/createCredit",
      validateCreditFields: "credit/validateCreditFields",
    }),
  },
};
</script>
<style></style>
