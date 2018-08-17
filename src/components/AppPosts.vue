<template>
  <div class="container">
    <app-post v-for="(post, index) in posts"
              :key="post.id"
              :post="post"
              :index="index"
              @deletePost="deletePost"/>
  </div>
</template>

<script>
import { posts } from '../services/Posts'
import AppPost from './AppPost'

export default {
  components: {
    AppPost
  },
  data() {
    return {
      posts: []
    }
  },

  methods: {
    deletePost(data) {
      posts.remove(data.postId).then(response => {
        this.posts.splice(data.index, 1)
      })
    }
  },

  beforeRouteEnter(to, from, next) {
    posts.getAll().then(response => {
      next(vm => {
        vm.posts = response.data
      })
    })
  }
}
</script>

<style>
</style>
