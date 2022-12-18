import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/style.css'
import axios from 'axios'
import { createPinia } from 'pinia';
import { useAuthStore } from './store/auth';

axios.defaults.baseURL="http://localhost"
axios.defaults.withCredentials=true

const pinia = createPinia();

const app = createApp(App)
app.use(pinia)

const authStore = useAuthStore();
authStore.getUser().finally(() => {
  app.use(router).mount('#app');
})
