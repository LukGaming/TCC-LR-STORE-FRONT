<template>
  <v-card class="mx-auto overflow-hidden" height="100vh" width="100vw">
    <v-app-bar color="black" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
      <router-view />
    </v-container>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div class="d-flex justify-center mt-auto">
        <DefaultBlackButton text_button="Deslogar" @callback="logout">
        </DefaultBlackButton>
      </div>
    </v-navigation-drawer>
  </v-card>
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
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
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
  },
};
</script>
<style></style>
