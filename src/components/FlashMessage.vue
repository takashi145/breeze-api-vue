<script setup>
import { useMessageStore } from "../store/message";
const messageStore = useMessageStore();
</script>
<template>
  <transition
    leave-to-class="opacity-0"
    leave-active-class="transition duration-300"
  >
    <div v-if="messageStore.message">
      <div v-if="messageStore.message.status === 'success'" class="bg-green-400 w-2/3 mx-auto text-center text-white text-lg p-1 rounded m-3">{{ messageStore.message.text }}</div>
      <div v-if="messageStore.message.status === 'alert'" class="bg-red-400 w-2/3 mx-auto text-center text-white text-lg p-1 rounded m-3">{{ messageStore.message.text }}</div>
    </div>
  </transition>
</template>
