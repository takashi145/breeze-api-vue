<template>
  <div>
    <header class="text-gray-600 body-font shadow">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="text-xl">Logo</span>
        </a>
      </div>
    </header>
    <main class="h-screen">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '../Footer.vue';
export default {
  components: {
    Footer,
  }
}
</script>
