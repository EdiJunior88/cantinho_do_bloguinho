<script setup lang="ts">
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
      <div class="w-20 flex justify-center items-center bg-slate-100 rounded-l-lg">
        <v-icon :name="icon" scale="4" />
      </div>
      <div class="flex items-center pl-3 text-xl font-['Roboto'] font-medium bg-white">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
