<script setup lang="ts">
/* Data 05/12/2023 */
import { cardTitle_12_01, cardDate_12_01 } from '@/components/Titles/2023/12_December/titles'
</script>

<template>
  <div class="container mx-auto p-10 w-10/12 rounded-3xl bg-semi-transparent leading-7">
    <header>
      <div class="text-slate-500 text-xs font-medium uppercase">
        Publicado em {{ cardDate_12_01 }}
      </div>
      <div class="font-title text-center py-10 font-extrabold text-3xl">{{ cardTitle_12_01 }}</div>
    </header>

    <section>
      <p class="py-2">
        Para a galera que utiliza o CSS na mão <span class="marcatexto">(sem frameworks)</span>, dá
        para usar uma nova sintaxe no <strong>Media Queries</strong> (chamada de
        <span class="marcatexto">Media Queries Level 4</span>) que vai facilitar e muito o
        entendimento relacionado a largura de viewport
        <code class="codigo">
          (verifiquem antes a compatibilidade com os navegadores mais antigos)</code
        >.
      </p>

      <p class="py-2">
        Vamos utilizar como um exemplo a seguinte situação: Eu quero que o
        <span class="marcatexto">texto fique somente com a fonte maior</span> a partir do
        <span class="marcatexto">tamanho da tela seja maior ou igual a 1200 pixels</span>, nesse
        caso irei fazer da seguinte maneira:
      </p>

      <img src="./assets/code01.webp" alt="exemplo código" />

      <p class="py-2">
        Olhando de primeira fica meio difícil interpretar o que diz na parte do código
        <code class="codigo">@media (min-width: 1200px)</code>, demora um pouco e você percebe que
        ele diz que a largura da tela seja maior ou igual a 1200 pixels a fonte do texto será de
        <code class="codigo">3rem</code>.
      </p>
    </section>
  </div>
</template>

<style lang="css" scoped>
.marcatexto {
  background: #d8d8d8b0;
  padding: 0.2rem 0.4rem;
  color: #5f5fff;
  font-weight: 500;
  border-radius: 10px;
}

.codigo {
  background: #c21f1fb0;
  padding: 0.2rem 0.4rem;
  color: #fffc5f;
  font-weight: 500;
  border-radius: 10px;
}

img {
  padding: 1rem 0;
}
</style>
