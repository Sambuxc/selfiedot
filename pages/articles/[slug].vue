<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>
    <p v-html="article.content"></p>
    <div v-if="article.citations && article.citations.length">
      <h3>Citations</h3>
      <ul>
        <li v-for="citation in article.citations" :key="citation">
          <a :href="citation" target="_blank">{{ citation }}</a>
        </li>
      </ul>
    </div>
  </div>
  <div v-else>
    <p>Article not found.</p>
  </div>
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