<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({ id: Number, userName: String, age: Number, description: String })
</script>

<template>
  <el-card style="max-width: 400px">
    <template #header>
      <div class="card-header">
        <span>{{ userName }}</span>
      </div>
    </template>
    <img
      style="height: 300px; width: 360px"
      src="https://kuda-spb.ru/uploads/ebb5af2d6f1fcf6c71426d1ad0befdc4.jpg"
    />
    <template #footer>{{ description }}</template>
  </el-card>
</template>

<style lang="css"></style>
