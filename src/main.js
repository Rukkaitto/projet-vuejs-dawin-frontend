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

// Constants shared between all components
window.sharedData = {
  apiUrl: 'http://localhost:3000/api/movies/',
  omdbApiKey: 'a851d74f', 
  theMovieDbApiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=d3aa052d811f8f62d8314397f47d4518',
  theMovieDbApiParams: '&language=en-US&page=1&include_adult=false&query=',
  theMovieDbImageUrl: 'https://image.tmdb.org/t/p/w500',
  title: 'Movies Database',
}

new Vue({
  render: h => h(App),
  router,
  vuetify,
  BootstrapVue
}).$mount('#app')
