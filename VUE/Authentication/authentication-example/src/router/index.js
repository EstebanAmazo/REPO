import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ROLES from '../auth/roles.js'
import { jwtDecode } from 'jwt-decode'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SingIn.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: { requiresAuth: true, allowedRoles: [ROLES.ADMIN] }
    }
  ]
})

router.beforeEach((to, from, next) => {

  const token = localStorage.getItem('token');
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (token) {
      // Decode the JWT to get user data
      const decodedToken = jwtDecode(token);

      if (decodedToken.role === ROLES.ROLES.ADMIN) {
     
        next();
      } else {
   
        // User doesn't have the required role; redirect to home
        next('/login');
      }
    } else {
      // User is not authenticated; redirect to login
      next('/login');
    }
  } else {
    // Allow access to non-protected routes
    next();
  }
});
export default router;
