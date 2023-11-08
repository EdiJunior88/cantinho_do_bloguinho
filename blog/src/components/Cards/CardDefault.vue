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
  }
})
</script>

<template>
  <div class="w-full">
    <div
      class="w-full h-20 flex justify-normal items-stretch rounded-lg border border-red-700 shadow-lg"
    >
      <div class="w-20 flex justify-center items-center bg-slate-100 rounded-l-lg">
        <v-icon :name="icon" scale="4" />
      </div>
      <div class="flex items-center pl-3 text-xl font-['Roboto'] font-medium">{{ title }}</div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
