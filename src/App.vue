<template>
  <v-app>
    <v-app-bar
        app
        fixed
    >
      <v-toolbar-title>
          Movies Database
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
          v-if="$route.path == '/'"
          v-model="searchInput"
          append-icon="mdi-magnify"
          label="Search"
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
};
</script>
