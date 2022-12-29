<template>
  <auth-layout>
    <div v-if="authStore.user" class="ml-3">
      <h1>ユーザ名: {{ authStore.user.name }}</h1>
      <p>メールアドレス: {{ authStore.user.email }}</p>
    </div>  
    <router-link to="/about">about</router-link>
  </auth-layout>
</template>

<script setup>
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import { useAuthStore } from '../store/auth';

const authStore = useAuthStore();
</script>
