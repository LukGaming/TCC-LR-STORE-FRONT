<template>
  <v-row justify="center">
    <v-dialog v-model="switchDialog" persistent>
      <v-card>
        <div class="d-flex justify-center pt-5">
          <span class="text-h5">Criando Fabricante</span>
        </div>
        <v-container><CreateManufacturerForm /></v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <DefaultButton
            text_button="fechar"
            @callback="setManufacturerDialog(false)"
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
    CreateManufacturerForm: () =>
      import("@/components/manufacturer/CreateManufacturerForm.vue"),
  },

  methods: {
    ...mapActions({
      setManufacturerDialog: "manufacturerStore/setManufacturerDialog",
    }),
  },
  computed: {
    ...mapGetters({
      manufacturerDialog: "manufacturerStore/manufacturerDialog",
    }),
    switchDialog: {
      get() {
        return this.manufacturerDialog;
      },
      set(value) {
        this.setManufacturerDialog(value);
      },
    },
  },
};
</script>
<style></style>
