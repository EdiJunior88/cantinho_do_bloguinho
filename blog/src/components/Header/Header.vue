<script setup lang="ts">
defineProps(["title", "home", "about"]);
</script>

<template>
  <div
    class="mx-auto flex h-20 max-w-screen-md items-center justify-between bg-[#a0db44] px-8"
  >
    <div class="flex items-center justify-center gap-3">
      <slot />
      <h1 class="font-header text-2xl">{{ title }}</h1>
    </div>

    <div class="font-roboto flex gap-7 text-lg font-bold">
      <a href="/" target="_self"
        ><span>{{ home }}</span></a
      >
      <span>{{ about }}</span>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.font-header {
  font-family: "Bungee Spice", sans-serif;
  background: #00870e;
  background: linear-gradient(to top, #00870e 0%, #0a0094 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.font-roboto {
  font-family: "Roboto", sans-serif;
}
</style>
