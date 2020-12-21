<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col cols="12" sm="6">
          <v-img max-height="100%" :src="details.posterUrl"></v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card-title>
            {{details.title}} ({{details.year}})
          </v-card-title>
          <v-card-subtitle>
            {{details.producer && details.producer.name}}, born in {{details.producer && details.producer.birthDate}}, {{details.producer && details.producer.nationality}}
          </v-card-subtitle>
          <v-card-subtitle>
            {{details.genre}}, {{details.language}}
          </v-card-subtitle>

          <v-card-text>
            <v-rating
                :value="parseFloat(details.rating)"
                background-color="white"
                color="orange"
                hover
                length="5"
                half-increments
            ></v-rating>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <v-btn
        bottom
        right
        fixed
        fab
        large
        color="accent"
        @click="goToEdit"
    >
      <v-icon>
        mdi-pencil
      </v-icon>
    </v-btn>
  </v-container>

</template>

<script>
export default {
  name: "MovieDetails",
  data() {
    return {
      details: [],
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$http
          .get(window.sharedData.apiUrl + this.$route.params.id)
          .then(result => {
            this.details = result.data;
          })

    },
    goToEdit() {
      this.$router.push({path: `/movie/${this.$route.params.id}/edit`});
    },
  },
}
</script>

<style scoped>

</style>