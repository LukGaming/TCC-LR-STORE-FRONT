<template>
  <v-row justify="center">
    <v-dialog v-model="switchDialog" persistent>
      <v-card>
        <div class="d-flex justify-center pt-5">
          <span class="text-h5">Adicionando Números de Série</span>
        </div>
        <v-container>
          <div class="mt-5"></div>
          <div v-for="(item, index) in quantity" :key="index" :index="index">
            <v-text-field
              :label="`Número de série  ${index + 1}`"
              hide-details
              outlined
              v-model="fields[index]"
              @input="setFieldValues($event, index)"
              @blur="blurSerialNumbers($event, index)"
            />
            <ErrorAlertComponent
              v-if="salesErrorMessages.serialNumbers[index] != ''"
              :errorMessage="salesErrorMessages.serialNumbers[index]"
            />
            <div class="mt-5"></div>
          </div>
          <div class="d-flex justify-center">
            <DefaultButton
              text_button="Concluido"
              @callback="validateAllSerialNumbers(fields)"
            >
            </DefaultButton>
          </div>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <DefaultButton
            text_button="fechar"
            @callback="setSerialNumbersDialog(false)"
          />
        </v-card-actions>
        {{ productFormFields.serialNumbers }}
      </v-card>
    </v-dialog>
  </v-row>
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
    switchDialog: {
      get() {
        return this.serialNumbersDialog;
      },
      set(value) {
        this.setSerialNumbersDialog(value);
      },
    },
    quantity() {
      let quantity = [];
      for (var i = 0; i < this.productFormFields.quantity; i++) {
        quantity.push(i);
      }
      return quantity;
    },
    computedValues() {
      return [...this.fields];
    },
    ...mapGetters({
      productFormFields: "salesStore/productFormFields",
      salesErrorMessages: "salesStore/salesErrorMessages",
      serialNumbersDialog: "salesStore/serialNumbersDialog",
    }),
  },

  methods: {
    ...mapActions({
      validateFields: "salesStore/validateFields",
      setSaleFormField: "salesStore/setSaleFormField",
      validateSerialNumbers: "salesStore/validateSerialNumbers",
      setSerialNumbersDialog: "salesStore/setSerialNumbersDialog",
      setSerialNumbers: "salesStore/setSerialNumbers",
      setfirstSerialNumbers: "salesStore/setfirstSerialNumbers",
      concludeSerialNumbers: "salesStore/concludeSerialNumbers",
    }),
    blurSerialNumbers($event, index) {
      this.validateSerialNumbers({
        value: $event.target.value,
        index: index,
      });
      this.fields.splice(index, 1, $event.target.value);
    },
    validateAllSerialNumbers() {
      for (var i = 0; i < this.fields.length; i++) {
        this.validateSerialNumbers({
          value: this.fields[i],
          index: i,
        });
        this.fields.splice(i, 1, this.fields[i]);
      }
      this.concludeSerialNumbers();
    },
    setFieldValues($event, index) {
      this.setSerialNumbers({ index: index, value: $event });
      this.fields.splice(index, 1, $event);
    },
    getSerialNumberValue(index) {
      return this.productFormFields.serialNumbers[index];
    },
  },
  mounted() {
    console.log("mounted");
    this.fields = new Array(this.productFormFields.quantity).fill("");
    this.setfirstSerialNumbers(this.fields);
  },
};
</script>
<style></style>
