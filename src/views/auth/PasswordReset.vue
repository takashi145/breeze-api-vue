<template>
  <default-layout>
    <div class="container px-5 py-24 mx-auto flex">
      <form @submit.prevent="submit" class="lg:w-1/3 md:w-2/3 bg-white rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 class="mb-4 text-gray-900 text-lg mb-1 font-medium title-font">パスワード再設定</h2>
        <div v-if="errors.email">
            <p v-for="(error, index) in errors.email" :key="index"  class="text-red-500">{{ error }}</p>
          </div>
        <div class="relative mb-4">
          <label for="password" class="leading-7 text-sm text-gray-600">New Password <span class="text-red-500">(必須)</span></label>
          <input type="password" id="password" v-model="form.password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          <div v-if="errors.password">
            <p v-for="(error, index) in errors.password" :key="index"  class="text-red-500">{{ error }}</p>
          </div>
        </div>
        <div class="relative mb-8">
          <label for="password_confirmation" class="leading-7 text-sm text-gray-600">Password Confirm <span class="text-red-500">(必須)</span></label>
          <input type="password" id="password_confirmation" v-model="form.password_confirmation" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Password Reset</button>
      </form>
    </div>
  </default-layout>
  
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import { useAuthStore } from '../../store/auth';

const authStore = useAuthStore();

const router = useRouter();
const route = useRoute();

const form = ref({
  token: route.params.token,
  email: route.query.email,
  password: '',
  password_confirmation: ''
})

const errors = ref({});

const submit = async() => {
  try {
    await axios.get('sanctum/csrf-cookie')
    await axios.post('/reset-password', form.value)
    authStore.authMessage = {
      status: "success",
      text: "パスワードを変更しました"
    }
    router.push('/login') 
  }catch(e) {
    errors.value = e.response.data.errors
  }
  
} 
</script>
