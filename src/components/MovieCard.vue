<template>
  <v-hover v-slot="{ hover }">
    <v-card>
      <a @click="goToDetails">
        <v-img :src="posterUrl"></v-img>
      </a>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-subtitle>
        {{ genre }}
      </v-card-subtitle>
      <v-card-text>
        <v-row justify="center">
          <v-rating
            :value="parseFloat(rating)"
            background-color="white"
            color="orange"
            length="5"
            half-increments
            size="20"
            readonly
          ></v-rating>
        </v-row>
      </v-card-text>

      <v-expand-transition>
        <div v-show="hover">
          <v-card-actions>
            <v-btn text color="primary" @click="goToDetails"> More </v-btn>
            <v-spacer></v-spacer>
            <v-btn text color="red" @click="deleteMovie"> Delete </v-btn>
          </v-card-actions>
        </div>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "MovieCard",
  props: ["id", "title", "posterUrl", "genre", "rating"],
  data() {
    return {
      show: false,
      hover: true,
    };
  },
  methods: {
    // Changes URL to /movie/:id
    goToDetails() {
      this.$router.push({ path: `/movie/${this.id}` });
    },
    // Sends ajax delete call to delete movie from database
    deleteMovie() {
      this.$emit("show-dialog", this.id);
    },
  },
};
</script>

<style scoped>
</style>
