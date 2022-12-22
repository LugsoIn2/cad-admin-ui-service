
<template>
  <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <p class="text-3xl text-gray-700 font-bold mb-5">
      Moin {{ store.username }}
    </p>
    <p class="text-gray-500 text-lg">
      You are logged in
    </p>
    <p class="pt-8">
      <button @click="logout" type="button"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from '@/router';
import { authStore } from '@/stores/authStore';
import EventList from '@/components/EventList.vue';
import Datepicker from '@vuepic/vue-datepicker';
export default defineComponent({
  name: 'CockpitView',
  components: {
    EventList,
    Datepicker
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
  methods: {
    logout() {
      this.store.logout();
    }
  }
});
</script>

<style>

</style>