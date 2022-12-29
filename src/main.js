import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/style.css'
import { createPinia } from 'pinia';
import './axios';

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');
