<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import router from './router';
import { authStore } from '@/stores/authStore';

</script>

<template>

  <Navbar>
  </Navbar>
  <main class="w-full ">
    <RouterView />
  </main>
</template>

<style scoped>
.background-app {

}
</style>
