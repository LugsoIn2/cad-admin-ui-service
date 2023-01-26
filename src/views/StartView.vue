
<template>
  <section class="container mx-auto px-6 p-10 h-full flex flex-col items-center">
    <h1 class="text-5xl font-bold mb-5 text-white">
      Was geht in your city?
    </h1>
    <h3 class="text-2xl mb-8 text-indigo-200">
      Create a was geht page in 5 minutes.
    </h3>
    <a href="/services">
      <button
        class="custom-button font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
        Start for free
      </button>
    </a>

    <h2 class="text-2xl text-indigo-200  font-bold text-center text-white my-24">
      Features
    </h2>
    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2 px-4">
        <h4 class="text-3xl text-indigo-200 font-bold mb-3">Single event platform</h4>
        <p class="text-indigo-200 mb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
      </div>
      <div class="w-full md:w-1/2 px-4">
        <img class="rounded-2xl" src="https://assets-global.website-files.com/61f29c609f84a86e418fbcfb/630e7573a6c82d2aa382fd87_630ccd11b949e41fce06a0dc_blog2_main.webp" />

      </div>
    </div>

    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2 px-4">
        <img class="rounded-2xl" src="https://www.entertainmentbusiness.nl/wp-content/uploads/2021/03/EB-Header-1-800x450.jpg" />

      </div>
      <div class="w-full md:w-1/2 px-4">
        <h4 class="text-3xl text-indigo-200 font-bold mb-3">Automated Scraping</h4>
        <p class="text-indigo-200 mb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
      </div>
    </div>

    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2 px-4">
        <h4 class="text-3xl text-indigo-200 font-bold mb-3">Best software architecture in the world</h4>
        <p class="text-indigo-200 mb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
      </div>
      <div class="w-full md:w-1/2 px-4">
        <img class="rounded-2xl" src="https://thoth.pickvisa.com/wp-content/uploads/2021/12/433561cc80dc4c38b2ab51a3901b88b3.jpg" />
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
.custom-button {
  background-color: #004e92;
  color: white;
}
.custom-button:hover {
  background-color: white;
  color: #004e92;
}
</style>