import { defineStore } from 'pinia'
import type {WasGehtEvent} from '@/models/event';
import router from '@/router';

export const eventStore = defineStore({
  id: 'eventStore',
  state: () =>
  ({
    events: null as WasGehtEvent[] | null,
    availableTenants: null as string[] | null,
    selectedTenant: null as string | null,
    selectedDay: null as string | null
  }),
  actions: {
    async getEvents() {
      let endpoint = `${import.meta.env.VITE_API_ENDPOINT}/events`;
      endpoint += "?" + new URLSearchParams({
        'city': this.selectedTenant ? this.selectedTenant!.toString() : "",
        'date': this.selectedDay ? this.selectedDay.toString() : ""
    }).toString();
      const res = await fetch(endpoint);
      this.events = await res.json();
    },
    async getAvailableTenants() {
      // TODO: get tenants from event service or from environment variable?
      this.availableTenants = ['Konstanz', 'Tübingen'];
    },
    setSelectedTenant(city: string) {
      this.selectedTenant  = city;
      this.setQueryParameter();
    },
    setSelectedDay(date: string) {
      this.selectedDay = date.substring(0,10);
      this.setQueryParameter();
    },
    setQueryParameter() {
      router.replace({ name: "events", query: {city: this.selectedTenant, date: this.selectedDay} });
    }
  }
});