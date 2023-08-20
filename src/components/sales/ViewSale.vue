<template>
  <v-container>
    <v-card>
      <v-card-title>Detalhes da venda</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <strong>Data da venda:</strong> {{ product.sale_date }}
          </v-col>
          <v-col cols="6">
            <strong>Tipo da venda:</strong> {{ product.sale_type }}</v-col
          >
          <v-col cols="12">
            <strong>Detalhes do pagamento </strong>
            <div v-if="product.payment_method === 1">
              Método de pagamento: A vista
            </div>
            <div v-else-if="product.payment_method === 2">
              Método de pagamento: Crédito <br />
              Parcelas: {{ installments_quantity }}<br />
            </div>
            <div v-else-if="product.payment_method === 3">
              Método de pagamento: Débito<br />
              Parcelas: {{ installments_quantity }} <br />
              Juros % {{}}
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-divider></v-divider>
    <v-card>
      <v-card-title>Dados do vendedor: </v-card-title>
      <v-card-text> Nome: {{ product.user.user_name }}<br /> </v-card-text>
    </v-card>
    <v-divider></v-divider>
    <v-card>
      <v-card-title>Dados do Cliente: </v-card-title>
      <v-card-text>
        <strong>Nome do cliente: </strong> {{ product.client.full_name }}<br />
        <strong>Cpf do cliente: </strong> {{ product.client.cpf }}<br />
        <strong>Telefone do cliente: </strong> {{ product.client.phone_number
        }}<br />
      </v-card-text>
    </v-card>
    <v-divider></v-divider>
    <v-card>
      <v-card-title>Detalhes do pagamento</v-card-title>
      <v-card-text>
        <strong>Detalhes do pagamento:</strong>
        {{ product.selectedPaymentMethod }}
        <div></div>
      </v-card-text>
    </v-card>
    <v-divider></v-divider>
    <v-card>
      <v-card-title>Produtos</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item
            v-for="productSale in product.product_sales"
            :key="productSale.id"
          >
            <v-list-item-content>
              <v-list-item-title>
                <strong>Product ID:</strong> {{ productSale.product_id }}
              </v-list-item-title>
              <v-list-item-subtitle>
                <strong>Serial Numbers:</strong>
                {{ productSale.serial_numbers }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <strong>Unity Value:</strong> {{ productSale.unity_value }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <strong>Quantity:</strong> {{ productSale.quantity }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductDetails",
  computed: {
    ...mapGetters({
      debits: "debitStore/debits",
      credits: "credit/credits",
    }),
    installments_quantity: {
      get() {
        if (this.debits.length == 0 && this.credits.length == 0) {
          console.log("caindo no 1");
          return 1;
        }
        if (this.product.payment_method == 3) {
          var foundDebit = this.debits.find(
            (debit) =>
              debit.id == this.product.selectedPaymentMethod.debit_table_id
          );

          return foundDebit.installments_quantity;
        }
        if (this.product.payment_method == 2) {
          var foundCredit = this.debits.find(
            (credit) =>
              credit.id == this.product.selectedPaymentMethod.credit_table_id
          );
          return foundCredit.installments_quantity;
        }
        return 1;
      },
    },
  },
  methods: {
    ...mapActions({
      getDebitsFromApi: "debitStore/getDebitsFromApi",
      getCreditsFromApi: "credit/getCreditsFromApi",
    }),
  },
  created() {
    this.getDebitsFromApi();
    this.getCreditsFromApi();
  },

  data() {
    return {
      product: {
        id: 3,
        sale_date: "18/08/2023",
        sale_type: "Atacado",
        payment_method: 3,
        user_id: 1,
        client_id: 1,
        created_at: "2023-08-18T15:57:14.000000Z",
        updated_at: "2023-08-18T15:57:14.000000Z",
        user: {
          id: 1,
          user_name: "paulo.mendes",
          login: "paulo.mendes",
          password: "12345678",
          created_at: "2023-08-18T15:45:09.000000Z",
          updated_at: "2023-08-18T15:45:09.000000Z",
        },
        client: {
          id: 1,
          full_name: "Luan Rodrigues",
          cpf: "000.000.000-00",
          phone_number: "(64) 99999-9999",
          created_at: "2023-08-18T15:45:36.000000Z",
          updated_at: "2023-08-18T15:45:36.000000Z",
        },
        selectedPaymentMethod: {
          id: 1,
          sale_id: 3,
          debit_table_id: 3,
          created_at: "2023-08-18T15:57:14.000000Z",
          updated_at: "2023-08-18T15:57:14.000000Z",
        },
        total_value: 2400,
        quantity: 2,
        product_sales: [
          {
            id: 3,
            product_id: 1,
            serial_numbers: '["123","321"]',
            unity_value: "1200.00",
            quantity: 2,
            sale_id: 3,
            created_at: "2023-08-18T15:57:14.000000Z",
            updated_at: "2023-08-18T15:57:14.000000Z",
          },
        ],
      },
    };
  },
};
</script>
