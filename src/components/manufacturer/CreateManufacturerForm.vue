<template>
  <div>
    <div class="mt-5"></div>
    <v-text-field
      v-model="switchManufacturerName"
      label="Nome do Fabricante"
      hide-details
      outlined
      @blur="validateFields('validateManufacturerName')"
    >
    </v-text-field>
    <ErrorAlertComponent
      v-if="getManufacturerMessages.manufacturerName != ''"
      :errorMessage="getManufacturerMessages.manufacturerName"
    />
    <div class="mt-5"></div>
    <div class="d-flex justify-center">
      <DefaultButton
        text_button="Criar Fabricante"
        @callback="createManufacturer"
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
      manufacturerName: "manufacturerStore/manufacturerName",
      getManufacturerMessages: "manufacturerStore/getManufacturerMessages",
    }),
    switchManufacturerName: {
      get() {
        return this.manufacturerName;
      },
      set(value) {
        this.setManufacturerName(value);
      },
    },
  },
  methods: {
    ...mapActions({
      setManufacturerName: "manufacturerStore/setManufacturerName",
      validateFields: "manufacturerStore/validateFields",
      createManufacturer: "manufacturerStore/createManufacturer",
    }),
  },
};
</script>
<style></style>
