<script lang="ts">
import { defineComponent } from 'vue';
import { authStore } from '@/stores/authStore';

export default defineComponent({
  name: 'SideBar',
  components: {
  },
  setup() {
    const store = authStore();
    return { store };
  },
  methods: {
   logout() {
      this.store.logout();
   }
  }
});
</script>

<template>
  
<aside class="w-64 ml-4" aria-label="Sidebar">
   <div class="overflow-y-auto py-4 px-3 bg-white rounded bg-gray-200 h-full">
      <ul class="space-y-2">
         <li>
            <a href="/dashboard" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-white ">
               <svg aria-hidden="true" class="w-6 h-6 text-gray-900 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="ml-3 text-gray-900">Dashboard</span>

            </a>
         </li>
         <li>
            <a href="/subscription" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-white">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-900 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap text-gray-900">Subscription</span>
            </a>
         </li>
         <li>
            <a href="/themes" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-white">
               <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap text-gray-900">Themes</span>
               <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </a>
         </li>
         <li>
            <a @click="logout" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-white hover:cursor-pointer">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-900 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap text-gray-900">Logout</span>
            </a>
         </li>
      </ul>
   </div>
   
 
</aside>

</template>

<style scoped>

</style>
