<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="products"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Produtos</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <DefaultButton
            text_button="Adicionar Produto"
            @callback="openManuProductDialog({ edit: false })"
          />
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
    </v-data-table>
    <ProductForm />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    DefaultButton: () =>
      import("@/components/utilities/DefaultBlackButton.vue"),
    ProductForm: () => import("@/components/product/ProductForm.vue"),
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      headers: "productStore/headers",
      products: "productStore/products",
    }),
  },
  methods: {
    ...mapActions({ getProducts: "productStore/getProducts" }),
  },
  created() {
    this.getProducts();
  },
};
</script>
<style></style>
