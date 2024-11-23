<template>
  <nav class="flex justify-between px-4 py-4 mx-auto max-w-2xl sm:px-8">
    <ul class="flex space-x-4 text-gray-700 dark:text-gray-200">
      <li v-for="link in links" :key="link.name">
        <NuxtLink
          :to="link.path"
          active-class="font-bold"
          class="mr-6 hover:text-blue-600 hover:transition-all hover:duration-300">
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>

    <!-- Social icons -->
    <ul class="flex space-x-3 text-gray-500 transition socials">
      <li
        v-if="appConfig.socials?.twitter"
        title="Twitter">
        <a :href="`https://twitter.com/${appConfig.socials?.twitter}`" target="_blank">
          <Icon name="fa-brands:twitter" class="w-5 h-5" />
        </a>
      </li>
      <li
        v-if="appConfig.socials?.github"
        title="GitHub">
        <a :href="`https://github.com/${appConfig.socials?.github}`" target="_blank">
          <Icon name="fa-brands:github" class="w-5 h-5" />
        </a>
      </li>
      <li
        v-if="appConfig.socials?.youtube"
        title="YouTube">
        <a :href="`https://youtube.com/${appConfig.socials?.youtube}`" target="_blank">
          <Icon name="fa-brands:youtube" class="w-5 h-5" /> 
        </a>
      </li>
      <ColorModeSwitch class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" />
    </ul>
  </nav>
</template>

<script setup>
import ColorModeSwitch from './ColorModeSwitch.vue'
const appConfig = useAppConfig()

const links = [
  { name: 'Home', path: '/' },
  { name: 'Articles', path: '/articles' },
];
</script>

<style scoped>
/**
 * TODO
 * if the navbar is on the layout-article page, the styles should be different.
 * the navbar should match the layout-article.
 */
nav li a {
  @apply dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer;
}
</style>