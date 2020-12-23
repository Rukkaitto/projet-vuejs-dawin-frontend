<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{cardTitle}}
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="form.title" label="Title"></v-text-field>
          <v-text-field v-model="form.year" label="Release date" type="number"></v-text-field>
          <v-text-field v-model="form.genre" label="Genre"></v-text-field>
          <v-text-field v-model="form.language" label="Language"></v-text-field>
          <v-card>
            <v-card-title>
              Director
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="form.director.name" label="Name"></v-text-field>
              <v-text-field v-model="form.director.nationality" label="Nationality"></v-text-field>
              <v-text-field v-model="form.director.birthDate" label="Birth date" type="number"></v-text-field>
            </v-card-text>
          </v-card>
          <v-text-field v-model="form.posterUrl" label="Poster URL" append-icon="mdi-download" @click:append="fetchPosterUrl"></v-text-field>
          <v-btn @click="saveForm" :disabled="!formIsValid">{{submitValue}}</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "MovieForm",
  props: ['cardTitle', 'submitValue', 'edit'],
  data() {
    return {
      form: {
        title: '',
        year: '',
        language: '',
        director: {
          name: '',
          nationality: '',
          birthDate: '',
        },
        genre: '',
        posterUrl: '',
      },
      //file: null,
    };
  },
  created() {
    if(this.edit) {
      this.fetchFields();
    }
  },
  methods: {
    saveForm() {
      //this.uploadPoster();
      this.$emit('save-form', this.form);
    },
    fetchFields() {
      this.$http
          .get(window.sharedData.apiUrl + this.$route.params.id)
          .then(result => {
            this.form = result.data;
          })
          .catch(error => console.log(error));
    },
    fetchPosterUrl() {
      this.$http
          .get(`http://www.omdbapi.com/?i=tt3896198&apikey=${window.sharedData.omdbApiKey}&s=${this.form.title}`)
          .then(result => {
            this.form.posterUrl = result.data["Search"][0]["Poster"];
          })
          .catch(error => {
            console.log(error);
            this.form.posterUrl = "No poster found for this title.";
          });
    },
    uploadPoster() {
      let formData = new FormData()
      formData.append('poster', this.file)
      this.$http.post('http://localhost:3000/upload', formData)
          .then(result => {
            this.form.posterUrl = 'http://localhost:3000/' + result.data.posterUrl;
          });
    },
  },
  computed: {
    formIsValid() {
      return Object.values(this.form).every(field => field !== '');
    }
  }
}
</script>

<style scoped>

</style>
