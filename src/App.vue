<template>
  <v-app>
    <v-app-bar
        app
        fixed
    >
      <a @click="goToHome">
        <v-toolbar-title class="mr-5">
          Movies
        </v-toolbar-title>
      </a>
      <v-switch
          v-model="$vuetify.theme.dark"
          hide-details
          prepend-icon="mdi-weather-sunny"
          append-icon="mdi-weather-night"
      ></v-switch>
      <v-spacer></v-spacer>
      <v-text-field
          v-if="$route.path === '/'"
          v-model="searchInput"
          append-icon="mdi-magnify"
          label="Search for movies, directors, release dates..."
          single-line
          hide-details
      ></v-text-field>
    </v-app-bar>
    <v-main>
      <v-layout>
        <router-view :searchInput="searchInput"></router-view>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      searchInput: '',
    };
  },
  created() {
    document.title = window.sharedData.title;
  },
  methods: {
    // Changes URL to /
    goToHome() {
      this.$router.push({path: '/'});
    }
  },
};
</script>
