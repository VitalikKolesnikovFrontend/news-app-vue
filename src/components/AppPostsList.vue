<script setup lang="ts">
import AppPost from './AppPost.vue'
import { usePostsStore } from '@/pinia/stores/posts'

const postStore = usePostsStore()
</script>

<template>
  <div class="container">
    <li class="list" v-for="post in postStore.posts" :key="post.id"><AppPost v-bind="post" /></li>
  </div>
</template>

<style lang="css">
.list {
  list-style-type: none;
}
.container {
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 30px;
}
</style>
