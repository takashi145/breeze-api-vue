import { defineStore } from 'pinia'
import axios from 'axios';

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    afterLoginPath: "/",
    isGuest: false,
  }),
  getters: {
    user: (state) => state.authUser,
    path: (state) => state.afterLoginPath,
    guest: (state) => state.isGuest,
  },
  actions: {
    async getUser() {
      try {
        const res = await axios.get('/api/user');
        this.authUser = res.data;
      }catch(e) {
        console.log(e.response.data.message)
      }
    }
  }
})