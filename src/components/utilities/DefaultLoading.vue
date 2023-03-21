<template lang="">
  <div class="text-center">
    <div class="text-center loading">
      <v-progress-circular :size="50" color="primary" indeterminate>
      </v-progress-circular>
    </div>
    <v-overlay></v-overlay>
  </div>
</template>
<script>
export default {
  data() {
    return {
      overlay: true,
    };
  },
};
</script>
<style lang="css">
.loading {
  position: absolute;
  z-index: 99;
  left: 50%;
  top: 50%;
  width: 100vw;
  height: 100vh;
}
</style>
