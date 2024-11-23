<template>
  <main class="layout layout-articles">
    <div>
      <h1>Articles</h1>
      <p>This is all the articles we've got for now.</p>
      
      <OrganismsArticlesList v-if="articles" :articles="articles" />

      <footer class="mt-12 text-center">
        <p>
          Thanks for reading
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
  title: 'Articles',
  description: 'This is a custom description for Content Wind about page.',
  ogImage: 'https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA'
})
</script>
