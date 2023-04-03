<template>
  <div>
    <div class="mt-5"></div>
    <v-text-field
      v-model="switchClientName"
      label="Nome do Cliente"
      hide-details
      outlined
      @blur="validateFields('validateClientName')"
    >
    </v-text-field>
      <ErrorAlertComponent
        v-if="getClientErrorMessages.clientName != ''"
        :errorMessage="getClientErrorMessages.clientName"
      />
    <div class="mt-5"></div>
    <v-text-field
      v-model="switchClientPhoneNumber"
      label="Telefone do Cliente"
      hide-details
      outlined
      @blur="validateFields('validateClientPhoneNumber')"
    >
    </v-text-field>
      <ErrorAlertComponent
        v-if="getClientErrorMessages.clientPhoneNumber != ''"
        :errorMessage="getClientErrorMessages.clientPhoneNumber"
      />
    <div class="mt-5"></div>
    <v-text-field
      v-model="switchClientCpf"
      label="Cpf do Cliente"
      hide-details
      outlined
      @blur="validateFields('validateClientCpf')"
    >
    </v-text-field>
      <ErrorAlertComponent
        v-if="getClientErrorMessages.clientCpf != ''"
        :errorMessage="getClientErrorMessages.clientCpf"
      />
    <div class="mt-5"></div>
    <div class="d-flex justify-center">
      <DefaultButton text_button="Criar Cliente" @callback="createClient">
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
      clientFormFields: "clientStore/clientFormFields",
      getClientErrorMessages: "clientStore/getClientErrorMessages",
    }),
    switchClientName: {
      get() {
        return this.clientFormFields.clientName;
      },
      set(value) {
        this.setClientFormFields({ part: "clientName", value: value });
      },
    },
    switchClientPhoneNumber: {
      get() {
        return this.clientFormFields.clientPhoneNumber;
      },
      set(value) {
        this.setClientFormFields({ part: "clientPhoneNumber", value: value });
      },
    },
    switchClientCpf: {
      get() {
        return this.clientFormFields.clientCpf;
      },
      set(value) {
        this.setClientFormFields({ part: "clientCpf", value: value });
      },
    },
  },
  methods: {
    ...mapActions({
      setClientFormFields: "clientStore/setClientFormFields",
      validateFields: "clientStore/validateFields",
      createClient: "clientStore/createClient",
    }),
  },
};
</script>
<style></style>
