<script setup lang="ts">
/* Data 27/11/2023 */
import { cardTitle_11_04, cardDate_11_04 } from '@/components/Titles/2023/11_November/titles'
</script>

<template>
  <div class="container mx-auto p-10 w-10/12 rounded-3xl bg-semi-transparent leading-7">
    <header>
      <div class="text-slate-500 text-xs font-medium uppercase">
        Publicado em {{ cardDate_11_04 }}
      </div>
      <div class="font-title text-center py-10 font-extrabold text-3xl">{{ cardTitle_11_04 }}</div>
    </header>

    <section>
      <p class="py-2">
        Se você entrou no mundo da programação, ao menos uma vez já viu na internet que qualquer
        pessoa (desenvolvedor) pode contribuir em projetos open-sources no GitHub, isso inclui desde
        projetos individuais e até mesmo projetos de escopos de negócios.
      </p>

      <p class="py-2">
        Mas em meio a uma vastidão de códigos espalhados pela plataforma, como sei onde dar o meu
        primeiro passo para contribuir com algo? Venha por aqui, pegue na minha mão e siga esse
        tutorial rápido.
      </p>

      <p class="py-2">
        Em primeiro lugar siga esse link do projeto chamado
        <span class="marcatexto"
          ><a href="https://github.com/firstcontributions" target="_blank" rel="noopener noreferrer"
            >https://github.com/firstcontributions</a
          ></span
        >
        e procure pelo nome do repositório chamado
        <span class="marcatexto"
          ><a
            href="https://github.com/firstcontributions/first-contributions"
            target="_blank"
            rel="noopener noreferrer"
            >first-contributions</a
          ></span
        >
        como o exemplo da imagem abaixo:
      </p>

      <img src="./assets/code01.webp" alt="exemplo página" />

      <p class="py-2">
        Agora que localizou o repositório principal do projeto, para verificar se é o mesmo
        repositório por onde você quer contribuir, verifique as seguintes características que
        marquei:
      </p>

      <p class="py-2">
        1 - Verifique se o projeto tem o nome
        <span class="marcatexto">first-contributions</span> e que tem como o nome do repositório
        <span class="marcatexto">first-contributions</span>: <br />
        <code class="codigo">first-contributions / first-contributions</code>;

        <br />

        2 - O projeto <span class="marcatexto">first-contributions</span> é
        <span class="marcatexto">Public (público)</span>;

        <br />

        3 - No momento da publicação dessa matéria, o projeto possui
        <span class="marcatexto">Sponsor (patrocinador)</span>, cerca de
        <span class="marcatexto">506 visualizadores</span>,
        <span class="marcatexto">68.4 mil forks</span> e cerca de
        <span class="marcatexto">39.2 mil estrelas</span>;

        <br />

        4 - Descrição sobre o projeto juntamente com o link do site.
      </p>

      <img src="./assets/code02.webp" alt="exemplo página" />

      <p class="py-2">
        Desça a página e você verá que abaixo das <span class="marcatexto">pastas</span> aparecerá
        algo escrito como <span class="marcatexto">Readme.md</span>, caso tenha dúvidas quanto a
        isso, em qualquer projeto do <strong>GitHub</strong> você terá que descrever para as pessoas
        o que o seu projeto faz (finalidade e objetivo), então por padrão, existe um arquivo chamado
        <span class="marcatexto">readme.md</span>.
      </p>

      <p class="py-2">
        Se você observar bem na imagem abaixo, verá que o projeto possui uma dezena de bandeirinhas
        (incluindo o do Brasil), essa parte do projeto diz que possui tradução para o idioma em
        específico relacionado a bandeirinha.
      </p>

      <img src="./assets/code03.webp" alt="exemplo página" />

      <p class="py-2">
        Clique no <span class="marcatexto">ícone da bandeira do Brasil</span> e você será
        redirecionado para uma outra página do mesmo formato porém traduzida.
      </p>

      <img src="./assets/code04.webp" alt="exemplo página" />

      <p class="py-2">
        Agora é só você seguir o passo-a-passo que você irá completar para contribuir com o projeto.
      </p>

      <p class="py-2">
        Mas aí você vem e me pergunta:
        <strong
          >"Tá e como vou saber que eu sou contribuinte do código? Quero me 'amostrar' para todo
          mundo indicando de alguma forma que contribuí com o projeto."</strong
        >
      </p>

      <p class="py-2">
        É bem simples saber como você contribuiu em algum projeto, primeiro
        <span class="marcatexto"> vá para a sua página inicial do seu GitHub </span>, aqui é o meu
        perfil de exemplo:
      </p>

      <img src="./assets/code05.webp" alt="exemplo página" />

      <p class="py-2">
        Desça a página e veja onde que fica os registros de atividades marcadas pelo GitHub
        <span class="marcatexto">(quadradinho verde)</span>, essa parte é o seu
        <span class="marcatexto">histórico no GitHub</span>, inclusive você pode pesquisar por ano
        ou clicando no quadrado cinza ou verde para saber o que você fez nesse dia.
      </p>

      <img src="./assets/code06.webp" alt="exemplo página" />

      <p class="py-2">
        Agora na parte onde marquei o
        <span class="marcatexto">quadrado de vermelho (1)</span> significa que ficarão ali todas as
        suas contribuições do ano em específico (no meu caso 2023), já no
        <span class="marcatexto">quadrado verde (2)</span> é onde aparece a sua contribuição com o
        projeto <span class="marcatexto">firstcontributions</span>
      </p>

      <img src="./assets/code07.webp" alt="exemplo página" />

      <p class="py-2">
        Ao clicar no botão <span class="marcatexto">firstcontributions</span> em
        <span class="marcatexto">Activity</span> aparecerá o que você fez no
        <span class="marcatexto"> Contributed to first-contributions (1)</span> e no
        <span class="marcatexto">quadrado verde (2)</span> vai ser marcado o dia que você contribuiu
        com o projeto.
      </p>

      <img src="./assets/code08.webp" alt="exemplo página" />

      <p class="py-2">
        Bem, é isso, espero que você sinta-se a vontade a partir desse primeiro passo para
        contribuir no mundo dos projetos open-sources da comunidade GitHub.
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
