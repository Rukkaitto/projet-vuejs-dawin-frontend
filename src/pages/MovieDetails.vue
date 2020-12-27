<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col cols="12" sm="6">
          <v-img max-height="100%" :src="details.posterUrl"></v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card-title>
            {{details.title}} ({{details.year}})
          </v-card-title>
          <v-card-subtitle>
            {{details.director && details.director.name}}, born in {{details.director && details.director.birthDate}}, {{details.director && details.director.nationality}}
          </v-card-subtitle>
          <v-card-subtitle>
            {{details.genre}}, {{details.language}}
          </v-card-subtitle>

          <v-card-text>
            <v-rating
                v-model="rating"
                :value="parseFloat(details.rating)"
                background-color="white"
                color="orange"
                hover
                length="5"
                half-increments
            ></v-rating>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <v-btn
        bottom
        right
        fixed
        fab
        large
        color="accent"
        @click="goToEdit"
    >
      <v-icon>
        mdi-pencil
      </v-icon>
    </v-btn>
  </v-container>

</template>

<script>
export default {
  name: "MovieDetails",
  data() {
    return {
      details: {},
      rating: 0,
      success: false,
    }
  },
  created() {
    // Get all details of the current movie
    this.fetchData();
  },
  methods: {
    // Sends a GET request to the API to get the movie's details
    fetchData() {
      this.$http
          .get(window.sharedData.apiUrl + this.$route.params.id)
          .then(result => {
            this.details = result.data;
            this.rating = result.data.rating;
          });
    },
    // Changes URL to /movie/:id/edit
    goToEdit() {
      this.$router.push({path: `/movie/${this.$route.params.id}/edit`});
    },
  },
  watch: {
    // When rating changes (i.e. the rating component is clicked), sends the rating to the API
    rating() {
      this.$http
          .put(`${window.sharedData.apiUrl}${this.$route.params.id}/rate`, {rating: this.rating})
          .then(result => console.log(result))
          .catch(error => console.log(error));
    }
  },
}
</script>

<style scoped>

</style>
