import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/style.css'
import axios from 'axios'
import { createPinia } from 'pinia';
import { useAuthStore } from './store/auth';

axios.defaults.baseURL="http://localhost"
axios.defaults.withCredentials=true

axios.interceptors.response.use(undefined, (err) => {
  if(err.response.status === '401' && !err.config._retry) {
    err.config._retry = true
    router.push("/login")
    return Promise.reject(err)
  }
  return Promise.reject(err)
});

const pinia = createPinia();

const app = createApp(App)
app.use(pinia)

const authStore = useAuthStore();
authStore.getUser().finally(() => {
  app.use(router).mount('#app');
})
