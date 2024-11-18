<template>
  <article class="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
    <ArticleTitle :title="article.title" :to="`/articles/${article._path}`" />
    <p class="leading-tight text-gray-600 dark:text-gray-300">
      {{ article.description }}
    </p>
  </article>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>
