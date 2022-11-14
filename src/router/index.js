import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'
import TerminosView from '@/views/TerminosView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: ProjectsView
  },
  {
    path: '/project/:id?/:name?',
    name: 'project',
    component: () => import('@/views/ProjectView.vue')
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
    path: "*",
    component: PageNotFoundView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
