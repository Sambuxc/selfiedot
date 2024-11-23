<!-- This component is used to show Markdown code block examples -->
<template>
  <pre class="overflow-x-auto max-w-full text-gray-700 dark:text-gray-300">
    <slot :use="$slots.default" unwrap="p" />
  </pre>
</template>

<script setup>
import { useSlots } from 'vue'

const slots = useSlots()

console.log(slots)
</script>
