<script setup lang="ts">
defineProps({
  title: String
})
</script>

<template>
  <div class="w-80 flex justify-center">
    <div
      class="w-full h-80 flex justify-center items-stretch rounded-lg border border-red-700 shadow-lg"
    >
      <div class=""></div>
      {{ title }}
    </div>
  </div>
</template>

<style lang="css" scoped></style>
