<template lang="">
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Ultimas vendas</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <DefaultButton text_button="Adicionar Venda" />
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px"> </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon  class="mr-2" @click="goToSaleDetails(item)">
          mdi-arrow-right
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  components: {
    DefaultButton: () =>
      import("@/components/utilities/DefaultBlackButton.vue"),
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Modelo",
        align: "start",
        value: "product.name",
      },
      { text: "Fabricante", value: "product.manufecturer.manufacture_name" },
      { text: "Quantidade", value: "quantity" },
      { text: "Cliente", value: "client.full_name" },
      { text: "Método de pagamento", value: "payment_method.name" },
      { text: "Usuário", value: "user.user_name", },
      { text: "Ações", value: "actions" },
    ],
    desserts: [],

  }),

  computed: {},

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [

        {
            "id": 4,
            "serial_number": "123132156561",
            "quantity": "10",
            "unity_value": "1200",
            "user_id": 2,
            "client_id": 3,
            "product_id": 6,
            "payment_method_id": 3,
            "created_at": "2023-03-23T12:17:03.000000Z",
            "updated_at": "2023-03-23T12:17:03.000000Z",
            "product": {
                "id": 6,
                "name": "Airdots ",
                "manufacture_id": 4,
                "created_at": "2023-03-14T15:47:34.000000Z",
                "updated_at": "2023-03-14T15:47:34.000000Z",
                "manufecturer": {
                    "id": 4,
                    "manufacture_name": "Xiaomi",
                    "created_at": "2023-03-14T15:44:49.000000Z",
                    "updated_at": "2023-03-14T15:44:49.000000Z"
                }
            },
            "payment_method": {
                "id": 3,
                "name": "Método 1",
                "created_at": "2023-03-15T12:44:27.000000Z",
                "updated_at": "2023-03-15T12:44:27.000000Z"
            },
            "client": {
                "id": 3,
                "full_name": "Paulo Antonio Ferreira Mendes Macedo",
                "cpf": "70198256132",
                "phone_number": "64992753115",
                "created_at": "2023-03-07T16:49:18.000000Z",
                "updated_at": "2023-03-07T16:49:18.000000Z"
            },
            "user": {
                "id": 2,
                "user_name": "paulo.mendes",
                "login": "paulo",
                "password": "12345679",
                "created_at": "2023-02-14T14:23:43.000000Z",
                "updated_at": "2023-03-15T14:03:05.000000Z"
            }
        }

      ];
    },
  },
};
</script>
<style lang=""></style>
