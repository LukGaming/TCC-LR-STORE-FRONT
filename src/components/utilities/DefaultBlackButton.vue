<template>
  <div>
    <v-btn color="black" @click="callback" class="white--text">{{
      text_button
    }}</v-btn>
  </div>
</template>
<script>
export default {
  name: "DefaultBlackButton",
  props: {
    text_button: String,
    action: Function,
  },
  methods: {
    callback() {
      console.log("calll back do botão");
      this.$emit("callback");
    },
  },
};
</script>
<style></style>
