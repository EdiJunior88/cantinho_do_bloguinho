<script setup lang="ts">
/* Componente mãe que engloba todos os componentes o projeto */
import { RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

/* Componente de analise de views do site pela Vercel */
import { inject } from '@vercel/analytics';

/* Chamando o Componente de analise de views */
inject();
</script>

<template>
  <HomeView />
  <RouterView />
</template>
