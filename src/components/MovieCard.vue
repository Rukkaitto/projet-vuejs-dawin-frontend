<template>
  <v-card>
    <a @click="goToDetails">
      <v-img
          :src="posterUrl"
      ></v-img>
    </a>
        <v-card-title>
          {{title}}
        </v-card-title>
    <v-card-subtitle>
      {{genre}}
    </v-card-subtitle>
    <v-card-text>
      <v-row justify="center">
        <v-rating
            :value="parseFloat(rating)"
            background-color="white"
            color="orange"
            length="5"
            half-increments
            size="20"
            readonly
        ></v-rating>
      </v-row>

    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="primary"
        @click="goToDetails"
      >
        More
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        text
        color="red"
        @click="deleteMovie"
      >
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "MovieCard",
  props: ['id', 'title', 'posterUrl', 'genre', 'rating'],
  data() {
    return {
      show: false,
    };
  },
  methods: {
    goToDetails() {
      this.$router.push({path: `/movie/${this.id}`});
    },
    deleteMovie() {
      this.$http
          .delete(window.sharedData.apiUrl + this.id)
          .then((result) => {
            if(result.status === 200) {
              this.$emit('fetch-data');
            }
          })
    }
  },
}
</script>

<style scoped>

</style>