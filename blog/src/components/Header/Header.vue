<script setup lang="ts">
  defineProps(["title"]);
</script>

<template>
  <div>
    <slot />
    <h1>{{ title }}</h1>
  </div>
</template>
