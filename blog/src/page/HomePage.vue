<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CardDefault from '@/components/Cards/CardDefault.vue'
import {
  cardTitle_11_01,
  cardDate_11_01,
  cardTitle_11_02,
  cardDate_11_02,
  cardTitle_11_03,
  cardDate_11_03,
  cardTitle_11_04,
  cardDate_11_04
} from '@/components/Titles/2023/11_November/titles'
import { cardTitle_12_01, cardDate_12_01 } from '@/components/Titles/2023/12_December/titles'

// Função para formatar um título
const formatTitle = (title: string) => {
  // REGEX para substituir todos os caracteres que não são letras minúsculas
  // ou números por um traço (-). A expressão regular /[^a-z0-9]+/g corresponde
  // a um ou mais caracteres que não são letras minúsculas ou números.
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

// Chamando a função formatadora de título
// Mês Novembro - 2023
const formattedTitle_11_01 = formatTitle(cardTitle_11_01)
const formattedTitle_11_02 = formatTitle(cardTitle_11_02)
const formattedTitle_11_03 = formatTitle(cardTitle_11_03)
const formattedTitle_11_04 = formatTitle(cardTitle_11_04)

// Mês Dezembro - 2023
const formattedTitle_12_01 = formatTitle(cardTitle_12_01)
</script>

<template>
  <div class="mx-auto max-w-screen-md">
    <RouterLink :to="{ name: 'news1', params: { title: formattedTitle_11_01 } }">
      <CardDefault icon="vi-file-type-vue" :title="cardTitle_11_01" :datePost="cardDate_11_01" />
    </RouterLink>

    <RouterLink :to="{ name: 'news2', params: { title: formattedTitle_11_02 } }">
      <CardDefault
        icon="vi-file-type-light-next"
        :title="cardTitle_11_02"
        :datePost="cardDate_11_02"
      />
    </RouterLink>

    <RouterLink :to="{ name: 'news3', params: { title: formattedTitle_11_03 } }">
      <CardDefault
        icon="vi-file-type-light-next"
        :title="cardTitle_11_03"
        :datePost="cardDate_11_03"
      />
    </RouterLink>

    <RouterLink :to="{ name: 'news4', params: { title: formattedTitle_11_04 } }">
      <CardDefault icon="vi-file-type-git" :title="cardTitle_11_04" :datePost="cardDate_11_04" />
    </RouterLink>

    <RouterLink :to="{ name: 'news5', params: { title: formattedTitle_12_01 } }">
      <CardDefault icon="vi-file-type-git" :title="cardTitle_12_01" :datePost="cardDate_12_01" />
    </RouterLink>
  </div>
</template>
