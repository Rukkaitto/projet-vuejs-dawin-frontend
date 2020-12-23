import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import axios from 'axios';
import App from './App.vue'
import { router } from "@/router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueRouter);

window.sharedData = {
  apiUrl: 'http://localhost:3000/api/movies/',
  omdbApiKey: 'a851d74f',
}

new Vue({
  render: h => h(App),
  router,
  vuetify,
  BootstrapVue
}).$mount('#app')
