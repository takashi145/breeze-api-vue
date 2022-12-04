<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import Header from '../Header.vue'
export default {
  components: { Header },
}
</script>

<style>

</style>