<template>
  <div class="container">
    <button @click="fetchMovies">Fetch movies</button>
    <ul>
      <li v-for="movie in movies" v-bind:key='movie.id'>
        {{movie.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
  name: "Home",
          data() {
            return {
              movies: [],
            };
          },
          methods: {
            fetchMovies() {
              const baseURI = "http://localhost:3000/api/movies/all";
              this.$http.get(baseURI).then(result => this.movies = result.data)
            }
          }
  }
</script>

<style scoped>

</style>
