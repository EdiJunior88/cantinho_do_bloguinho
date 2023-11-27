<script setup lang="ts">
/* Componente mãe que engloba todos os componentes o projeto */
import { RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
</script>

<template>
  <HomeView />
  <RouterView />
</template>
