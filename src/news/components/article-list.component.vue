<script>
export default {
  name: "article-list",
  props: {
    articles: { type: Array, required: true },
  }
}
</script>

<template>
  <div v-for="article in articles" :key="articles.title">
    <article-item :article="article"/>
  </div>
</template>

<style scoped>

</style>