<script setup lang="ts">
/* Data 07/11/2023 */
import { cardTitle_11_01, cardDate_11_01 } from '@/components/Titles/2023/11_November/titles'
</script>

<template>
  <div class="container mx-auto p-10 w-10/12 rounded-3xl bg-semi-transparent leading-7">
    <header>
      <div class="text-slate-500 text-xs font-medium uppercase">Publicado em {{ cardDate_11_01 }}</div>
      <div class="font-title text-center py-10 font-extrabold text-3xl">{{ cardTitle_11_01 }}</div>
    </header>

    <section>
      <p class="py-2">
        Esse é um tutorial que funciona no <span class="marcatexto">VueJS (v3.3.8)</span> em
        conjunto com o <span class="marcatexto"> Vite mais recente (v4.5.0) </span>
      </p>

      <p class="py-2">
        É sempre importante lembrar que você pode configurar corretamente o seu projeto para que
        facilite certos tipos de ação aumentando a sua produtividade, e um desses tipos de
        configuração é como podemos melhorar métodos de
        <span class="marcatexto">chamar pastas / arquivos / imagens</span> dentro de um projeto de
        forma eficiente e sem se preocupar muito com os subdiretórios, tudo isso através do
        <span class="marcatexto">path alias (@)</span>
      </p>

      <p class="py-2">
        Geralmente chamamos as pastas por caminhos através de pontinhos e barras
        <span class="marcatexto">(navegação por pastas)</span>, por exemplo
        <code class="codigo">import { MeuComponente } from "../../pasta/componente.vue"</code>
        (lembrando o sistema de pesquisa do terminal Linux ou do Windows) mas se preferir, poderá
        substituir os pontos pelo <span class="marcatexto">prefixo @</span> por exemplo
        <code class="codigo">import { MeuComponente } from "@/pasta/componente.vue"</code>
      </p>

      <p class="pt-2 font-medium italic">Exemplo de código com a navegação por pastas:</p>
      <img src="./assets/code01.webp" alt="exemplo código" />

      <p class="pt-2 font-medium italic">Exemplo de código utilizando o path alias @:</p>
      <img src="./assets/code02.webp" alt="exemplo código" />

      <p>
        Geralmente após o processo de instalação de um novo projeto VueJS esse tipo de
        <span class="marcatexto">atalho</span> já é adicionado e configurado automaticamente em seu
        projeto, mas em caso de dúvidas, acesse o arquivo
        <code class="codigo">vite.config.ts</code> ou <code class="codigo">vite.config.js</code> e
        verifique se irá aparecer semelhante a esse código abaixo:
      </p>
      <img src="./assets/code03.webp" alt="exemplo código" />

      <p>Agora irei marcar onde o <span class="marcatexto">path (alias)</span> aparecerá:</p>
      <img src="./assets/code04.webp" alt="exemplo código" />

      <p>
        O <span class="marcatexto">atalho @</span> é configurado para apontar para o diretório
        <span class="marcatexto">src</span> do seu projeto. Isso é feito usando a função
        <code class="codigo">fileURLToPath</code> e <code class="codigo">new URL</code> do
        <span class="marcatexto">Node.js</span> para criar um caminho absoluto para o diretório
        <span class="marcatexto">src</span>, ou seja, você poderá indicar em qualquer pasta que
        esteja dentro da <span class="marcatexto">pasta-mãe src</span>
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