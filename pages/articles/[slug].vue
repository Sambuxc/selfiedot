<template>
  <main class="layout layout-article">
    <div v-if="article">
      <article>
        <h1>{{ article.title }}</h1>
        <p v-html="article.content" class="max-w-none prose dark:prose-invert dark:text-white"></p>
        <div v-if="article.citations?.length" class="mt-8">
          <h3>Citations</h3>
          <ul class="list-disc list-inside">
            <li v-for="citation in article.citations" :key="citation">
              <a :href="citation" target="_blank" rel="noopener noreferrer" class="pb-1 text-blue-500 border border-t-0 border-r-0 border-l-0 border-blue-500 border-b-1 hover:border-0">
                [ {{ citation }} ]
              </a>
            </li>
          </ul>
        </div>
      </article>
    </div>
    <p v-else>Article not found.</p>
  </main>
</template>

<script setup>
import { useRoute, useAsyncData } from 'nuxt/app';

const route = useRoute();
const { data: article, error } = await useAsyncData(`article-${route.params.slug}`, () => {
  return fetch(`/articles.json`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to fetch articles');
      }
      return res.json();
    })
    .then(articles => articles.find(a => a.slug === decodeURIComponent(route.params.slug)))
    .catch(err => {
      console.error('Error fetching or processing articles:', err);
      return null; // Ensure `article` is set to null on error
    });
});
</script>
