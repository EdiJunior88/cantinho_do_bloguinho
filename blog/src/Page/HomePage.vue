<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CardDefault from '@/components/Cards/CardDefault.vue'
import { cardTitle_01, cardTitle_02 } from '@/components/Titles/2023/November/titles.ts'

// Função para formatar um título
const formatTitle = (title: string) => {
  // REGEX para substituir todos os caracteres que não são letras minúsculas
  // ou números por um traço (-). A expressão regular /[^a-z0-9]+/g corresponde
  // a um ou mais caracteres que não são letras minúsculas ou números.
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

const formattedTitle_01 = formatTitle(cardTitle_01)
const formattedTitle_02 = formatTitle(cardTitle_02)
</script>

<template>
  <div class="container mx-auto">
    Pagina Home

    <RouterLink :to="{ name: 'topics', params: { title: formattedTitle_01 } }">
      <CardDefault icon="vi-file-type-vue" :title="cardTitle_01"> </CardDefault>
    </RouterLink>
    <RouterLink :to="{ name: 'topics', params: { title: formattedTitle_02 } }">
      <CardDefault icon="vi-file-type-vue" :title="cardTitle_02"> </CardDefault>
    </RouterLink>
  </div>
</template>

<style lang="css" scoped></style>
