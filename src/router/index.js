import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../store/auth'
import Home from '../views/Home.vue'
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

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.auth)) {
    const authUser = useAuthStore();
    if(authUser.user) {
      next();
    }else {
      next({ name: 'login' });
    }
  }else {
    const authUser = useAuthStore();
    if(authUser.user) {
      next({ name: '/' });
    }else {
      next();
    }
  }
})

export default router
