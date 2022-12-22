<script lang="ts">
import { defineComponent } from 'vue';
import { authStore } from '@/stores/authStore';
import EventCard from './EventCard.vue';

export default defineComponent({
  name: 'EventsList',
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
  Moin
</template>

<style scoped>

</style>
