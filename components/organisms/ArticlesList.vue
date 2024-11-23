<template>
  <div class="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
    <article v-for="article in articles" :key="article.id"
      class="p-6 bg-white rounded-lg border transition-shadow dark:border-gray-700 hover:shadow-lg dark:bg-gray-800">
      <NuxtLink :to="`/articles/${article.slug}`" class="no-underline">
        <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">{{ article.title }}</h2>
        <p class="text-gray-600 dark:text-gray-300">{{ article.description }}</p>
      </NuxtLink>
    </article>
  </div>
</template>

<script setup lang="ts">
interface Article {
  id: number
  slug: string
  title: string
  description: string
  content: string
  citations: string[]
}

defineProps<{
  articles: Article[]
}>()
</script>
