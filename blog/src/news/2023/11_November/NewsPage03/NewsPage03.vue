<script setup lang="ts">
/* Data 22/11/2023 */
import { cardTitle_11_03, cardDate_11_03 } from '@/components/Titles/2023/11_November/titles'
</script>

<template>
  <div class="container mx-auto p-10 w-10/12 rounded-3xl bg-semi-transparent leading-7">
    <header>
      <div class="text-slate-500 text-xs font-medium uppercase">Publicado em {{ cardDate_11_03 }}</div>
      <div class="font-title text-center py-10 font-extrabold text-3xl">{{ cardTitle_11_03 }}</div>
    </header>

    <section>
      <p class="py-2">
        Esse é um tutorial que funciona no <span class="marcatexto">NextJS (v14.0.3)</span>
      </p>

      <p class="py-2">
        Como sempre quem é do front-end tem a incrível missão de brigar diariamente com a
        responsividade das imagens e um dos grandes problemas é deixá-la com a proporção original
        (nem muito esticada e tão pouco muito amassada).
      </p>

      <p class="py-2">
        A vantagem do <span class="marcatexto">NextJS</span> é ter uma otimização da imagem sem
        "estragar" a beleza da mesma, por isso é muito comum utilizarmos o componente
        <code class="codigo">&lt;Image /&gt;</code> que possui algumas propriedades:
      </p>

      <img src="./assets/code01.webp" alt="exemplo código" />

      <p class="py-2">
        - <span class="marcatexto">src</span>: especifica o caminho da imagem a ser exibida. No
        exemplo, a variável profilePic é usada para fornecer o caminho da imagem.

        <br />

        - <span class="marcatexto">alt</span>: define o texto alternativo que será exibido caso a
        imagem não possa ser carregada.

        <br />

        - <span class="marcatexto">width</span> e <span class="marcatexto">height</span>: são
        fornecidos automaticamente e definem as dimensões da imagem. No exemplo, o valor
        <span class="marcatexto">500</span> é usado para ambos.

        <br />

        - <span class="marcatexto">blurDataURL</span>: fornece uma URL de dados embaçados para ser
        exibida enquanto a imagem é carregada. Essa propriedade é fornecida automaticamente..

        <br />

        - <span class="marcatexto">placeholder</span>: define o estilo de desfoque que será exibido
        enquanto a imagem é carregada. Neste exemplo, a opção <span class="marcatexto">blur</span> é
        usada.
      </p>

      <p class="py-2">
        Agora, sabendo algumas das principais características desse componente, vamos ao que
        interessa. Para deixar a imagem sempre responsiva e com o tamanho correto, basta adicionar a
        propriedade <span class="marcatexto">sizes="100vw"</span> e também um estilo inline
        <span class="marcatexto">style</span> com o <span class="marcatexto">width: '100%'</span> e
        <span class="marcatexto">height: 'auto'</span> igual ao código a seguir:
      </p>

      <img src="./assets/code02.webp" alt="exemplo código" />

      <p class="py-2">
        Se de repente a imagem é grande demais ou então não tem os lados, alturas iguais e você
        queira modificá-la para deixar responsiva, é só mudar as especificações no
        <span class="marcatexto">style</span> deixando o
        <span class="marcatexto">width: 'auto'</span> e modificando a altura
        <span class="marcatexto">height</span>
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