import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'
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
    path: '/project/:id?',
    name: 'project',
    component: () => import('@/views/ProjectView.vue')
  },
  {
    path: "*",
    component: PageNotFoundView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
