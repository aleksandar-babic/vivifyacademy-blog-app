<template>
  <div class="container">
    <div class="col-md-10 col-md-offset-1 blog-post">
      <h2>{{ post.title }}</h2>
      <div>{{ post.text }}...</div>
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
      post: {}
    }
  },

  beforeRouteEnter (to, from, next) {
    posts.get(to.params.id)
      .then((response) => {
        next((vm) => {
          vm.post = response.data
        })
      })
  }
}
</script>

<style>

</style>
