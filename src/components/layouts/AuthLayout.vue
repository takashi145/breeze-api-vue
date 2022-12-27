<template>
  <div>
    <Header />
    <main>
      <FlashMessage />
      <slot />
    </main>
  </div>
</template>

<script setup>
import Header from '../Header.vue'
import FlashMessage from '../FlashMessage.vue';
</script>

<style>

</style>