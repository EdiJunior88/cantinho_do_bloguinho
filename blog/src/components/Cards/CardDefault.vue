<script setup lang="ts">
// A função defineProps do Vue para definir as propriedades de um componente.
// Essas propriedades são usadas para passar dados do componente pai para o componente filho.
defineProps({
  title: {
    type: String,
    require: true,
    default: "",
  },
  icon: {
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
      class="border-card relative -z-10 -mb-1 w-[85px] rounded-t-lg border px-2.5 py-2 text-center text-xs font-medium text-slate-500"
    >
      {{ datePost }}
    </div>
    <div
      class="border-card flex h-20 w-full items-stretch justify-normal rounded-lg border shadow-md"
    >
      <div
        class="flex w-[85px] items-center justify-center rounded-l-lg bg-slate-100 px-2 text-black"
      >
        <v-icon :name="icon" scale="3.5" animation="float" hover />
      </div>
      <div
        class="font-roboto flex items-center hyphens-auto break-words bg-white p-3 text-lg font-medium"
      >
        {{ title }}
      </div>
    </div>
  </div>
</template>
