<script setup lang="ts">
  import { ref } from "vue";

  // A variável chamada isModalOpened que é um objeto ref do Vue.
  // O valor inicial dessa variável é false, o que significa que o modal está fechado.
  const isModalOpened = ref(false);

  // A função openModal é responsável por abrir o modal,
  // e faz isso atribuindo true à propriedade value do objeto isModalOpened
  const openModal = () => {
    isModalOpened.value = true;
  };

  // a função closeModal é responsável por fechar o modal,
  // e faz isso atribuindo false à propriedade value do objeto isModalOpened
  const closeModal = () => {
    isModalOpened.value = false;
  };
</script>

<template>
  <div>
    <div class="flex justify-center">
      <div @click="openModal" class="cursor-pointer">Sobre</div>

      <div
        v-show="isModalOpened"
        class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 backdrop-blur-sm">
        <div class="mx-4 max-w-2xl rounded-lg bg-white p-6 shadow-xl">
          <div class="flex items-center justify-end">
            <svg
              @click="closeModal"
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="mt-4">
            <p
              class="mb-4 px-4 text-justify indent-10 text-base font-semibold leading-loose">
              Cantinho do blog foi criado utilizando a tecnologia VueJS 3 e
              TypeScript, com o intuito especialmente de catalogar e guardar as
              minhas dúvidas com relação à desenvolvimento de software, outro
              ponto importante é que também serve para demonstrar e compartilhar
              de uma forma intuitiva me estimulando a pensar em formas de trazer
              o conteúdo entendível tanto para pessoas leigas como para
              profissionais sem deixar de lados os termos técnicos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
