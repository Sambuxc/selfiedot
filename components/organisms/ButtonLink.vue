<template>
  <NuxtLink :to="href" :external="external"
    class="inline-flex items-center text-white no-underline rounded border cursor-pointer button-link active:transform active:translate-y-0.5 active:translate-x-0.5"
    :class="buttonType"
  >
    <span class="flex items-center px-2 py-1">
      <Icon v-if="icon" :name="icon" class="w-4 h-4" />
    </span>
    <span class="px-2 py-1 h-full text-sm border-l border-l-gray-400 dark:border-l-gray-700">
      <slot />
    </span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  external: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  buttonType: {
    type: String,
    default: 'primary',
  },
  supportDarkMode: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped>
a.primary {
  @apply bg-gray-800 border-gray-400;
  @apply dark:border-gray-700 dark:bg-gray-200 dark:text-gray-950;
  @apply active:bg-gray-700 dark:active:bg-gray-300;
}

a.blue {
  @apply bg-[#2E51ED] border-blue-400;
  @apply dark:border-blue-700 dark:bg-blue-200 dark:text-blue-950;
  @apply active:bg-[#3A62EE] dark:active:bg-blue-300;
}

a.purple {
  @apply bg-purple-800 border-purple-400;
  @apply dark:border-purple-700 dark:bg-purple-200 dark:text-purple-950;
  @apply active:bg-purple-700 dark:active:bg-purple-300;
}
</style>
