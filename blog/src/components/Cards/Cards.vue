<script setup lang="ts">
  // A função defineProps do Vue para definir as propriedades de um componente.
  // Essas propriedades são usadas para passar dados do componente pai para o componente filho.
  defineProps({
    title: {
      type: String,
      require: true,
      default: "",
    },
    datePost: {
      type: String,
      require: true,
      default: "",
    },
  });
</script>

<template>
  <div class="mb-1 max-w-3xl">
    <div
      class="border-card relative -z-10 -mb-1 w-20 rounded-t-lg border bg-white px-2.5 py-2 text-center text-xs font-medium text-slate-500">
      {{ datePost }}
    </div>

    <div
      class="border-card flex h-20 items-stretch justify-normal rounded-lg border shadow-md">
      <div
        class="flex w-[87px] items-center justify-center rounded-l-lg bg-blue-200 px-2 text-black">
        <slot />
      </div>

      <div
        class="font-title flex w-full items-center hyphens-auto break-words rounded-r-lg bg-white p-3 text-xl font-medium">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300&family=Titillium+Web:wght@300&display=swap");

  .font-title {
    font-family: "Titillium Web", sans-serif;
  }
</style>
