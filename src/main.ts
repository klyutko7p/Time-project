import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3Autocounter from 'vue3-autocounter';

createApp(App).use(store).use(router).component('vue3-autocounter', Vue3Autocounter).mount('#app')


