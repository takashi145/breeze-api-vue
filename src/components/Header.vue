<template>
  <header class="text-gray-600 body-font shadow">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span class="text-xl">Logo</span>
      </a>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-900">First Link</a>
        <a class="mr-5 hover:text-gray-900">Second Link</a>
        <a class="mr-5 hover:text-gray-900">Third Link</a>
        <a class="mr-5 hover:text-gray-900">Fourth Link</a>
      </nav>
      <button @click="logout" class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
        ログアウト
      </button>
    </div>
  </header>
</template>

<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter()

const logout = async () => {
  await axios.get('/sanctum/csrf-cookie')
  await axios.post('logout')
  router.push('/login')
}
</script>
