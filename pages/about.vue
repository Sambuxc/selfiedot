<template>
  <ContentRenderer v-if="about" :value="about" />
  <div v-else>Home not found</div>
</template>