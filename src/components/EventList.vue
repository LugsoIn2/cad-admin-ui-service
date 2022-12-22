<script lang="ts">
import { defineComponent } from 'vue';
import { eventStore } from '@/stores/eventStore';
import EventCard from './EventCard.vue';

export default defineComponent({
  name: 'EventsList',
  components: {
    EventCard
},
  setup() {
    const store = eventStore();
    return { store };
  },
});
</script>

<template>
  <EventCard v-for="event in store.events" :event="event"/>
</template>

<style scoped>

</style>
