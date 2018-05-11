<template>
  <div class="container">
    <div class="col-md-10 col-md-offset-1 blog-post" v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <div>{{ post.text }}</div>
      <div>
        <span class="badge">Posted at {{ post.createdAt }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { posts } from '../services/Posts'

export default {

  data () {
    return {
      posts: []
    }
  },

  beforeRouteEnter (to, from, next) {
    posts.getAll()
      .then((response) => {
        next((vm) => {
          vm.posts = response.data
        })
      })
  }
}
</script>

<style>
  .blog-post {
    padding: 10px;
    margin: 10px;
    border: 0.5px solid grey;
    border-radius: 0.5rem;
  }
</style>
