<script setup lang="ts">
import "@/css/style.css";

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
  <div class="fontTitle mb-1 w-[740px]">
    <div
      class="border-card relative -z-10 -mb-1 w-24 rounded-t-lg border bg-white px-2.5 py-2 text-center text-xs font-semibold tracking-wider text-slate-500"
    >
      {{ datePost }}
    </div>

    <div
      class="border-card flex h-20 items-stretch justify-normal rounded-lg border shadow-md"
    >
      <div
        class="flex w-[105px] items-center justify-center rounded-l-lg bg-blue-200 p-4 text-black"
      >
        <slot />
      </div>

      <div
        class="flex w-full items-center hyphens-auto break-words rounded-r-lg bg-white p-3 text-xl font-medium"
      >
        {{ title }}
      </div>
    </div>
  </div>
</template>
