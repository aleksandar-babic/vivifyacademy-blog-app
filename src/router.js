import Vue from 'vue'
import VueRouter from 'vue-router'

import AppPosts from './components/AppPosts.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: AppPosts, name: 'posts' },
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})
