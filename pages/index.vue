<template>
  <main class="layout layout-main">
    <div>
      <h1>Selfie dot</h1>
      
      <p class="text-lg">Content you can read in less than 3-minutes.</p>
      
      <section>
        <h2>Articles</h2>
        <OrganismsArticlesList v-if="articles" :articles="articles" />
      </section>

      <footer class="mt-12 text-center">
        <p>
          Thanks for visiting
        </p>
      </footer>
    </div>
  </main>
</template>

<script setup lang="ts">
import { fetchArticles } from '~/utils/fetchArticles';

const articles = await fetchArticles();

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Selfie dot',
  description: 'Content you can read in less than 3-minutes.'
})
</script>