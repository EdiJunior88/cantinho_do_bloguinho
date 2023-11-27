<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CardDefault from '@/components/Cards/CardDefault.vue'
import {
  cardTitle_01,
  cardDate_01,
  cardTitle_02,
  cardDate_02,
  cardTitle_03,
  cardDate_03,
  cardTitle_04,
  cardDate_04
} from '@/components/Titles/2023/November/titles'

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
const formattedTitle_03 = formatTitle(cardTitle_03)
const formattedTitle_04 = formatTitle(cardTitle_04)
</script>

<template>
  <div class="mx-auto max-w-screen-md">
    <RouterLink :to="{ name: 'news1', params: { title: formattedTitle_01 } }">
      <CardDefault icon="vi-file-type-vue" :title="cardTitle_01" :datePost="cardDate_01" />
    </RouterLink>

    <RouterLink :to="{ name: 'news2', params: { title: formattedTitle_02 } }">
      <CardDefault icon="vi-file-type-light-next" :title="cardTitle_02" :datePost="cardDate_02" />
    </RouterLink>

    <RouterLink :to="{ name: 'news3', params: { title: formattedTitle_03 } }">
      <CardDefault icon="vi-file-type-light-next" :title="cardTitle_03" :datePost="cardDate_03" />
    </RouterLink>

    <RouterLink :to="{ name: 'news4', params: { title: formattedTitle_04 } }">
      <CardDefault icon="vi-file-type-git" :title="cardTitle_04" :datePost="cardDate_04" />
    </RouterLink>
  </div>
</template>

<style lang="css" scoped></style>
