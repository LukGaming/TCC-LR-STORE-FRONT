<template>
  <v-row justify="center">
    <v-dialog v-model="switchDialog" persistent>
      <v-card>
        <v-container><AddDebitForm /></v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <DefaultButton
            text_button="fechar"
            @callback="setDebitDialog(false)"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    DefaultButton: () =>
      import("@/components/utilities/DefaultBlackButton.vue"),
    AddDebitForm: () => import("@/components/debit/AddDebitForm.vue"),
  },

  methods: {
    ...mapActions({
      setDebitDialog: "debitStore/setDebitDialog",
    }),
  },
  computed: {
    ...mapGetters({
      debitDialog: "debitStore/debitDialog",
    }),
    switchDialog: {
      get() {
        return this.debitDialog;
      },
      set(value) {
        this.setDebitDialog(value);
      },
    },
  },
};
</script>
<style></style>
