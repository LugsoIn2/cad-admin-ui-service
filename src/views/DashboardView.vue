
<template>
  <div class="flex flex-col sm:flex-row  items-stretch">
  <SideBarVue></SideBarVue>
  <div class="w-auto sm:w-full mx-4 my-4 sm:mx-8 sm:my-0 bg-gray-200 rounded-xl shadow border p-8 ">
    <p class="text-3xl text-gray-700 font-bold mb-5">
      Dashboard
    </p>
    <div v-if="!isLoading">
      <p class="text-gray-700 font-bold mb-5">
      {{ store.username }}
    </p>
    <p v-if="store.myTenant" class="text-gray-700 font-bold mb-5">
      City: {{ store.myTenant.city }}
    </p>
    <p v-else class="text-red-700 font-bold mb-5">
      - No Subscription yet - 
    </p>

    </div>

  </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from '@/router';
import { authStore } from '@/stores/authStore';
import EventList from '@/components/EventList.vue';
import Datepicker from '@vuepic/vue-datepicker';
import SideBarVue from '@/components/SideBar.vue';
export default defineComponent({
  name: 'DashboardView',
  components: {
    EventList,
    Datepicker,
    SideBarVue
},
  setup() {
    const store = authStore();
    return { store };
  },
  data() {
    return {
      isLoading: true
    };
  },
  async mounted() {
    this.isLoading = true;
    await this.store.checkIsAuthenticated();
    this.isLoading = false;
    if (this.store.isAuthenticated == true) {
      await this.store.getWhoAmI();
    } else {
      router.push('/start');
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