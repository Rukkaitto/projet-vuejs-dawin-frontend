<template>
  <v-app>
    <v-app-bar
        app
        fixed
    >
      <a @click="goToHome">
        <v-toolbar-title>
          Movies
        </v-toolbar-title>
      </a>
      <v-spacer></v-spacer>
      <v-text-field
          v-if="$route.path == '/'"
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
    goToHome() {
      this.$router.push({path: '/'});
    }
  },
};
</script>
