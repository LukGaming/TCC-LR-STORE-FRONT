<template>
  <v-container>
    <div v-if="isLoading"></div>
    <div v-else>
      <v-card>
        <v-card-title>Detalhes da venda</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <strong>Data da venda:</strong> {{ sale.sale_date }}
            </v-col>
            <v-col cols="6">
              <strong>Tipo da venda:</strong> {{ sale.sale_type }}</v-col
            >
            <v-col cols="12">
              <strong>Detalhes do pagamento </strong>
              <div v-if="sale.payment_method === 1">
                Método de pagamento: A vista
              </div>
              <div v-else-if="sale.payment_method === 2">
                Método de pagamento: Crédito <br />
                Parcelas: {{ installments_quantity }}<br />
                Juros % {{ installments_percentage }}
              </div>
              <div v-else-if="sale.payment_method === 3">
                Método de pagamento: Débito<br />
                Parcelas: {{ installments_quantity }} <br />
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-divider></v-divider>
      <v-card>
        <v-card-title>Dados do vendedor: </v-card-title>
        <v-card-text> Nome: {{ sale.user.user_name }}<br /> </v-card-text>
      </v-card>
      <v-divider></v-divider>
      <v-card>
        <v-card-title>Dados do Cliente: </v-card-title>
        <v-card-text>
          <strong>Nome do cliente: </strong> {{ sale.client.full_name }}<br />
          <strong>Cpf do cliente: </strong> {{ sale.client.cpf }}<br />
          <strong>Telefone do cliente: </strong> {{ sale.client.phone_number
          }}<br />
        </v-card-text>
      </v-card>
      <v-divider></v-divider>

      <v-divider></v-divider>
      <v-card>
        <v-card-title>Produtos</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="productSale in sale.product_sales"
              :key="productSale.id"
            >
              <v-list-item-content>
                <v-list-item-subtitle>
                  <strong>Números de série</strong>
                  {{ productSale.serial_numbers }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <strong>Valor da unidade: </strong>
                  {{ productSale.unity_value }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <strong>Quantidade:</strong> {{ productSale.quantity }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductDetails",
  computed: {
    ...mapGetters({
      isLoading: "salesDetailStore/isLoading",
      sale: "salesDetailStore/sale",
      installments_quantity: "salesDetailStore/installments_quantity",
      installments_percentage: "salesDetailStore/installments_percentage",
      totalProductValue: "salesDetailStore/totalProductValue",
      amountToBeCharged: "salesDetailStore/amountToBeCharged",
      interestAmount: "salesDetailStore/interestAmount",
    }),
  },
  methods: {
    ...mapActions({
      getSaleById: "salesDetailStore/getSaleById",
    }),
  },
  created() {
    this.getSaleById({ id: this.$route.params.id });
  },

  data() {
    return {
      //   sale: {
      //     id: 3,
      //     sale_date: "18/08/2023",
      //     sale_type: "Atacado",
      //     payment_method: 3,
      //     user_id: 1,
      //     client_id: 1,
      //     created_at: "2023-08-18T15:57:14.000000Z",
      //     updated_at: "2023-08-18T15:57:14.000000Z",
      //     user: {
      //       id: 1,
      //       user_name: "paulo.mendes",
      //       login: "paulo.mendes",
      //       password: "12345678",
      //       created_at: "2023-08-18T15:45:09.000000Z",
      //       updated_at: "2023-08-18T15:45:09.000000Z",
      //     },
      //     client: {
      //       id: 1,
      //       full_name: "Luan Rodrigues",
      //       cpf: "000.000.000-00",
      //       phone_number: "(64) 99999-9999",
      //       created_at: "2023-08-18T15:45:36.000000Z",
      //       updated_at: "2023-08-18T15:45:36.000000Z",
      //     },
      //     selectedPaymentMethod: {
      //       id: 1,
      //       sale_id: 3,
      //       debit_table_id: 3,
      //       created_at: "2023-08-18T15:57:14.000000Z",
      //       updated_at: "2023-08-18T15:57:14.000000Z",
      //     },
      //     total_value: 2400,
      //     quantity: 2,
      //     product_sales: [
      //       {
      //         id: 3,
      //         product_id: 1,
      //         serial_numbers: '["123","321"]',
      //         unity_value: "1200.00",
      //         quantity: 2,
      //         sale_id: 3,
      //         created_at: "2023-08-18T15:57:14.000000Z",
      //         updated_at: "2023-08-18T15:57:14.000000Z",
      //       },
      //     ],
      //   },
    };
  },
};
</script>
