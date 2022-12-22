
<template>
  <div class="flex min-h-full justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <!--<img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> -->
        <h1 class="text-center text-5xl font-bold tracking-tight text-white">Let's get started.</h1>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-indigo-200">Register an account</h2>

      </div>

      <form class="mt-8 space-y-6" v-on:submit="register">

        <div class="-space-y-px rounded-md shadow-sm">
          <div class="pb-4">
            <label for="email-address" class="sr-only">Email address</label>
            <input v-model="email" id="email-address" name="email" _type="email" autocomplete="email" required
              class="relative block w-full appearance-none bg-indigo-100 rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address">
          </div>
          <div class="pb-4">
            <label for="password" class="sr-only">Password</label>
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password"
              required
              class="relative block w-full appearance-none bg-indigo-100 rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password">
          </div>
          <div class="pb-4">
            <label for="password" class="sr-only">Repeat Password</label>
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password"
              required
              class="relative block w-full appearance-none bg-indigo-100 rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Repeat Password">
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
            Register
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
  name: 'RegisterView',
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
    async register(e: any) {
      e.preventDefault();
      let error = await this.store.register(this.email, this.password);
      let that = this;
      if (error != null) {
        Object.keys(error).forEach(function (key) {
          error[key].forEach((errorString) => {
            that.toast.error(errorString);
          });
        });
      }
    },
  },
});
</script>

<style>

</style>