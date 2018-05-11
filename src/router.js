import Vue from 'vue'
import VueRouter from 'vue-router'

import AppPosts from './components/AppPosts.vue'
import SinglePost from './components/SinglePost.vue'
import AddPost from './components/AddPost.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: AppPosts, name: 'posts' },
  { path: '/posts/:id', component: SinglePost, name: 'view' },
  { path: '/add', component: AddPost, name: 'add' },
  { path: '/edit/:id', component: AddPost, name: 'edit' }
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})
