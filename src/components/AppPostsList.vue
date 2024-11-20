<script setup lang="ts">
import { posts } from '@/posts'
import { ref } from 'vue'
import AppPost from './AppPost.vue'

const items = ref(posts)
</script>

<template>
  <div class="container">
    <li class="list" v-for="item in items" :key="item.id"><AppPost v-bind="item" /></li>
  </div>
</template>

<style lang="css">
.list {
  list-style-type: none;
}
.container {
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  margin-top: 30px;
}
</style>
