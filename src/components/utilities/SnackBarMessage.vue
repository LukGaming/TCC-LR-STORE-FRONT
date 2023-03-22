<template>
  <div>
    <template>
      <div class="text-center">
        <v-snackbar
          v-model="switchSnackBar"
          multi-line
          :color="snackBarAlert.color"
        >
          <div class="d-flex justify-center">{{ snackBarAlert.message }}</div>

          <!-- <template v-slot:actions>
            <v-btn
              color="primary"
              variant="text"
              @click="this.setSnackBar({ part: 'showSnackBar', value: value })"
            >
              Fechar
            </v-btn>
          </template> -->
        </v-snackbar>
      </div>
    </template>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions({ setSnackBar: "utilitiesStore/setSnackBar" }),
  },
  computed: {
    ...mapGetters({
      snackBarAlert: "utilitiesStore/snackBarAlert",
    }),

    switchSnackBar: {
      get() {
        return this.snackBarAlert.showSnackBar;
      },
      set(value) {
        this.setSnackBar({ part: "showSnackBar", value: value });
      },
    },
  },
};
</script>
<style></style>
