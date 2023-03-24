<template>
  <div>
    <v-alert type="alert" color="red" class="mt-2">
      {{ errorMessage }}
    </v-alert>
  </div>
</template>
<script>
export default {
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },
};
</script>
<style></style>
