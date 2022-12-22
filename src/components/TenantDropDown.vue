<script lang="ts">
import { defineComponent } from 'vue';
import { eventStore } from '@/stores/eventStore';
// @ts-ignore
import vSelect from "vue-select";
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'TenantDropDown',
  components: {
    vSelect
  },
  data () {
    return {
      selectedTenant: ""
    };
  },
  async beforeCreate()  {
    await this.store.getAvailableTenants();
    this.selectedTenant = this.store.selectedTenant ?this.store.selectedTenant.toString() : "";
  },
  setup() {
    const store = eventStore();
    return { store };
  },
  methods: {
    setTenant(value: string) {
      this.store.setSelectedTenant(value);
      this.store.getEvents();
    }
  },
  watch: {
    selectedTenant: function(val, oldVal) {
      if (val == null) {
        this.store.setSelectedTenant("");
      }
      this.store.setSelectedTenant(val);
      this.store.getEvents();
    }
  }
});
</script>

<template>

  <vSelect 
    id="mySelect"
    placeholder="Stadt"
    v-model="selectedTenant"
    :options="store.availableTenants"
    class="mb-4"/>

</template>

<style>
#mySelect .v-select .dropdown-toggle {
   border: none;
}
#mySelect .vs__dropdown-toggle {
  background-color: white;
}

#mySelect input {
  color: black;
}
#mySelect .vs__dropdown-option {
  color: black;
}
#mySelect .vs__dropdown-option--highlight {
  color: white;
}
</style>
