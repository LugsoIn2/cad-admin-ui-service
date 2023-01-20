
<template>
  <div class="flex flex-col sm:flex-row  items-stretch">
    <SideBarVue></SideBarVue>
    <div class="w-auto sm:w-full mx-4 my-4 sm:mx-8 sm:my-0 bg-gray-200 rounded-xl shadow border p-8 ">
      <p class="text-3xl text-gray-700 font-bold mb-5">
        Themes
      </p>
      <p v-if="store.myTenant && (store.myTenant.subscription_type == 1 || store.myTenant.subscription_type == 2)">
      <p class="text-lg text-gray-700 font-bold mb-5">
        Current Theme: {{ store.myTenantTheme }}
      </p>
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-700">Select a subscription type</label>
      <select id="countries" v-model="selectedTheme" placeholder="ha"
        class=" border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="-" disabled hidden>Choose your subscription</option>
        <option :disabled="store.myTenant && store.myTenant.theme_type == '0'" value=0>{{store.getThemeStringFromTypeNumber("0")}}</option>
        <option :disabled="store.myTenant && store.myTenant.theme_type == '1'" value=1>{{store.getThemeStringFromTypeNumber("1")}}</option>
        <option :disabled="store.myTenant && store.myTenant.theme_type == '2'" value=2>{{store.getThemeStringFromTypeNumber("2")}}</option>
      </select>

      <label v-if="selectedTheme != -1" for="countries" class="block mt-6 mb-2 text-sm font-medium text-gray-700">Submit to
        apply your subscription type</label>
      <button v-if="selectedTheme != -1" @click="setSubscription"
        class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 custom-background hover:bg-blue-700 dark:focus:ring-blue-800">
        Activate Theme
      </button>
      </p>
      <p v-else>
      <p class="text-red-700">Free Subscriptions are not permitted to change themes!</p>
      You have to purchase the Standard or Enterprise Subscription to be able to change your theming!
      </p>
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
  name: 'ThemesView',
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
      selectedTheme: -1
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
    },
    setSubscription() {
      this.store.updateThemeType(this.selectedTheme);
    }
  }
});
</script>

<style>
.custom-background {
  background-color: #004e92;
}
</style>