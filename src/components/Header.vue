<template>
  <header class="text-gray-600 body-font shadow">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <AppLogo />
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <router-link to="/" class="mr-5 hover:text-gray-900">Home</router-link>
      </nav>
      <button @click="dropdown = !dropdown" class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
      <div v-if="!dropdown" class="fixed top-16 mr-4 p-3 right-0 z-10 w-48 bg-white shadow-lg border rounded">
        <ul class="text-center">
          <li class="border-b pb-3 mb-3 text-sm">
            ユーザ:<span class="ml-3 text-black text-lg">{{ authStore.user.name }}</span><br>
          </li>
          <li class=""><button @click="logout" class="text-gray-500 hover:text-gray-800 hover:underline">ログアウト</button></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router';
import AppLogo from './AppLogo.vue';
import { useAuthStore } from '@/store/auth'
import { useMessageStore } from '@/store/message';
import { ref } from 'vue';

const authStore = useAuthStore();

const messageStore = useMessageStore();

const router = useRouter();

const dropdown = ref(false);

const logout = async () => {
  try {
    await axios.get('sanctum/csrf-cookie')
    await axios.post('/logout');
    authStore.authUser = null;
    messageStore.setMessage('alert', 'ログアウトしました')
    router.push('/login');
  }catch(e) {
    console.log(e.response.data.message)
  }
  
}
</script>
