<template>
  <div class="bg-gray-900 text-white min-h-screen p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-6">Articles</h1>
      <p class="mb-12">This is all the articles we've got for now.</p>
      <article v-for="article in articles" :key="article.title" class="mb-8">
        <img :src="article.image" alt="" class="w-full h-64 object-cover rounded-lg mb-4">
        <h2 class="text-xl font-semibold mb-2">
          <NuxtLink 
            class="mb-1 text-lg font-semibold"
            :to="`/articles/${encodeURIComponent(article.slug)}`">
            {{ article.title }}
          </NuxtLink>
        </h2>
        <p class="leading-tight">{{ article.description }}</p>
      </article>
    </div>
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

a {
  @apply text-blue-400 hover:text-blue-300;
}
</style>
