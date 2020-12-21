<template>
  <v-container>
    <v-form>
      <v-text-field v-model="form.title" label="Title"></v-text-field>
      <v-text-field v-model="form.genre" label="Genre"></v-text-field>
      <v-text-field v-model="form.language" label="Language"></v-text-field>
      Producer
      <v-container>
        <v-text-field v-model="form.producer.name" label="Name"></v-text-field>
        <v-text-field v-model="form.producer.nationality" label="Nationality"></v-text-field>
        <v-text-field v-model="form.producer.birthDate" label="Birth date" type="number"></v-text-field>
      </v-container>
      <v-text-field v-model="form.posterUrl" label="Poster"></v-text-field>
      <v-btn @click="createMovie">Save</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "CreateMovie",
  data() {
    return {
      form: {
        title: '',
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
    createMovie() {
      console.log(this.form);
      this.$http.post(window.sharedData.apiUrl, this.form)
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