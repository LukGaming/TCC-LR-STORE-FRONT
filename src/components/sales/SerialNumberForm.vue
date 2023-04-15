<template>
  <div>
    <v-container>
      <div class="mt-5"></div>

      <div v-for="index in quantity" :key="index">
        <v-text-field
          :label="`Número de série  ${index + 1}`"
          hide-details
          outlined
          v-model="computedValues[index]"
          @input="setFieldValues($event, index)"
        />
        <ErrorAlertComponent
          v-if="salesErrorMessages.serialNumbers[index]"
          :errorMessage="salesErrorMessages.serialNumbers[index]"
        />
        {{ salesErrorMessages.serialNumbers[index] }}
        {{ salesFormFields.serialNumber }}
        <div class="mt-5"></div>
      </div>
        
        
      <div class="d-flex justify-center">
        <DefaultButton
          text_button="Concluido"
          @callback="validateSerialNumbers()"
        >
        </DefaultButton>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      fields: [],
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
      salesFormFields: "salesStore/salesFormFields",
      salesErrorMessages: "salesStore/salesErrorMessages",
      // setSerialNumbersField: "salesStore/salesErrorMessages",
    }),
    quantity() {
      let quantity = [];
      for (var i = 0; i < this.salesFormFields.quantity; i++) {
        quantity.push(i);
      }
      return quantity;
    },
    computedValues() {
      return [...this.fields];
    },
  },
  mounted() {
    this.fields = new Array(this.salesFormFields.quantity).fill("");
    this.setSaleFormField({ part: "serialNumber", value: this.fields });
  },
  methods: {
    ...mapActions({
      validateFields: "salesStore/validateFields",
      setSaleFormField: "salesStore/setSaleFormField",
      validateSerialNumbers: "salesStore/validateSerialNumbers"
    }),
    setFieldValues($event, index) {
      this.fields.splice(index, 1, $event);
      this.setSaleFormField({ part: "serialNumber", value: this.fields });
    },
  },
};
</script>
<style></style>
