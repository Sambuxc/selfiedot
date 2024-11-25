<template>
  <div class="container">
    <NavBar />
    <NuxtPage />
  </div>
</template>

<script setup>
import NavBar from '@/components/molecules/NavBar.vue'

useHead({
  htmlAttrs: {
    lang: 'en'
  },
})
</script>

<style scoped>
.container {
  @apply mx-auto pb-2 sm:pt-6 md:pb-10 max-w-full min-h-screen dark:bg-gray-900 dark:text-gray-100;
}
</style>
