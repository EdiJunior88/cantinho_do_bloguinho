<script setup lang="ts">
/* Componente mãe que engloba todos os componentes o projeto */
import { RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
/* Componente de análise de views do site pela Vercel */
import { Analytics } from '@vercel/analytics/react'
</script>

<template>
  <HomeView />
  <RouterView />
  <Analytics />
</template>
