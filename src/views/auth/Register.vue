<template>
  <div class="container px-5 py-24 mx-auto flex">
    <form @submit.prevent="register" class="lg:w-1/3 md:w-2/3 bg-white rounded-lg p-12 flex flex-col mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 class="mb-4 text-gray-900 text-lg mb-1 font-medium title-font">Sign up</h2>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Username <span class="text-red-500">(必須)</span></label>
        <input type="text" id="name" placeholder="ユーザー名を入力してください。" v-model="form.name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <ul v-if="errors.name">
          <li v-for="(error, index) in errors.name" :key="index"  class="text-red-500">{{ error }}</li>
        </ul>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email <span class="text-red-500">(必須)</span></label>
        <input type="email" id="email" placeholder="メールアドレスを入力してください。" v-model="form.email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <ul v-if="errors.email">
          <li v-for="(error, index) in errors.email" :key="index"  class="text-red-500">{{ error }}</li>
        </ul>
      </div>
      <div class="relative mb-8">
        <label for="password" class="leading-7 text-sm text-gray-600">Password <span class="text-red-500">(必須)</span></label>
        <input type="password" id="password" placeholder="パスワードを入力してください。" v-model="form.password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <ul v-if="errors.password">
          <li v-for="(error, index) in errors.password" :key="index"  class="text-red-500">{{ error }}</li>
        </ul>
      </div>
      <div class="relative mb-8">
        <label for="password_confirmation" class="leading-7 text-sm text-gray-600">Password Confirm <span class="text-red-500">(必須)</span></label>
        <input type="password" id="password_confirmation" placeholder="確認用パスワードを入力してください。" v-model="form.password_confirmation" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign up</button>
      <router-link to="/login" class="mt-5 text-gray-600 hover:text-gray-800 hover:underline">アカウントをすでにお持ちですか?ログイン</router-link>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const errors = ref({})

const register = async() => {
  try {
    await axios.get('sanctum/csrf-cookie')
    await axios.post('/register', form.value)
    .then(() => {
      router.push('/')
    })
  }catch(e) {
    errors.value = e.response.data.errors
    console.log(errors.value)
  }
 
} 
</script>
