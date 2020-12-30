<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="movie in searchResults" :key="movie._id" cols="12" sm="3">
        <MovieCard @show-dialog="showDialog($event)" :id="movie._id" :title="movie.title" :poster-url="movie.posterUrl" :genre="movie.genre" :rating="movie.rating"></MovieCard>
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
    <ConfirmDialog @dismiss-dialog="dismissDialog" @confirm-dialog="deleteMovie(idToDelete)" :dialog="dialog"></ConfirmDialog>

  </v-container>
</template>

<script>
  import MovieCard from "@/components/MovieCard";
  import { normalize } from "@/helpers"
  import ConfirmDialog from "@/components/ConfirmDialog";

  export default {
    name: "Home",
    props: ['searchInput'],
    components: {ConfirmDialog, MovieCard},
    data() {
      return {
        movies: [],
        dialog: false,
        idToDelete: '',
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
      // Sends ajax delete call to delete movie from database
      deleteMovie(id) {
        this.$http
            .delete(window.sharedData.apiUrl + id)
            .then((result) => {
              if(result.status === 200) {
                this.dialog = false;
                this.fetchData();
              }
            })
      },
      showDialog(id) {
        this.dialog = true;
        this.idToDelete = id;
      },
      dismissDialog() {
        this.dialog = false;
      }
    },
    computed: {
      // Returns a list of movies, filtered by title, director, and release date
      searchResults() {
        const lowerSearchInput = normalize(this.searchInput);
        return this.movies.filter(movie => {
          return  normalize(movie.title).includes(lowerSearchInput) ||
                  normalize(movie.year).includes(lowerSearchInput) ||
                  normalize(movie.director.name).includes(lowerSearchInput)
        });
      },
    },
  }
</script>

<style scoped>

</style>
