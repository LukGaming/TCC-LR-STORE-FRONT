<template>
  <v-row justify="center">
    <v-dialog v-model="switchDialog" persistent>
      <v-card>
        <v-container><AddCreditForm /></v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <DefaultButton
            text_button="fechar"
            @callback="setCreditDialog(false)"
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
    AddCreditForm: () => import("@/components/credit/addCreditForm.vue"),
  },

  methods: {
    ...mapActions({
      setCreditDialog: "credit/setCreditDialog",
    }),
  },
  computed: {
    ...mapGetters({
      creditDialog: "credit/creditDialog",
    }),
    switchDialog: {
      get() {
        return this.creditDialog;
      },
      set(value) {
        this.setCreditDialog(value);
      },
    },
  },
};
</script>
<style></style>
