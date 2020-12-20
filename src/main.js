import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import axios from 'axios';
import App from './App.vue'
import { router } from "@/router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router,
  BootstrapVue,
}).$mount('#app')
