<template>
  <div>
    <div>
      <button @click="logout">Logout</button>
    </div>
    <div v-if="user">
      <h1>{{ user.name }}</h1>
      <p>{{ user.email }}</p>
    </div>  
  </div>
  
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from 'axios';
import router from "@/router";

const user = ref(null)

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

const logout = async () => {
  await axios.post('logout')
  router.push('/login')
}
</script>
