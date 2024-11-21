import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    modal: false,
  }),
  actions: {
    openModal() {
      this.modal = true
    },
  },
})
