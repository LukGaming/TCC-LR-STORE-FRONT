<template>
    <div>
      <v-data-table
        :headers="headers"
        :items="clients"
        sort-by="calories"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Clientes</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <DefaultButton
              text_button="Adicionar Cliente"
              @callback="openPaymentMethodDialog({ edit: false })"
            />
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
      </v-data-table>
      <PaymentMethodDialog />
    </div>
  </template>
  <script>
  import { mapActions, mapGetters } from "vuex";
  export default {
    components: {
      DefaultButton: () =>
        import("@/components/utilities/DefaultBlackButton.vue"),
      PaymentMethodDialog: () => import("@/components/client/PaymentMethodDialog.vue"),
    },
    methods: {
      ...mapActions({
        getPaymentMethods: "paymentMethodStore/getPaymentMethods",
        openPaymentMethodDialog: "paymentMethodStore/openPaymentMethodDialog",
      }),
    },
    computed: {
      ...mapGetters({
        paymentMethods: "paymentMethodStore/paymentMethods",
        headers: "paymentMethodStore/headers",
      }),
    },
    created() {
      this.getPaymentMethods();
    },
  };
  </script>
  <style></style>
  