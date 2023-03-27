<template lang="">
  <div>
    <v-data-table
      :headers="headers"
      :items="manufacturers"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Fabricantes</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <DefaultButton
            text_button="Adicionar Fabricante"
            @callback="openManufacturerDialog({ edit: false })"
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
      </template>
    </v-data-table>

    <ManufacturerFormDialog />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    DefaultButton: () =>
      import("@/components/utilities/DefaultBlackButton.vue"),

    ManufacturerFormDialog: () =>
      import("@/components/manufacturer/ManufacturerDialog.vue"),
  },

  computed: {
    ...mapGetters({
      manufacturers: "manufacturerStore/manufacturers",
      headers: "manufacturerStore/getHeaders",
    }),
  },

  created() {
    this.getManufacturers();
  },

  methods: {
    ...mapActions({
      getManufacturers: "manufacturerStore/getManufacturers",
      openManufacturerDialog: "manufacturerStore/openManufacturerDialog",
    }),
    goToManufacturerDetails(payload) {
      //TODO: implementar visualizacao
      console.log(payload);
      // this.$router.push("/vendas")
    },
  },
};
</script>
<style></style>
