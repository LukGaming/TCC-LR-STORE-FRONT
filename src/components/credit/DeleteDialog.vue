<template>
  <v-row justify="center">
    <v-dialog v-model="switchDialog" persistent>
      <v-card>
        <v-container>
          <v-row>
            <div class="d-flex justify-center">
              Alerta Deseja mesmo remover este item?
              <DefaultButton
                text_button="CONFIRMAR"
                @callback="closeDeleteDialog()"
              >
              </DefaultButton>
              <div class="mr-5"></div>
              <DefaultButton
                text_button="CANCELAR"
                @callback="closeDeleteDialog()"
              >
              </DefaultButton>
            </div>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="d-flex justify-center">
            <DefaultButton text_button="fechar" @callback="closeDeleteDialog()">
            </DefaultButton>
          </div>
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
  },

  methods: {
    ...mapActions({
      confirmDeletation: "credit/setCreditDialog",
      closeDeleteDialog: "credit/closeDeleteDialog",
    }),
  },
  computed: {
    ...mapGetters({
      deleteDialog: "credit/deleteDialog",
    }),
    switchDialog: {
      get() {
        return this.deleteDialog;
      },
      set(value) {
        this.deleteDialog(value);
      },
    },
  },
};
</script>
<style></style>
