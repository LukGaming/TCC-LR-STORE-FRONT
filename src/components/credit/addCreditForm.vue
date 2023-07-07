<template>
  <div>
    <v-text-field
      v-model="switchInstallmentQuantity"
      label="Quantidade de parcelas"
      type="number"
      hide-details
      outlined
    >
    </v-text-field>

    <ErrorAlertComponent v-if="true" :errorMessage="'erro '" />

    <v-text-field
      v-model.number="SwitchInstallMentPercentage"
      label="Porcentagem de juros"
      type="number"
      hide-details
      outlined
      value
    >
    </v-text-field>

    <ErrorAlertComponent v-if="true" :errorMessage="'erro '" />

    <div class="mt-5"></div>
    {{ creditForm }}
    <div class="d-flex justify-center">
      <DefaultButton text_button="Criar parcelamento" @callback="createCredit">
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
    ...mapGetters({ creditForm: "credit/creditForm" }),
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
    }),
  },
};
</script>
<style></style>
