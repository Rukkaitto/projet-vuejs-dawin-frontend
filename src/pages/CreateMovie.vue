<template>
  <MovieForm @save-form="createMovie($event)" submit-value="Create" card-title="Create a new movie"></MovieForm>
</template>

<script>
import MovieForm from "@/components/MovieForm";
export default {
  name: "CreateMovie",
  components: {MovieForm},
  data() {
    return {
      form: {
        title: '',
        year: '',
        language: '',
        producer: {
          name: '',
          nationality: '',
          birthDate: '',
        },
        genre: '',
        rating: 0,
        posterUrl: '',
      }
    };
  },
  methods: {
    createMovie(form) {
      this.$http.post(window.sharedData.apiUrl, form)
          .then(result => {
            if(result.status === 200) {
              this.$router.push({path: '/'});
            }
          });
    },
    fillFields() {

    }
  }
}
</script>

<style scoped>

</style>