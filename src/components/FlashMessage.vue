<script setup>
import { computed } from "vue";
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore();

const message = computed(() => authStore.authMessage)

setTimeout(() => {
  authStore.authMessage = null
}, 5000)
</script>
<template>
  <transition
    leave-to-class="opacity-0"
    leave-active-class="transition duration-300"
  >
    <div v-if="message">
      <div v-if="message.status === 'success'" class="bg-green-400 w-2/3 mx-auto text-center text-white text-lg p-1 rounded m-3">{{ message.text }}</div>
      <div v-else class="bg-red-400 w-2/3 mx-auto text-center text-white text-lg p-1 rounded m-3">{{ message.text }}</div>
    </div>
  </transition>
</template>
