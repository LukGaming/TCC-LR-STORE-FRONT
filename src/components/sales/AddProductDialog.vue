<template>
  <v-row justify="center">
    <v-dialog v-model="addProductDialog" persistent>
      <v-card>
        <div class="d-flex justify-center pt-5">
          <span class="text-h5">Criando Produtos</span>
        </div>
        <v-container><AddProductForm /></v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <DefaultButton
            text_button="cancelar"
            @callback="setAddProductDialog(false)"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      switchDialog: true,
    };
  },
  components: {
    DefaultButton: () =>
      import("@/components/utilities/DefaultBlackButton.vue"),
    AddProductForm: () => import("@/components/sales/AddProductForm.vue"),
  },

  methods: {
    ...mapActions({
      setAddProductDialog: "salesStore/setAddProductDialog",
    }),
  },
  computed: {
    ...mapGetters({ addProductDialog: "salesStore/addProductDialog" }),
  },
};
</script>
<style></style>
