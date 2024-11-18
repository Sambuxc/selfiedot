<script setup lang="ts">
interface Article {
  id: number
  slug: string
  title: string
  description: string
  content: string
  citations: string[]
}

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Articles',
  description: 'This is a custom description for Content Wind about page.',
  ogImage: 'https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA'
})

// fetch articles from public/articles.json with proper typing
const { data: articles } = await useFetch<Article[]>('/articles.json', {
  transform: (data) => data as Article[]
})
</script>

<template>
  <main class="prose dark:prose-invert max-w-none min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <h1>Articles</h1>
      <p>This is all the articles we've got for now.</p>
      <OrganismsArticlesList v-if="articles" :articles="articles" />
    </div>
  </main>
</template>
