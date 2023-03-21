import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import Axios from "./plugins/axios";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";

Vue.prototype.$http = Axios;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
