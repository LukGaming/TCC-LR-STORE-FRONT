<template>
  <v-row justify="center">
    <v-dialog v-model="switchDialog" persistent>
      <v-card>
        <div class="d-flex justify-center pt-5">
          <span class="text-h5">Criando Clientes</span>
        </div>
        
        <v-container>
          <ClientForm />
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <DefaultButton
            text_button="fechar"
            @callback="setClientDialog(false)"
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
    ClientForm: () => import("@/components/client/ClientForm.vue"),
  },

  methods: {
    ...mapActions({
      setClientDialog: "clientStore/setClientDialog",
    }),
  },
  computed: {
    ...mapGetters({
      clientDialog: "clientStore/clientDialog",
    }),
    switchDialog: {
      get() {
        return this.clientDialog;
      },
      set(value) {
        this.setClientDialog(value);
      },
    },
  },
};
</script>
<style></style>
