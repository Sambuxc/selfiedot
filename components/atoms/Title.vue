<template>
  <NuxtLink
    class="mb-1 text-lg font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
    :to="to"
  >
    {{ title }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  }
})
</script>
