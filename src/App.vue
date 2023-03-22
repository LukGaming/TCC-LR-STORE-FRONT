<template>
  <div id="app">
    <v-app>
      <SnackBarMessage />
      <DefaultLoading v-if="isLoading" />
      <div v-if="!isLogged"><router-view /></div>
      <div v-if="isLogged"><NavigationDrawer></NavigationDrawer></div>
    </v-app>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  components: {
    DefaultLoading: () => import("@/components/utilities/DefaultLoading.vue"),
    NavigationDrawer: () =>
      import("@/components/utilities/NavigationDrawer.vue"),
    SnackBarMessage: () => import("@/components/utilities/SnackBarMessage.vue"),
  },
  computed: {
    ...mapGetters({
      isLoading: "utilitiesStore/isLoading",
      isLogged: "userStore/isLogged",
    }),
  },
  created() {
    console.log(this.isLogged);
    if (this.isLogged) {
      this.$router.push("/home");
    }
  },
};
</script>
<style lang="scss"></style>
