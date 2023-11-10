<script setup lang="ts">
/* Data 07/11/2023 */
import { cardTitle_01 } from '@/components/Titles/2023/November/titles'
</script>

<template>
  <div class="container mx-auto w-5/6">
    <header>
      <div>Publicado em 07/11/2023</div>
      <div>{{ cardTitle_01 }}</div>
    </header>

    <section>
      <p class="py-2">
        Esse é um tutorial que funciona no VueJS (v3.3.8) em conjunto com o Vite mais recente
        (v4.5.0)
      </p>

      <p class="py-2">
        É sempre importante lembrar de que você pode configurar corretamente o seu projeto para que
        facilite certos tipos de ação aumentando a sua produtividade, e um desses tipos de
        configuração é como podemos melhorar métodos de
        <span class="marcatexto">chamar</span> pastas / arquivos / imagens dentro de um projeto de
        forma eficiente através do <span class="marcatexto">path alias @</span>
      </p>

      <p class="py-2">
        Geralmente chamamos as pastas por caminhos através de pontinhos
        <span class="marcatexto">(navegação por pastas)</span> por exemplo
        <code class="codigo">import { MeuComponente } from "../../pasta/componente.vue"</code> mas
        se preferir, poderá substituir os pontos pelo <span class="marcatexto">prefixo @</span> por
        exemplo <code class="codigo">import { MeuComponente } from "@/pasta/componente.vue"</code>
      </p>

      <p class="py-2">Exemplo de código com a navegação por pastas</p>
      <div class="bg-gray-900 text-green-400">
        <pre class="font-mono">
          testesssssssssssssssssssssssss
          AAAAAAAAAAAAAAAAAAAAAAAAAA
        </pre>
      </div>

      <p class="py-2">Exemplo de código utilizando o path alias @</p>
    </section>
  </div>
</template>

<style lang="css" scoped>
.marcatexto {
  background: #e2e2e2b0;
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

pre {
  white-space: pre-wrap;
  /* margin-left: -4rem; */
  padding-top: 1rem;
}
</style>
