
<template>
  <section class="container mx-auto px-6 p-10 h-full flex flex-col items-center">
    <h2 class="text-4xl font-bold text-white">
      Was geht?
    </h2>
    <h3 class="text-2xl mb-8 text-indigo-200">
      Create a was geht page for your city.
    </h3>
    <a href="/services">
      <button
        class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider text-indigo-400 hover:bg-indigo-400 hover:text-white">
        Start for free
      </button>
    </a>

    <h2 class="text-2xl font-bold text-center text-white my-8">
      Features
    </h2>
    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <h4 class="text-3xl text-indigo-200 font-bold mb-3">Exercise Metric</h4>
        <p class="text-indigo-200 mb-8">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you
          exercise. You can create different category of exercises and can track your vitals on the go.</p>
      </div>
      <div class="w-full md:w-1/2">
        <img src="https://www.cch.de/fileadmin/_processed_/1/b/csm_cch_header_concert3_f3ce086a56.jpg" />
      </div>
    </div>

    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/party-header-concert-live-music-event-banner-design-template-1f1368e5c872e323e3c7a44bb7c985ec_screen.jpg?ts=1600714888" />
      </div>
      <div class="w-full md:w-1/2 pl-10">
        <h4 class="text-3xl text-indigo-200 font-bold mb-3">Reporting</h4>
        <p class="text-indigo-200 mb-8">Our Smart Health Monitoring Wristwatch can generate a comprehensive report on
          your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.</p>
      </div>
    </div>

    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <h4 class="text-3xl text-indigo-200 font-bold mb-3">Syncing</h4>
        <p class="text-indigo-200 mb-8">Our Smart Health Monitoring Wristwatch allows you to sync data across all your
          mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/Linux or Windows
          OS.</p>
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