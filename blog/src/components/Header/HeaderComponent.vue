<script setup lang="ts">
import Modal from "@/components/Modal/ModalDefault.vue";
</script>

<template>
  <div class="bg-header">
    <div
      class="mx-auto flex h-20 max-w-screen-md items-center justify-between px-8"
    >
      <div>
        <RouterLink class="header-title text-2xl" to="/">
          <v-icon name="fc-collaboration" scale="2" class="mr-3" />
          Cantinho do Bloguinho</RouterLink
        >
      </div>

      <div class="flex gap-7 text-lg font-bold">
        <RouterLink to="/">Home</RouterLink>
        <Modal />
      </div>
    </div>
  </div>
</template>
