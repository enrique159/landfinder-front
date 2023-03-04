import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'
import TerminosView from '@/views/TerminosView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import SignInView from '@/views/login/SignInView.vue'
import SignUpView from '@/views/login/SignUpView.vue'
import PageConfirmEmailView from '../views/login/PageConfirmEmailView.vue'
import ForgotPasswordView from '../views/login/ForgotPasswordView.vue'
import ResetPasswordView from '../views/login/ResetPasswordView.vue'
import ContactView from '@/views/ContactView.vue'
import VueMeta from 'vue-meta'
import { isLoggedIn } from '@/auth'

Vue.use(VueMeta)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: ProjectsView
  },
  {
    path: '/project/:id?/:name?',
    name: 'project',
    component: () => import('@/views/ProjectView.vue'),
  },
  {
    path: '/terminos-y-condiciones',
    name: 'terms',
    component: TerminosView
  },
  {
    path: '/politicas-privacidad',
    name: 'policy',
    component: PrivacyView
  },
  {
    path: '/contacto',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/login',
    name: 'login',
    component: SignInView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: "/confirm-email",
    component: PageConfirmEmailView
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPasswordView
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPasswordView
  },
  {
    path: "*",
    component: PageNotFoundView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach(async (to, from, next) => {
  if (to.name == "login" && isLoggedIn()) {
    next({ path: "/" });
  } else if (to.meta.requiresAuth && !isLoggedIn()) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

// Metodo para Catchar errores de rutas repetidas
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

export default router
