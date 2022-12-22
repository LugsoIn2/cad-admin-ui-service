


<template>

    <section class="h-full">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us
            </h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-indigo-200 sm:text-xl">Got a technical
                issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
            </p>
            <form action="#" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-indigo-200">Your
                        email</label>
                    <input type="email" id="email"
                        class="shadow-sm bg-indigo-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="name@flowbite.com" required>
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-indigo-200">Subject</label>
                    <input type="text" id="subject"
                        class="block p-3 w-full text-sm text-black bg-indigo-100 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Let us know how we can help you" required>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-indigo-200">Your
                        message</label>
                    <textarea id="message" rows="6"
                        class="block p-2.5 w-full text-sm  text-black bg-indigo-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Leave a comment..."></textarea>
                </div>
                <button type="button"
                    class="focus:outline-none text-indigo-200 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Send
                    message</button>

            </form>
        </div>
    </section>


</template>
<script lang="ts">
import { defineComponent } from 'vue';
import router from '@/router';
import { authStore } from '@/stores/authStore';
export default defineComponent({
    name: 'ContactView',
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