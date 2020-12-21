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
              Producer
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="form.producer.name" label="Name"></v-text-field>
              <v-text-field v-model="form.producer.nationality" label="Nationality"></v-text-field>
              <v-text-field v-model="form.producer.birthDate" label="Birth date" type="number"></v-text-field>
            </v-card-text>
          </v-card>
          <v-text-field v-model="form.posterUrl" label="Poster"></v-text-field>
          <v-btn @click="saveForm">{{submitValue}}</v-btn>
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
        producer: {
          name: '',
          nationality: '',
          birthDate: '',
        },
        genre: '',
        posterUrl: '',
      },
    };
  },
  created() {
    if(this.edit) {
      this.fetchFields();
    }
  },
  methods: {
    saveForm() {
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
  },
}
</script>

<style scoped>

</style>