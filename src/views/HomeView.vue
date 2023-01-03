
<template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from '@/router';
import { authStore } from '@/stores/authStore';
import EventList from '@/components/EventList.vue';
import Datepicker from '@vuepic/vue-datepicker';
export default defineComponent({
  name: 'HomeView',
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
      router.push('/dashboard');
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