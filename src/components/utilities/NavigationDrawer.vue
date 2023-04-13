<template>
  <div>
    <v-app-bar color="black" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary height="100%">
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
          class="justify-end"
        >
          <v-list-item>
            <v-list-item-title
              ><div @click="goToHome()">Página inicial</div></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><div @click="goToManufacturer()">
                Fabricantes
              </div></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><div @click="goToProducts()">Produtos</div></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><div @click="goToClients()">Clientes</div></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><div @click="goToPaymentMethod()">
                Métodos de Pagamento
              </div></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <div>
                <DefaultBlackButton
                  text_button="Deslogar"
                  @callback="logout"
                ></DefaultBlackButton>
              </div>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <div style="height: auto">
        <v-container>
          <router-view />
        </v-container>
      </div>
    </v-main>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  components: {
    DefaultBlackButton: () =>
      import("@/components/utilities/DefaultBlackButton.vue"),
  },
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    ...mapActions({
      logout: "userStore/logout",
    }),
    goToManufacturer() {
      this.$router.push("/fabricantes");
    },
    goToProducts() {
      this.$router.push("/produtos");
    },
    goToClients() {
      this.$router.push("/clientes");
    },
    goToPaymentMethod() {
      this.$router.push("/metodo-pagamento");
    },
    goToHome() {
      this.$router.push("/home");
    },
  },
};
</script>
<style></style>
