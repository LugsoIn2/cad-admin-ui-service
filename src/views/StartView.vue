
<template>

    <div class="py-20 h-full" >
      <div class="container w-full px-6 flex flex-col items-center">
        <h2 class="text-4xl font-bold text-white">
          Was geht?
        </h2>
        <h3 class="text-2xl mb-8 text-indigo-200">
          Create a was geht page for your city.
        </h3>
        <a href="/login">

        <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          Start for free
        </button>
      </a>

      </div>
    </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import router from '@/router';
import { authStore } from '@/stores/authStore';
export default defineComponent({
  name: 'StartView',
  components: {
  },
  setup() {
    const store = authStore();
    return { store };
  },
  data() {
    return {

    };
  },
});
</script>

<style>

</style>