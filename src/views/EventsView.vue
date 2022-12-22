
<template>
  <main class="px-4 w-full md:w-1/2 ">
    <h1 className="text-3xl font-bold text-center	text-black mb-4">
      Was geht?
    </h1>
    <div class="flex flex-row justify-between">
      <TenantDropDown class="w-2/5"/>
      <Datepicker v-bind:enableTimePicker="false" placeholder="Datum" class="w-2/5" v-model="store.selectedDay" :autoApply="true" @update:model-value="setSelectedDay"/>
    </div>
    
    <EventList/>
  </main>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import router from '@/router';
import {eventStore} from '@/stores/eventStore';
import EventList from '@/components/EventList.vue';
import TenantDropDown from '@/components/TenantDropDown.vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default defineComponent({
  name: 'EventsView',
  components: {
    EventList,
    TenantDropDown,
    Datepicker
},
  setup() {
    const store = eventStore();
    return { store };
  },
  data() {
    return {
      
    };
  },
  mounted() {
    const city = this.$route.query.city;
    const dateString = this.$route.query.date;
    if (city) {
      this.store.setSelectedTenant(city.toString());
    }
    if (dateString) {
      this.store.setSelectedDay(dateString.toString());
    }
    this.store.getEvents();

  },
  methods: {
    setSelectedDay(value: Date) {
      if (value) {
        this.store.setSelectedDay(value.toISOString());
      } else {
        this.store.setSelectedDay('');
      }
      this.store.getEvents();
    },
  }
});
</script>

<style>
main {
  min-width: 50%;
}
body {
    background-color: rgb(230, 228, 228);
    min-height: 100vh;
    color: var(--color-text);
    transition: color 0.5s, background-color 0.5s;
    line-height: 1.6;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

</style>