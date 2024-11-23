<template>
  <div class="container mx-auto sm:pt-6 sm:pb-10">
    <NavBar />
    <NuxtPage />
  </div>
</template>

<script setup>
import NavBar from '@/components/molecules/NavBar.vue'
</script>

<style scoped>
.container {
  @apply p-0 m-0 max-w-full dark:bg-gray-900 dark:text-gray-100;
}
</style>
