<template lang="">
  <div>
    <v-data-table
      :headers="headers"
      :items="sales"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Ultimas vendas</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <DefaultButton
            text_button="Adicionar Venda"
            @callback="createSale()"
          />
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <DefaultButton
          text_button="Detalhes"
          @callback="goToSaleDetails(item)"
        />
        <!-- <v-icon  class="mr-2" @click="goToSaleDetails(item)">
          mdi-arrow-right
        </v-icon> -->
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    DefaultButton: () =>
      import("@/components/utilities/DefaultBlackButton.vue"),
  },

  computed: {
    ...mapGetters({
      sales: "salesStore/getSales",
      headers: "salesStore/getHeaders",
    }),
  },

  created() {
    this.getSales();
  },

  methods: {
    ...mapActions({ getSales: "salesStore/getSales" }),
    goToSaleDetails(payload) {
      //TODO: implementar visualizacao
      console.log(payload);
      this.$router.push(`/vendas/${payload.id}`);
    },
    createSale() {
      this.$router.push("/vendas");
    },
  },
};
</script>
<style></style>
