<template>
  <MovieForm edit="true" @save-form="updateMovie($event)" submit-value="Save" card-title="Edit a movie"></MovieForm>
</template>

<script>
import MovieForm from "@/components/MovieForm";
export default {
  name: "EditMovie",
  components: {MovieForm},
  methods: {
    // Sends a PUT request to the API to update a movie
    updateMovie(form) {
      this.$http.put(window.sharedData.apiUrl + this.$route.params.id, form)
          .then(result => {
            if(result.status === 200) {
              this.$router.push({path: '/movie/' + this.$route.params.id});
            }
          });
    },
  },
}
</script>

<style scoped>

</style>
