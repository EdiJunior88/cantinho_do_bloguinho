<script setup lang="ts">
/* Data 06/02/2024 */
import { cardTitle_02_24_01, cardDate_02_24_01 } from '@/components/Titles/2024/02_February/titles'
</script>

<template>
  <div class="container mx-auto p-10 w-10/12 rounded-3xl bg-semi-transparent leading-7">
    <header>
      <div class="text-slate-500 text-xs font-medium uppercase">
        Publicado em {{ cardDate_02_24_01 }}
      </div>
      <div class="font-title text-center py-10 font-extrabold text-3xl">
        {{ cardTitle_02_24_01 }}
      </div>
    </header>

    <section>
      <p class="py-2">
        Esse é um tutorial que funciona no <span class="marcatexto">VueJS (v3.3.8)</span> em
        conjunto com o <span class="marcatexto"> Vite mais recente (v4.5.0) </span>
      </p>

      <p class="py-2">
        Geralmente chamamos as pastas por caminhos através de pontinhos e barras
        <span class="marcatexto">(navegação por pastas)</span>, por exemplo
        <code class="codigo">import { MeuComponente } from "../../pasta/componente.vue"</code>
        (lembrando o sistema de pesquisa do terminal Linux ou do Windows) mas se preferir, poderá
        substituir os pontos pelo <span class="marcatexto">prefixo @</span> por exemplo
        <code class="codigo">import { MeuComponente } from "@/pasta/componente.vue"</code>
      </p>

      <p class="pt-2 font-medium italic">Exemplo de código utilizando o path alias @:</p>
      <img src="./assets/code02.webp" alt="exemplo código" />

      <p>
        Geralmente após o processo de instalação de um novo projeto VueJS esse tipo de
        <span class="marcatexto">atalho</span> já é adicionado e configurado automaticamente em seu
        projeto, mas em caso de dúvidas, acesse o arquivo
        <code class="codigo">vite.config.ts</code> ou <code class="codigo">vite.config.js</code> e
        verifique se irá aparecer semelhante a esse código abaixo:
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
