<template>
  <div class="container px-5 py-24 mx-auto flex">
    <form @submit.prevent="submit" class="lg:w-1/3 md:w-2/3 bg-white rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 class="mb-4 text-gray-900 text-lg mb-1 font-medium title-font">パスワードをお忘れですか</h2>
      <div v-if="message" class="mb-3 p-3 bg-green-400 text-white rounded">
        {{ message }}
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email <span class="text-red-500">(必須)</span></label>
        <input type="email" id="email" v-model="form.email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <div v-if="errors.email">
          <p v-for="(error, index) in errors.email" :key="index"  class="text-red-500">{{ error }}</p>
        </div>
      </div>
      <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Email</button>
      <router-link to="/login" class="mt-5 text-gray-600 hover:text-gray-800 hover:underline">ログインページに戻る</router-link>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const form = ref({
  email: ''
})

const errors = ref({});

const message = ref('');

const submit = async() => {
  try {
    await axios.get('sanctum/csrf-cookie')
    await axios.post('/forgot-password', form.value)
    message.value = 'メールを送信しました'
  }catch(e) {
    errors.value = e.response.data.errors
  }
  
} 
</script>
