<template>
  <v-container bg fill-height>
    <v-layout row wrap align-center>
      <v-flex>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12" sm="10" lg="4" xl="6">
            <div class="d-flex justify-center">
              <v-avatar size="100">
                <v-img
                  src="../../assets/images/lrstore_logo.png"
                  alt="John"
                ></v-img>
              </v-avatar>
            </div>
            <v-text-field v-model="loginField" label="Login"></v-text-field>
            <v-text-field v-model="passwordField" label="Senha"></v-text-field>
            <div class="d-flex justify-center">
              <DefaultButton
                text_button="Login"
                @callback="login"
              ></DefaultButton>
            </div>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  components: {
    DefaultButton: () =>
      import("@/components/utilities/DefaultBlackButton.vue"),
  },

  data() {
    return {
      loginField: "",
      passwordField: "",
    };
  },
  methods: {
    login() {
      console.log("login");
    },
  },
};
</script>

<style></style>
