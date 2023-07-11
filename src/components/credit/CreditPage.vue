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
            text_button="Adicionar Parcelas"
            @callback="openManufacturerDialogToCreate()"
          />
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <div>
          <v-icon
            class="mr-2"
            color="black"
            @click="openManufacturerDialogToEdit({ edit: true, item: item })"
          >
            mdi-pencil
          </v-icon>
          <v-icon @click="deleteItem(item)" color="black"> mdi-delete </v-icon>
        </div>
      </template>
    </v-data-table>

    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5"
          >Tem certeza que deseja remover este parcelamento?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>

          <DefaultButton text_button="CANCELAR" @callback="closeDelete" />
          <div class="mr-5"></div>
          <DefaultButton
            text_button="CONFIRMAR"
            @callback="deleteItemConfirm"
          />

          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <CreditFormDialog />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return { dialogDelete: false, itemToDelete: null };
  },
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
      openManufacturerDialogToEdit: "credit/openManufacturerDialogToEdit",
      openManufacturerDialogToCreate: "credit/openManufacturerDialogToCreate",
      deleteCredit: "credit/deleteCredit",
    }),
    deleteItem(item) {
      this.itemToDelete = item;
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.deleteCredit(this.itemToDelete);
      this.closeDelete();
    },

    closeDelete() {
      this.dialogDelete = false;
    },
  },
  mounted() {
    this.getCredits();
  },
};
</script>
<style></style>
