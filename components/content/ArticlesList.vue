<template>
  <div>
    <article v-for="article in articles" :key="article.title">
      <h2>
        <NuxtLink
          class="mb-1 text-lg font-semibold"
          :to="`/articles/${encodeURIComponent(article.slug)}`">
          {{ article.title }}
        </NuxtLink>
      </h2>
      <p class="leading-tight">{{ article.description }}</p>
    </article>
  </div>
</template>

<script setup>
import { useAsyncData } from 'nuxt/app';

const { data: articles } = useAsyncData('articles', () =>
  fetch('./articles.json').then(res => res.json())
);
</script>

<style scoped>
article {
  @apply border-b border-gray-200 pb-4;
}

article:last-of-type {
  @apply border-b-0 pb-0;
}
</style>
