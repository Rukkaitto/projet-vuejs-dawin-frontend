<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="movie in movies" :key="movie._id" cols="12" sm="3">
        <MovieCard @fetch-data="fetchData" :id="movie._id" :title="movie.title" :poster-url="movie.posterUrl" :genre="movie.genre" :rating="movie.rating"></MovieCard>
      </v-col>
    </v-row>
    <v-btn
        bottom
        right
        fixed
        fab
        large
        color="accent"
    >
      <v-icon @click="gotoCreate">
        mdi-plus
      </v-icon>
    </v-btn>
  </v-container>

</template>

<script>
  import MovieCard from "@/components/MovieCard";
  export default {
    name: "Home",
    components: {MovieCard},
    data() {
      return {
        movies: [],
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      gotoCreate() {
        this.$router.push({path: '/movie/new'});
      },
      fetchData() {
        this.$http
            .get(window.sharedData.apiUrl + 'all')
            .then(result => {
              this.movies = result.data;
            })
      },
    },
  }
</script>

<style scoped>

</style>
