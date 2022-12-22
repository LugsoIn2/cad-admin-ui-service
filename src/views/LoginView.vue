
<template>
  <div class="flex min-h-full justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <!--<img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> -->
        <h1 class="text-center text-5xl font-bold tracking-tight text-white">Welcome back.</h1>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-indigo-200">Sign in to your account</h2>
        <p class="mt-2 text-center text-sm text-indigo-200">
          Or
          <a href="/register" class="font-medium text-indigo-400 hover:text-indigo-500">register</a> for a free version
          of Was Geht
        </p>
      </div>
      <form class="mt-8 space-y-6" v-on:submit="loginWithPassword" >
        <div class=" rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required
              class="relative block w-full appearance-none rounded-none bg-indigo-100 rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address">
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password"
              required
              class="relative block w-full appearance-none rounded-none bg-indigo-100 rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-200 hover:text-indigo-500">Forgot your password?</a>
          </div>
        </div>

        <div>
          <button type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <!-- Heroicon name: mini/lock-closed -->
              <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>

  </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import router from '@/router';
import { authStore } from '@/stores/authStore';
import EventList from '@/components/EventList.vue';
import { useToast } from 'vue-toastification';
export default defineComponent({
  name: 'LoginView',
  components: {
    EventList
  },
  setup() {
    const store = authStore();
    const toast = useToast();
    return { store, toast };
  },
  data() {
    return {
      email: "",
      password: "",
      alert: "",
    };
  },
  mounted() {
    this.store.getCSRFToken();
    // check if loggedin

  },
  methods: {
    // Log in with the form's email/username and password
    async loginWithPassword(e: any) {
      e.preventDefault();
      let isFailed = await this.store.login(this.email, this.password) == false
      if (isFailed) {
        this.toast.error("Wrong login credentials!");
      }
    },
  },
});
</script>

<style>

</style>