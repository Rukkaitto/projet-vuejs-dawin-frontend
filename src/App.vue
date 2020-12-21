<template>
  <v-app>
    <v-app-bar
        app
        fixed
    >
      <v-toolbar-title>
          Home
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
      ></v-text-field>
    </v-app-bar>
    <v-main>
      <v-layout>
        <router-view ></router-view>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
