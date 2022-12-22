

<template>

<section class="container mx-auto px-6 p-10 h-full" >
    <h2 class="text-4xl font-bold text-center text-white mb-8">
      Features
    </h2>
    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <h4 class="text-3xl text-indigo-200 font-bold mb-3">Exercise Metric</h4>
        <p class="text-indigo-200 mb-8">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.</p>
      </div>
      <div class="w-full md:w-1/2">
        <img src="https://www.cch.de/fileadmin/_processed_/1/b/csm_cch_header_concert3_f3ce086a56.jpg" />
      </div>
    </div>

    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <img src="https://www.cch.de/fileadmin/_processed_/1/b/csm_cch_header_concert3_f3ce086a56.jpg" />
      </div>
      <div class="w-full md:w-1/2 pl-10">
        <h4 class="text-3xl text-indigo-200 font-bold mb-3">Reporting</h4>
        <p class="text-indigo-200 mb-8">Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.</p>
      </div>
    </div>

    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <h4 class="text-3xl text-indigo-200 font-bold mb-3">Syncing</h4>
        <p class="text-indigo-200 mb-8">Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/Linux or Windows OS.</p>
      </div>
      <div class="w-full md:w-1/2">
        <img src="https://www.cch.de/fileadmin/_processed_/1/b/csm_cch_header_concert3_f3ce086a56.jpg" />
      </div>
    </div>
  </section>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import router from '@/router';
import { authStore } from '@/stores/authStore';
export default defineComponent({
  name: 'ServicesView',
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