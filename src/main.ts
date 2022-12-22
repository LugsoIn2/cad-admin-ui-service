import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import "vue-select/dist/vue-select.css";

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";


const options = {
    // You can set your default options here
};


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast, options);

app.mount('#app')
