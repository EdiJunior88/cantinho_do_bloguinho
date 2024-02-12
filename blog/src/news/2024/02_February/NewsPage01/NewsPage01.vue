<script setup lang="ts">
/* Data 06/02/2024 */
import {
  cardTitle_02_24_01,
  cardDate_02_24_01,
} from "@/components/Titles/2024/02_February/titles";
</script>

<template>
  <div
    class="bg-semi-transparent container mx-auto w-10/12 rounded-3xl p-10 leading-7"
  >
    <header>
      <div class="text-xs font-medium uppercase text-slate-500">
        Publicado em {{ cardDate_02_24_01 }}
      </div>
      <div class="font-title py-10 text-center text-3xl font-extrabold">
        {{ cardTitle_02_24_01 }}
      </div>
    </header>

    <section>
      <p class="py-2">
        Esse é um tutorial que funciona no
        <span class="marcatexto">Nuxt (v3.10.1)</span> em conjunto com o
        <span class="marcatexto"> VueJS mais recente (v3.4.15) </span>
      </p>

      <p class="py-2">
        Uma das grandes facilidades do framework
        <span class="marcatexto">Nuxt 3</span> oferece é a flexibilidade em
        conjunto com a liberdade no momento de personalizar o seu projeto, seja
        também na instalação ou nas configurações.
      </p>

      <p class="py-2">
        Porém, como todo processo temos um pequeno problema: a falta de
        padronização principalmente com as ferramentas Prettier (formatação) e
        Eslint (análise) no momento da "codificação"
        <span class="marcatexto"
          >(diferente do NextJS que já faz toda a configuração para você)</span
        >.
      </p>

      <p class="py-2">
        Após muito esforço, estudos e configurações, cheguei a uma conclusão
        final da configuração perfeita para essas duas ferramentas até o momento
        em que escrevo esse artigo. Logo mais abaixo, vou explicar cada passo do
        tutorial para que a instalação e configuração dos arquivos sejam bem
        sucedidas e não deem conflito com extensões já instaladas em seu VSCode.
      </p>

      <p class="pt-2 font-medium italic">
        1 - Crie um projeto padrão no Nuxt 3 e sem nenhum template adicional
        (projeto puro)
      </p>
      <img src="./assets/code01.webp" alt="exemplo código" />

      <p class="pt-2 font-medium italic">
        2 - Após criado o projeto, instale as seguintes bibliotecas
      </p>
      <img src="./assets/code02.webp" alt="exemplo código" />

      <p class="py-2">
        Para melhor visualização, abaixo as bibliotecas estão separadas para
        você saber o que está instalando, mas
        <span class="marcatexto"
          >lembre-se que o código tem que ser igual ao da imagem acima</span
        >, um ao lado do outro para não ter nenhum tipo de erro no momento da
        instalação, se está achando que é muito texto para digitar e está
        inseguro, utilize o comando <span class="marcatexto">npm i -D</span>
        <strong>+</strong>
        <span class="marcatexto">o nome da biblioteca</span>
      </p>
      <p class="py-2">
        📌 <code class="codigo">npm i -D</code>
        <br />
        📌 <code class="codigo">eslint</code>
        <br />
        📌 <code class="codigo">@typescript-eslint/eslint-plugin</code>
        <br />
        📌 <code class="codigo">@typescript-eslint/parser</code>
        <br />
        📌 <code class="codigo">@vue/eslint-config-standard</code>
        <br />
        📌 <code class="codigo">eslint-config-prettier</code>
        <br />
        📌 <code class="codigo">eslint-plugin-prettier</code>
        <br />
        📌 <code class="codigo">eslint-plugin-nuxt</code>
        <br />
        📌 <code class="codigo">eslint-plugin-vue</code>
        <br />
        📌 <code class="codigo">@nuxtjs/eslint-module</code>
        <br />
        📌 <code class="codigo">@nuxt/eslint-config</code>
        <br />
        📌 <code class="codigo">@nuxtjs/eslint-config-typescript</code>
        <br />
      </p>

      <p class="py-2">
        No final da instalação as bibliotecas devem ficar localizadas na parte
        do código
        <code class="codigo">devDependencies</code> como na imagem abaixo
        <span class="marcatexto">(o arquivo é o package.json)</span>:
      </p>
      <img src="./assets/code03.webp" alt="exemplo código" />

      <p class="pt-2 font-medium italic">
        3 - Após a instalação das bibliotecas, vá para a sua pasta raiz do
        projeto e edite o arquivo
        <span class="marcatexto">package.json</span> adicionando o código
        <code class="codigo">"lint": "eslint ."</code> em
        <span class="marcatexto">scripts</span>
      </p>
      <img src="./assets/code04.webp" alt="exemplo código" />

      <p class="pt-2 font-medium italic">
        4 - Após as últimas configurações, crie um arquivo na raiz do projeto
        chamado
        <code class="codigo">.prettierrc</code> e adicione o seguinte conteudo
      </p>
      <img src="./assets/code05.webp" alt="exemplo código" />

      <p class="pt-2 font-medium italic">
        5 - Novamente na sua pasta raiz do projeto, crie um novo arquivo chamado
        <code class="codigo">.eslintrc</code> e adicione o seguinte conteudo
      </p>
      <img src="./assets/code06.webp" alt="exemplo código" />

      <p class="pt-2 font-medium italic">
        6 - Para finalizar todas as configurações do Prettier e Eslint, agora
        adicione o código no arquivo raiz do projeto chamado de
        <code class="codigo">nuxt.config.ts</code>
        <span class="marcatexto"
          >(caso seja JavaScript o arquivo será nuxt.config.js)</span
        >
      </p>
      <img src="./assets/code07.webp" alt="exemplo código" />

      <p class="py-2">
        Lembrando que o código será
        <code class="codigo">modules: ['@nuxtjs/eslint-module']</code> dentro do
        componente pai chamado
        <code class="codigo">export default defineNuxtConfig({})</code>, caso
        tenha mais configurações como o do exemplo da imagem acima, a ordem em
        que você irá colocar o modules não importa, só fique atento para não
        deixar fora do componente pai do arquivo
        <span class="marcatexto">export default defineNuxtConfig({})</span>
      </p>

      <p class="py-2">
        Prontinho! Agora o seu projeto em
        <span class="marcatexto">Nuxt 3</span> estará em total harmonia com o
        <span class="marcatexto">Prettier</span> e
        <span class="marcatexto">Eslint</span>. Quaisquer notificações,
        alterações no código utilizando a sintaxe correta da linguagem (vue) ou
        análises de código deverão ser realizadas de forma correta e sem
        conflito com as suas extensões instaladas no VSCode.
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
