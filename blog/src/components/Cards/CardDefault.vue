<script setup lang="ts">
// A função defineProps do Vue para definir as propriedades de um componente.
// Essas propriedades são usadas para passar dados do componente pai para o componente filho.
defineProps({
  title: {
    type: String,
    require: true,
    default: ''
  },
  icon: {
    type: String,
    require: true,
    default: ''
  },
  datePost: {
    type: String,
    require: true,
    default: ''
  }
})
</script>

<template>
  <div class="max-w-3xl mb-1">
    <div
      class="max-w-fit px-2.5 py-2 relative -mb-1 -z-10 text-slate-500 text-xs font-medium rounded-t-lg border border-card"
    >
      {{ datePost }}
    </div>
    <div
      class="w-full h-20 flex justify-normal items-stretch rounded-lg border border-card shadow-md"
    >
      <div class="w-20 px-2 flex justify-center items-center text-black bg-slate-100 rounded-l-lg">
        <v-icon :name="icon" scale="3.5" animation="float" hover />
      </div>
      <div class="flex items-center pl-3 text-xl font-['Roboto'] font-medium bg-white">
        {{ title }}
      </div>
    </div>
  </div>
</template>
