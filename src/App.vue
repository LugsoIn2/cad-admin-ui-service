<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import router from './router';
import { authStore } from '@/stores/authStore';

</script>

<template>

  <Navbar>
  </Navbar>
  <main class="w-full h-full background-app">
    <RouterView />
  </main>
</template>

<style scoped>
.background-app {
  background: #0f0c29;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>
