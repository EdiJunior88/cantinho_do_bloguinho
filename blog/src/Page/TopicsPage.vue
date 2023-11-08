<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    Página de tópico
    <RouterLink to="/"> voltar </RouterLink>

    <RouterView />
  </div>
</template>

<style lang="css" scoped></style>
