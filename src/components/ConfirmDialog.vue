<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
        @click:outside="$emit('dismiss-dialog')"
    >
      <v-card>
        <v-card-title>
          Delete
        </v-card-title>

        <v-card-text>
          Are you sure you want to delete this movie?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="red"
              text
              @click="$emit('confirm-dialog')"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["dialog"],
  name: "ConfirmDialog",
}
</script>

<style scoped>

</style>
