<script setup lang="ts">
/* Data 21/11/2023 */
import { cardTitle_11_02, cardDate_11_02 } from '@/components/Titles/2023/11_November/titles'
</script>

<template>
  <div class="container mx-auto p-10 w-10/12 rounded-3xl bg-semi-transparent leading-7">
    <header>
      <div class="text-slate-500 text-xs font-medium uppercase">
        Publicado em {{ cardDate_11_02 }}
      </div>
      <div class="font-title text-center py-10 font-extrabold text-3xl">{{ cardTitle_11_02 }}</div>
    </header>

    <section>
      <p class="py-2">
        Esse é um tutorial que funciona no <span class="marcatexto">NextJS (v14.0.3)</span> e também
        na versão mais recente do <span class="marcatexto">Styled-Components (v6.1.1)</span>
      </p>

      <p class="py-2">
        Um dos típicos erros que enfrentamos ao estilizar uma página no framework NextJS é
        apresentar um "erro" (não necessariamente um erro e sim uma aparente falta de estilização)
        ao abrir a página pela primeira vez. Esse tipo de erro ocorre porque o NextJS possui uma
        arquitetura que divide o seu código em um <span class="marcatexto">modo cliente</span> e
        <span class="marcatexto">modo servidor</span>.
      </p>

      <p class="py-2">
        - O <span class="marcatexto">modo servidor</span> se refere ao navegador no dispositivo do
        usuário que envia uma solicitação a um servidor para retornar algo (no nosso caso uma página
        web).
      </p>

      <p class="py-2">
        - O <span class="marcatexto">modo cliente</span> se refere a um computador em um data center
        que armazena o código do seu aplicativo, como um site. Esse servidor recebe solicitações de
        um cliente e envia de volta uma resposta.
      </p>

      <p class="pt-2 font-medium italic">
        Imagem mostrando como é a arquitetura Cliente e Servidor:
      </p>
      <img
        src="./assets/code01.webp"
        alt="arquitetura cliente e servidor"
        width="70%"
        height="auto"
      />

      <p class="py-2">
        Já que destrinchamos essa longa parte, vamos realmente ao que interessa. Para resolver esse
        problema basta modificar o arquivo padrão do NextJS:
        <code class="codigo">next.config.js</code> ou <code class="codigo">next.config.ts</code>.
        Agora irei marcar onde o <span class="marcatexto">compiler:</span> será adicionado:
      </p>
      <img src="./assets/code02.webp" alt="exemplo código" />

      <p class="py-2">
        O <code class="codigo">compiler: {}</code> diz para o NextJS compilar o seu código
        utilizando o <code class="codigo">StyledComponents: true</code>. O arquivo
        <code class="codigo">next.config.js</code> ou <code class="codigo">next.config.ts</code> é
        usado pelo servidor NextJS, ou seja, é através desse arquivo que o seu código irá fazer a
        comunicação com o servidor, então, ele irá carregar os
        <span class="marcatexto">estilos CSS do Styled-Components</span> renderizados no lado do
        servidor.
      </p>

      <p class="py-2">
        Mas porquê que eu tenho que fazer todo esse processo? Porque por padrão o
        <span class="marcatexto">CSS</span> é renderizado ao lado do cliente para evitar
        sobrecarregar o servidor com muitas informações, mas, utilizamos o
        <span class="marcatexto">framework NextJS</span> que pré-renderiza todas as páginas no lado
        servidor e por isso que em um primeiro momentos a página carrega o conteúdo sem estilização.
      </p>

      <p class="py-2">
        No entanto, temos uma parte excelente em que o
        <span class="marcatexto">Styled Components</span> tem a vantagem de rodar (renderizar) no
        lado do servidor de forma simultânea com o cliente, renderizando somente o necessário (que
        nesse caso você é quem irá configurar quais os elementos serão estilizados) e isso é muito
        mais eficiente que o CSS normal.
      </p>

      <p class="py-2">
        Também temos que criar um arquivo raiz chamado de <code class="codigo">registry.js</code> ou
        <code class="codigo">registry.tsx</code> da seguinte maneira:
      </p>
      <img src="./assets/code03.webp" alt="exemplo código" />

      <p class="py-2">
        Este código é um módulo para registrar e gerenciar componentes estilizados em uma aplicação
        React. Ele exporta uma função padrão chamada
        <span class="marcatexto">StyledComponentsRegistry</span> que recebe a propriedade children
        como entrada.
      </p>

      <p class="py-2">
        O código importa várias dependências:
        <br />
        - <span class="marcatexto">React</span> para criar componentes React
        <br />
        - <span class="marcatexto">useState</span> do React para gerenciar estado em componentes
        funcionais
        <br />
        - <span class="marcatexto">useServerInsertedHTML</span> de
        <span class="marcatexto">next/navigation</span> para gerenciar HTML renderizado no servidor
        <br />
        - <span class="marcatexto">ServerStyleSheet</span> de
        <span class="marcatexto">styled-components</span> para criar uma folha de estilo no lado do
        servidor
        <br />
        - <span class="marcatexto">StyleSheetManager</span> de
        <span class="marcatexto">styled-components</span> para gerenciar as folhas de estilos
      </p>

      <p class="py-2">
        Dentro da função <span class="marcatexto">StyledComponentsRegistry</span>, ele inicializa
        uma variável de estado <span class="marcatexto">styledComponentsStyleSheet</span> usando o
        gancho <span class="marcatexto">useState</span>. O valor inicial é uma nova instância de
        <span class="marcatexto">ServerStyleSheet</span>.
      </p>

      <p class="py-2">
        O código então usa o gancho <span class="marcatexto">useServerInsertedHTML</span> para
        inserir o elemento de estilo no HTML renderizado no servidor. Ele recupera o elemento de
        estilo da instância <span class="marcatexto">styledComponentsStyleSheet</span> usando
        <span class="marcatexto">getStyleElement()</span>, limpa a tag de estilo usando
        <span class="marcatexto">clearTag()</span>, e retorna os estilos como um fragmento JSX.
      </p>

      <p class="py-2">
        Em seguida, o código verifica se o código está sendo executado no lado do cliente,
        verificando se o objeto <span class="marcatexto">window</span> está definido. Se estiver,
        ele retorna a propriedade <span class="marcatexto">children</span>
        sem nenhuma modificação.
      </p>

      <p class="py-2">
        Se o código estiver sendo executado no lado do servidor, ele envolve a propriedade
        <span class="marcatexto">children</span> com um componente
        <span class="marcatexto">StyleSheetManager</span> e passa
        <span class="marcatexto">styledComponentsStyleSheet.instance</span> como a propriedade
        <span class="marcatexto">sheet</span>.
      </p>

      <p class="py-2">
        No geral, este código configura um registro para gerenciar componentes estilizados em uma
        aplicação React, garantindo que os estilos sejam renderizados corretamente tanto no
        <span class="marcatexto">servidor</span> quanto no <span class="marcatexto">cliente</span>
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
@/components/Titles/2023/11_November/titles
