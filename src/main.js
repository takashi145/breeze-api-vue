import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/style.css'
import axios from 'axios'

axios.defaults.baseURL="http://localhost"
axios.defaults.withCredentials=true

createApp(App).use(router).mount('#app')
