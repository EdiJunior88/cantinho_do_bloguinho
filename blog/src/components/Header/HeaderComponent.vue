<script setup lang="ts">
import Modal from "@/components/Modal/ModalDefault.vue"
</script>

<template>
  <div class="bg-header">
    <div class="mx-auto max-w-screen-md h-20 flex justify-between items-center px-8 mb-10">
      <div>
        <RouterLink class="text-2xl header-title" to="/">
        <v-icon name="fc-collaboration" scale="2" class="mr-3" />
        Cantinho do Bloguinho</RouterLink>
      </div>

      <div class="flex gap-7 font-bold text-lg" >
        <RouterLink to="/">Home</RouterLink>
        <Modal />
      </div>

    </div>
  </div>
</template>

<style lang="css" scoped></style>
