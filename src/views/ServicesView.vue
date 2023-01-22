

<template>
  <section>
    <div class="container px-6 py-8 mx-auto">
      <div class="sm:flex sm:items-center justify-center">
        <div>
          <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Simple, transparent pricing</h2>
        </div>
      </div>

      <div class="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <div
          class="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 flex flex-col justify-between">
          <div>
            <p class="text-lg font-medium text-gray-800 dark:text-gray-100">Free</p>
            <h4 class="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">$0 <span
                class="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span></h4>
            <p class="mt-4 text-gray-500 dark:text-gray-300"> Stay up to date with the latest happenings with our free version. Start to explore "Was geht".</p>

            <div class="mt-8 space-y-8">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>

                <span class="mx-4 text-gray-700 dark:text-gray-300">Automated scraping from google events. Runs every day.</span>
              </div>
            </div>
            
          </div>
          <a href="/register">
            <button
              class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Choose plan
            </button>
          </a>
        </div>
        <div
          class="px-6 py-4 transition-colors duration-200 transform rounded-lg bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 flex flex-col justify-between">
          <div>
            <p class="text-lg font-medium text-gray-800 dark:text-gray-100">Standard (most popular)</p>
            <h4 class="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">$9 <span
                class="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span></h4>
            <p class="mt-4 text-gray-500 dark:text-gray-300">Upgrade to standard and gain access to our custom scrapers to fetch events from your desired websites.</p>

            <div class="mt-8 space-y-8">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>

                <span class="mx-4 text-gray-700 dark:text-gray-300">Automated scraping from google events. Runs every hour.</span>
              </div>
            </div>
            <div class="mt-8 space-y-8">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>

                <span class="mx-4 text-gray-700 dark:text-gray-300">1 Custom Scraper included.</span>
              </div>
            </div>
            
          </div>
          <a href="/register">

            <button
              class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Choose plan
            </button>
          </a>
        </div>
        <div
          class="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 flex flex-col justify-between">
          <div>
            <p class="text-lg font-medium text-gray-800 dark:text-gray-100">Enterprise</p>
            <h4 class="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">$49 <span
                class="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span></h4>
            <p class="mt-4 text-gray-500 dark:text-gray-300">Experience the ultimate in performance and security with our enterprise subscription.  </p>

            <div class="mt-8 space-y-8">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>

                <span class="mx-4 text-gray-700 dark:text-gray-300">Automated scraping from google events. Runs every 15 minutes.</span>
              </div>
            </div>
            <div class="mt-8 space-y-8">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>

                <span class="mx-4 text-gray-700 dark:text-gray-300">5 Custom Scrapers included.</span>
              </div>
            </div>
            <div class="mt-8 space-y-8">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span class="mx-4 text-gray-700 dark:text-gray-300">Dedicated isolated resources</span>

              </div>
            </div>
            <div class="mt-8 space-y-8">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span class="mx-4 text-gray-700 dark:text-gray-300">Customizable theming</span>

              </div>
            </div>

          </div>
          <a href="/register">

            <button
              class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Choose plan
            </button>
          </a>
        </div>


      </div>
    </div>
  </section>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import router from '@/router';
import { authStore } from '@/stores/authStore';
export default defineComponent({
  name: 'ServicesView',
  components: {
  },
  setup() {
    const store = authStore();
    return { store };
  },
  data() {
    return {

    };
  },
  async mounted() {
    await this.store.checkIsAuthenticated();
    if (this.store.isAuthenticated == true) {
      await this.store.getWhoAmI();
    }
  },
});
</script>

<style>

</style>