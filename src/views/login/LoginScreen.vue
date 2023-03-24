<template>
  <div class="full-height-body">
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
              <div class="mt-4"></div>
              <v-text-field
                v-model="SwitchLoginField"
                label="Login"
                hide-details
                outlined
                @blur="validateFields('validateLogin')"
              >
              </v-text-field>
              <ErrorAlertComponent
                v-if="getLoginErrors.loginFieldError != ''"
                :errorMessage="getLoginErrors.loginFieldError"
              />
              <div class="mt-5"></div>
              <v-text-field
                v-model="SwitchPasswordField"
                label="Senha"
                type="password"
                hide-details
                outlined
                @blur="validateFields('validatePassword')"
              >
              </v-text-field>
              <ErrorAlertComponent
                v-if="getLoginErrors.passwordFieldError != ''"
                :errorMessage="getLoginErrors.passwordFieldError"
              />
              <div class="mt-5"></div>
              <div class="d-flex justify-center">
                <DefaultButton text_button="Login" @callback="loginAction">
                </DefaultButton>
              </div>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    DefaultButton: () =>
      import("@/components/utilities/DefaultBlackButton.vue"),
    ErrorAlertComponent: () =>
      import("@/components/utilities/ErrorAlertComponent.vue"),
  },

  data() {
    return {};
  },
  methods: {
    ...mapActions({
      loginAction: "loginStore/login",
      setPasswordField: "loginStore/setPasswordField",
      setLoginField: "loginStore/setLoginField",
      validateFields: "loginStore/validateFields",
    }),
  },

  computed: {
    ...mapGetters({
      isLogged: "userStore/isLogged",
      getLoginField: "loginStore/getLoginField",
      getPasswordField: "loginStore/getPasswordField",
      getLoginErrors: "loginStore/getLoginErrors",
    }),
    SwitchLoginField: {
      get() {
        return this.getLoginField;
      },
      set(value) {
        this.setLoginField(value);
      },
    },
    SwitchPasswordField: {
      get() {
        return this.getPasswordField;
      },
      set(value) {
        this.setPasswordField(value);
      },
    },
  },
};
</script>

<style>
.full-height-body {
  height: 100vh;
}
</style>
