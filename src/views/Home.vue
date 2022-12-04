<template>
  <auth-layout>
    <div v-if="user" class="ml-3">
      <h1>ユーザ名: {{ user.name }}</h1>
      <p>メールアドレス: {{ user.email }}</p>
    </div>  
  </auth-layout>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from 'axios';
import AuthLayout from '@/components/layouts/AuthLayout.vue';

const user = ref({})

onMounted(() => {
  getUser()
})

const getUser = async () => {
  try {
    await axios.get('/api/user')
    .then((res) => {
      console.log(res.data)
      user.value = res.data
    })
  }catch(e) {
    console.log(e)
  }
}
</script>
