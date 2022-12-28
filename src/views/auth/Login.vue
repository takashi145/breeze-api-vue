<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import { useAuthStore } from '@/store/auth'
import { useMessageStore } from '@/store/message'

const authStore = useAuthStore();
const messageStore = useMessageStore();

const router = useRouter();

const form = ref({
  email: '',
  password: ''
})

const errors = ref({});

const login = async () => {
  try {
    await axios.get('sanctum/csrf-cookie')
    await axios.post('/login', form.value)
    await authStore.getUser()
    messageStore.setMessage('success', 'ログインしました')
    return router.push('/')
  }catch(e) {
    if(e.response.status === 422) {
      errors.value = e.response.data.errors;
    }
  }
} 
</script>

<template>
  <default-layout>
    <div class="container px-5 py-24 mx-auto flex">
      <form @submit.prevent="login" class="lg:w-1/3 md:w-2/3 bg-white rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 class="mb-4 text-gray-900 text-lg mb-1 font-medium title-font">Login</h2>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email <span class="text-red-500">*</span></label>
          <input type="email" id="email" v-model="form.email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <div v-if="errors.email">
            <p v-for="(error, index) in errors.email" :key="index"  class="text-red-500">{{ error }}</p>
          </div>
        </div>
        <div class="relative mb-8">
          <label for="password" class="leading-7 text-sm text-gray-600">Password <span class="text-red-500">*</span></label>
          <input type="password" id="password" v-model="form.password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <div v-if="errors.password">
            <p v-for="(error, index) in errors.password" :key="index"  class="text-red-500">{{ error }}</p>
          </div>
        </div>
        <button type="submit" class="mb-3 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
        <router-link to="/forgot-password" class="my-2 text-gray-600 hover:text-gray-800 hover:underline">パスワードをお忘れですか?</router-link>
        <router-link to="/register" class="text-gray-600 hover:text-gray-800 hover:underline">新規登録はこちら</router-link>
      </form>
    </div>
  </default-layout>
</template>
