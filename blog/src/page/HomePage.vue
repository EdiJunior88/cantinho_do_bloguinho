<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CardDefault from '@/components/Cards/CardDefault.vue'
import { cardTitle_01, cardTitle_02 } from '@/components/Titles/2023/November/titles'

//Função para formatar um título
const formatTitle = (title: string) => {
  //REGEX para substituir todos os caracteres que não são letras minúsculas
  //ou números por um traço (-). A expressão regular /[^a-z0-9]+/g corresponde
  //a um ou mais caracteres que não são letras minúsculas ou números.
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

//Chamando a função formatadora de título
const formattedTitle_01 = formatTitle(cardTitle_01)
const formattedTitle_02 = formatTitle(cardTitle_02)
</script>

<template>
  <div class="mx-auto max-w-screen-md">
    <RouterLink :to="{ name: 'news1', params: { title: formattedTitle_01 } }">
      <CardDefault icon="vi-file-type-vue" :title="cardTitle_01" />
    </RouterLink>

    <RouterLink :to="{ name: 'news2', params: { title: formattedTitle_02 } }">
      <CardDefault icon="vi-file-type-vue" :title="cardTitle_02" />
    </RouterLink>
  </div>
</template>

<style lang="css" scoped></style>
