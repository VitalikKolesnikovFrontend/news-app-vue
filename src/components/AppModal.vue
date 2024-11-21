<script setup lang="ts">
import { useModalStore } from '@/pinia/stores/modal'

const modalStore = useModalStore()

console.log(modalStore.$state.modal)

const closeModal = () => {
  modalStore.$state.modal = false
}
</script>

<template>
  <div v-if="modalStore.$state.modal" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h2>Модальное окно</h2>
      <p>Содержимое модального окна.</p>
      <el-button @click="closeModal">Закрыть</el-button>
    </div>
  </div>
</template>

<style lang="css">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Затемнение */
  display: flex;
  align-items: center; /* Вертикальное выравнивание */
  justify-content: center; /* Горизонтальное выравнивание */
  z-index: 1000; /* Высокий приоритет */
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1001;
}
</style>
