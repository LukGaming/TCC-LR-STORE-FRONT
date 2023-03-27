<template>
    <v-row justify="center">
      <v-dialog v-model="switchDialog" persistent>
        <v-card>
          <div class="d-flex justify-center pt-5">
            <span class="text-h5">Criando Produtos</span>
          </div>
          <v-container><ProductForm /></v-container>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <DefaultButton
              text_button="fechar"
              @callback="setProductDialog(false)"
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
      ProductForm: () =>
        import("@/components/product/ProductForm.vue"),
    },
  
    methods: {
      ...mapActions({
        setProductDialog: "productStore/setProductDialog",
      }),
    },
    computed: {
      ...mapGetters({
        productDialog: "productStore/productDialog",
      }),
      switchDialog: {
        get() {
          return this.productDialog;
        },
        set(value) {
          this.setProductDialog(value);
        },
      },
    },
  };
  </script>
  <style></style>
  