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
        <span class="marcatexto">texto fique somente com a fonte maior</span> contanto que o
        <span class="marcatexto">tamanho da tela seja maior ou igual a 1200 pixels</span>, nesse
        caso irei fazer da seguinte maneira:
      </p>

      <img src="./assets/code01.webp" alt="exemplo código" />

      <p class="py-2">
        Olhando pela primeira vez fica meio difícil interpretar o que diz na parte do código
        <code class="codigo">@media (min-width: 1200px)</code>, vai demorar um pouquinho mas você
        percebe que o código diz que
        <strong>caso a largura da tela seja maior ou igual a 1200 pixels</strong> a fonte do texto
        será de <code class="codigo">3rem</code>.
      </p>

      <p class="py-2">
        Agora foi introduzido uma nova sintaxe utilizando
        <span class="marcatexto">operadores de comparação</span> do tipo
        <code class="codigo">&lt;, &gt;, &lt;=, &gt;=, =</code>
      </p>

      <p class="py-2">
        📌 <code class="codigo">&lt;</code> avalia se um valor é
        <span class="marcatexto">menor que</span> outro valor
        <br />
        📌 <code class="codigo">&gt;</code> avalia se um valor é
        <span class="marcatexto">maior que</span> outro valor
        <br />
        📌 <code class="codigo">=</code> avalia se um valor é
        <span class="marcatexto">igual</span> que outro valor
        <br />
        📌 <code class="codigo">&lt;=</code> avalia se um valor é
        <span class="marcatexto">menor ou igual</span> a outro valor
        <br />
        📌 <code class="codigo">&gt;=</code> avalia se um valor é
        <span class="marcatexto">maior ou igual</span> a outro valor
        <br />
      </p>

      <p class="py-2">Vejamos em um exemplo para que você fixe melhor esse assunto:</p>

      <img src="./assets/code02.webp" alt="exemplo código" />

      <p class="py-2">
        Agora ficou mais fácil e intuitivo verificar em qual o ponto da responsividade ficará a
        largura. Inclusive esse tipo de sintaxe funciona também em
        <span class="marcatexto">comparação de intervalos</span>, vejamos outro exemplo:
      </p>

      <img src="./assets/code03.webp" alt="exemplo código" />

      <p class="py-2">
        Explicando brevemente o <span class="marcatexto">segundo código</span>:
        <strong>
          O estilo é aplicado aos elementos quando a largura da janela de visualização está entre
          400 pixels e 1000 pixels.
        </strong>
      </p>

      <p class="py-2">
        Caso você esteja curioso em implementar essa nova sintaxe em seus códigos CSS, não esqueça de
        verificar no site <span class="marcatexto">Can In Use</span> através desse link:
        <code class="codigo">
          <a
            href="https://caniuse.com/?search=CSS%20Media%20Query%20Range%20Syntax"
            target="_blank"
            rel="noopener noreferrer"
            >https://caniuse.com/</a
          >
        </code>
        <img src="./assets/code04.webp" alt="exemplo página" />
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
