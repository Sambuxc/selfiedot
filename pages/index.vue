<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Selfie dot',
  description: 'Content you can read in less than 3-minutes.'
})
</script>

<template>
  <main class="prose dark:prose-invert max-w-none">
    <div class="container mx-auto px-4 py-8">
      <h1>Selfie dot</h1>
      
      <p class="text-lg">Content you can read in less than 3-minutes.</p>
      
      <section>
        <h2>Features</h2>
        <ul>
          <li>Cool shit</li>
          <li>Write pages in Markdown</li>
          <li>Use layouts in Markdown pages</li>
          <li>Enjoy meta tag generation</li>
          <li>Generated navigation from pages</li>
          <li>Leverage TailwindCSS Typography</li>
          <li>Switch between light & dark mode</li>
          <li>Access 100,000 icons from 100+ icon sets</li>
          <li>Highlight code blocks with Shiki</li>
          <li>Create Vue components and use them in Markdown</li>
          <li>Deploy on any Node or Static hosting: GH Pages, Vercel, Netlify, Heroku, etc.</li>
          <li>Live edit on Nuxt Studio</li>
        </ul>
      </section>

      <section>
        <h2>Setup</h2>
        <OrganismsButtonLink 
          external 
          href="https://stackblitz.com/github/Atinux/content-wind/tree/main/.demo?file=content%2F1.index.md"
          icon="simple-icons:stackblitz"
        >
          Play online on Stackblitz
        </OrganismsButtonLink>

        <div class="mt-4">
          <p>Open a terminal and run the following command:</p>
          <OrganismsMarkdownBlock>
```bash
npx nuxi init -t themes/content-wind my-website
```
          </OrganismsMarkdownBlock>
          <p>Follow the instructions in the terminal and you are ready to go 🚀</p>
        </div>
      </section>

      <section>
        <h2>Usage</h2>
        <p>This template has some built-in features to make it as easy as possible to create a content-driven website.</p>
        
        <h3>Pages</h3>
        <p>Create your Markdown pages in the content/ directory:</p>
        <OrganismsMarkdownBlock>
```md [content/index.md]
# My title

This first paragraph will be treated as the page meta description.
```
        </OrganismsMarkdownBlock>

        <p>You can overwrite meta tags by using front-matter:</p>
        <OrganismsMarkdownBlock>
```md [content/index.md]
---
title: 'Custom title'
description: 'Custom meta description'
image: 'Custom image injected as `og:image`'
---

# My title

This first paragraph will be treated as the page meta description.
```
        </OrganismsMarkdownBlock>
      </section>

      <section>
        <h2>Navigation</h2>
        <p>The navigation is generated from your pages. It uses the Navigation from Nuxt Content to fetch the navigation object.</p>
        <p>To customize the title displayed in the navigation, you can set the navigation.title property in the front-matter of your pages:</p>
        <OrganismsMarkdownBlock>
```md
---
navigation.title: 'Home'
---

# Welcome to my site

With a beautiful description
```
        </OrganismsMarkdownBlock>
      </section>

      <section>
        <h2>Deployment</h2>
        <div class="flex space-x-4">
          <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAtinux%2Fcontent-wind-template" 
             class="inline-flex items-center">
            <img src="https://vercel.com/button" alt="Deploy with Vercel" />
          </a>
          <a href="https://app.netlify.com/start/deploy?repository=https://github.com/Atinux/content-wind-template"
             class="inline-flex items-center">
            <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />
          </a>
        </div>
      </section>

      <footer class="mt-12 text-center">
        <p>
          Thanks for reading and happy writing,
          <a href="https://twitter.com/Atinux">Atinux</a>
          <Icon name="ph:star-duotone" class="inline-block ml-1" />
        </p>
      </footer>
    </div>
  </main>
</template>
