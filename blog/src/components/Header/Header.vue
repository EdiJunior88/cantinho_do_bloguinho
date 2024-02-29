<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  home: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex items-center gap-3">
    <slot />
    <h1 class="font-header text-2xl">{{ title }}</h1>
  </div>
</template>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap");

.font-header {
  font-family: "Bungee Spice", sans-serif;
  background: #00870e;
  background: linear-gradient(to top, #00aa11 0%, #0a0094 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
