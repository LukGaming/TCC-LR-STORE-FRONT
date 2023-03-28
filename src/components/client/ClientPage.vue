<template>
  <div>

    <v-data-table
      :headers="headers"
      :items="clients"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Clientes</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <DefaultButton
            text_button="Adicionar Cliente"
            @callback="openProductDialog({ edit: false })"
          />
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    DefaultButton: () => import("@/components/utilities/DefaultBlackButton.vue")
  },
  methods: {
    ...mapActions({getClients: "clientStore/getClients"}),
  },
  computed: {
    ...mapGetters({
      clients: "clientStore/clients",
      headers: "clientStore/headers",
    }),
  },
  created(){
    this.getClients();
  }
};
</script>
<style></style>
