import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import Axios from "./plugins/axios";
import vuetify from './plugins/vuetify'
import router from './router'

Vue.prototype.$http = Axios;

new Vue({
  vuetify,
  router,
  render: (h) => h(App)
}).$mount("#app");
