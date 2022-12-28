import { defineStore } from 'pinia'
import axios from 'axios';

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
  }),
  getters: {
    user: (state) => state.authUser,
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