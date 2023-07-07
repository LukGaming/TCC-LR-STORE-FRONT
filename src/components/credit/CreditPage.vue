<template>
  <div class="mt-10">
    <v-data-table
      :headers="headers"
      :items="credits"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Parcelamentos</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <DefaultButton
            text_button="Adicionar Método de pagamento"
            @callback="setCreditDialog(true)"
          />
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
    </v-data-table>
    <CreditFormDialog />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    DefaultButton: () =>
      import("@/components/utilities/DefaultBlackButton.vue"),
    CreditFormDialog: () => import("@/components/credit/AddCreditDialog.vue"),
  },
  computed: {
    ...mapGetters({
      credits: "credit/credits",
      headers: "credit/headers",
    }),
  },
  methods: {
    ...mapActions({
      getCredits: "credit/getCreditsFromApi",
      setCreditDialog: "credit/setCreditDialog",
    }),
  },
  mounted() {
    this.getCredits();
  },
};
</script>
<style></style>
