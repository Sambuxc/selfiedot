<template>
  <main class="layout layout-main">
    <div>
      <h1>Selfie dot</h1>
      
      <p class="text-lg">You found a special features page. This contains UI elements that are used in the project.</p>
      
      <section>
        <h2>Features</h2>
        <p>This project is built with Nuxt 3, Nuxt Content, Nuxt UI and TailwindCSS.<br/>Some of the features are:</p>
        <ul class="list-disc list-inside">
          <li>Write pages in Markdown</li>
          <li>Use layouts in Markdown pages</li>
          <li>Enjoy meta tag generation</li>
          <li>Generated navigation from pages</li>
          <li>Leverage TailwindCSS Typography</li>
          <li>Switch between light &amp; dark mode</li>
          <li>Access 100,000 icons from 100+ icon sets</li>
          <li>Highlight code blocks with Shiki</li>
          <li>Create Vue components and use them in Markdown</li>
          <li>Deploy on any Node or Static hosting: GH Pages, Vercel, Netlify, Heroku, etc.</li>
          <li>Live edit on Nuxt Studio</li>
        </ul>
      </section>

      <section>
        <h2>Cool Buttons</h2>
        <p>
          You can use the button link component to create a button with an icon.
        </p>
        <p>
          <OrganismsButtonLink 
            external 
            href=""
            icon="carbon:flash"
          >
            Thunder !
          </OrganismsButtonLink>
          
          <OrganismsButtonLink 
            external 
            href=""
            icon="carbon:rocket"
            button-type="purple"
          >
            Rockets baby
          </OrganismsButtonLink>

          <OrganismsButtonLink 
            external 
            href=""
            icon="carbon:palm-tree"
            button-type="blue"
          >
            Palms up
          </OrganismsButtonLink>

          <OrganismsButtonLink 
            external 
            href=""
            icon="carbon:bat"
          >
            Batman
          </OrganismsButtonLink>
        </p>
      </section>

      <section>
        <h2>Content</h2>
        <p>Interesting styling for content.</p>
        
        <h3>Markdown</h3>
        <div> <!-- TODO: content within a div like this should adhere to tighter spacing between child elements -->
          <p>Open a terminal and run the following command:</p>
          <OrganismsMarkdownBlock>bash npx nuxi init -t themes/content-wind my-website</OrganismsMarkdownBlock>
          <p>Follow the instructions in the terminal and you are ready to go 🚀</p>
        </div>
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
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Selfie dot',
  description: 'Content you can read in less than 3-minutes.'
})
</script>