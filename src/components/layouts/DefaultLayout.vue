<template>
  <div>
    <header class="text-gray-600 body-font shadow">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <AppLogo />
      </div>
    </header>
    <main class="h-screen">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '../Footer.vue';
import AppLogo from '../AppLogo.vue';

</script>
