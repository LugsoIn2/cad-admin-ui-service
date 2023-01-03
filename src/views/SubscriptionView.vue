
<template>
    <div class="flex flex-col sm:flex-row  items-stretch">
  <SideBarVue></SideBarVue>
  <div class="w-auto sm:w-full mx-4 my-4 sm:mx-8 sm:my-0 bg-gray-200 rounded-xl shadow border p-8 ">
      <p class="text-3xl text-gray-700 font-bold mb-5">
        Subscription
      </p>
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-700">Select a subscription type</label>
      <select id="countries"
      v-model="selectedSubscription"
        class=" border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="Free">Free</option>
        <option value="Standard">Standard</option>
        <option value="Enterprise">Enterprise</option>
      </select>

      <label for="countries" class="block my-2 text-sm font-medium text-gray-700">Press here to apply your subscription type</label>
      <button
            class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 custom-background hover:bg-blue-700 dark:focus:ring-blue-800">
          {{ selectedSubscription == "Free" ? "Activate Free Subscription": "Purchase "  + selectedSubscription + " subscription"}}
          </button>

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
  name: 'SubscriptionView',
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
      selectedSubscription: "Free"
    };
  },
  async mounted() {
    await this.store.checkIsAuthenticated();
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
.custom-background {
  background-color: #004e92;
}
</style>