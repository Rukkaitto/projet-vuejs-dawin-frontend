<template>
  <MovieForm @save-form="createMovie($event)" submit-value="Create" card-title="Create a new movie"></MovieForm>
</template>

<script>
import MovieForm from "@/components/MovieForm";
export default {
  name: "CreateMovie",
  components: {MovieForm},
  methods: {
    // Sends a CREATE request to the API to create a new movie
    createMovie(form) {
      this.$http.post(window.sharedData.apiUrl, form)
          .then(result => {
            if(result.status === 200) {
              this.$router.push({path: '/'});
            }
          });
    },
  }
}
</script>

<style scoped>

</style>
