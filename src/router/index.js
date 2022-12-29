import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../store/auth'
import Home from '../views/Home.vue'
import About from '../views/About.vue';
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'
import PasswordReset from '../views/auth/PasswordReset.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { auth: true }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { auth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword
  },
  {
    path: '/password-reset/:token',
    name: 'reset-password',
    component: PasswordReset
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  if(to.matched.some(record => record.meta.auth)) {
    if(authStore.user) {
      next();
    }else {
      await authStore.getUser();
      if (authStore.user) {
        next();
      }else {
        authStore.afterLoginPath = to.path;
        authStore.isGuest = true;
        next({ name: 'login' });
      }
    }
  }else {
    if(authStore.guest) {
      next();
    }else {
      await authStore.getUser();
      if(authStore.user) {
        next({ name: "home" });
      }else {
        next();
      }
    }
    
  }
})

export default router
