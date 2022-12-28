import { defineStore } from 'pinia'

export const useMessageStore = defineStore("message", {
  state: () => ({
    flashMessage: null,
  }),
  getters: {
    message: (state) => state.flashMessage
  },
  actions: {
    setMessage(status, text) {
      this.flashMessage = {
        status: status,
        text: text
      };
      setTimeout(() => {
        this.flashMessage = null;
      }, 5000)
    }
  }
})
