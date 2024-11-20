<template>
  <nav class="bg-gray-800 text-white p-4">
    <ul class="flex space-x-4">
      <li v-for="link in links" :key="link.name">
        <NuxtLink :to="link.path" class="hover:text-blue-300">
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'Home', path: '/' },
        { name: 'Articles', path: '/articles' },
        // Add other links as needed
      ]
    };
  }
}
</script>

<style scoped>
nav {
  @apply bg-gray-900;
}
a {
  @apply text-white hover:text-blue-400;
}
</style>