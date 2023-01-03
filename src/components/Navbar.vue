<script lang="ts">
import { defineComponent } from 'vue';
import { authStore } from '@/stores/authStore';
import EventCard from './EventCard.vue';

export default defineComponent({
  name: 'Navbar',
  components: {
    EventCard
  },
  setup() {
    const store = authStore();
    return { store };
  },
});
</script>

<template>
  <nav
    class="px-2 sm:px-4 py-2.5  w-full z-20 top-0 left-0">
    <div class="container flex flex-wrap items-center justify-between ">
      <a href="/" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Was geht?</span>
      </a>
      <div class="flex md:order-2">
        <a v-if="!store.isAuthenticated" href="/login">
          <button
            class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 custom-background hover:bg-white hover:text-black dark:focus:ring-blue-800">Login</button>

        </a>
        <button data-collapse-toggle="navbar-sticky" type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
          <template v-if="!store.isAuthenticated">
            <li>
              <router-link class="font-bold menuItem-active-link" :to="{ name: 'start' }">Home</router-link>
            </li>
            <li class="border-l border-r border-gray-600 px-4">
              <router-link class="font-bold menuItem-active-link" :to="{ name: 'services' }">Service Plans</router-link>
            </li>
            <li >
              <router-link class="font-bold menuItem-active-link" :to="{ name: 'contact' }">Contact</router-link>
            </li>
          </template>

        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.menuItem-active-link {
  color: grey;
}

.router-link-exact-active.menuItem-active-link {
  color: white;
}

nav {
}

.custom-background {
  background-color: #004e92;
}
</style>
