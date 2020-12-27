<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="movie in searchResults" :key="movie._id" cols="12" sm="3">
        <MovieCard @fetch-data="fetchData" :id="movie._id" :title="movie.title" :poster-url="movie.posterUrl" :genre="movie.genre" :rating="movie.rating"></MovieCard>
      </v-col>
    </v-row>
    <v-btn
        @click="gotoCreate"
        bottom
        right
        fixed
        fab
        large
        color="accent"
    >
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>
  </v-container>

</template>

<script>
  import MovieCard from "@/components/MovieCard";
  export default {
    name: "Home",
    props: ['searchInput'],
    components: {MovieCard},
    data() {
      return {
        movies: [],
      }
    },
    created() {
      // Fetch all movies
      this.fetchData();
    },
    methods: {
      // Changes URL to /movie/new
      gotoCreate() {
        this.$router.push({path: '/movie/new'});
      },
      // Sends a GET request to the API to get all movies
      fetchData() {
        this.$http
            .get(window.sharedData.apiUrl + 'all')
            .then(result => {
              this.movies = result.data;
            });
      },
    },
    computed: {
      // Returns a list of movies, filtered by title, director, and release date
      searchResults() {
        const lowerSearchInput = this.searchInput.toLowerCase();
        return this.movies.filter(movie => {
          return  movie.title.toLowerCase().includes(lowerSearchInput) ||
                  movie.year.toLowerCase().includes(lowerSearchInput) ||
                  movie.director.name.toLowerCase().includes(lowerSearchInput)
        });
      },
    },
  }
</script>

<style scoped>

</style>
