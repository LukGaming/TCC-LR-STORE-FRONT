<template>
  <div class="mt-10">
    <v-data-table
      :headers="headers"
      :items="debits"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Débitos</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <DefaultButton
            text_button="Adicionar Débito"
            @callback="openDebitDialogToCreate()"
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
            @click="openDebitDialogToEdit({ edit: true, item: item })"
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

    <DebitFormDialog />
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
    DebitFormDialog: () => import("@/components/debit/AddDebitDialog.vue"),
  },
  computed: {
    ...mapGetters({
      debits: "debitStore/debits",
      headers: "debitStore/headers",
    }),
  },
  methods: {
    ...mapActions({
      getDebits: "debitStore/getDebitsFromApi",
      setDebitDialog: "debitStore/setDebitDialog",
      openDebitDialogToEdit: "debitStore/openDebitDialogToEdit",
      openDebitDialogToCreate: "debitStore/openDebitDialogToCreate",
      deleteDebit: "debitStore/deleteDebit",
    }),
    deleteItem(item) {
      this.itemToDelete = item;
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.deleteDebit(this.itemToDelete);
      this.closeDelete();
    },

    closeDelete() {
      this.dialogDelete = false;
    },
  },
  mounted() {
    this.getDebits();
  },
};
</script>
<style></style>
