<template>
  <div class="container">
    <div class="col-md-10 col-md-offset-1 blog-post" v-for="(post, index) in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <div>{{ post.text.substr(0, 20) }}...</div>
      <div>
        <span class="badge">Posted at {{ post.createdAt }}</span>
      </div>
      <div>
        <router-link :to="{ name: 'view', params: { id: post.id } }" class="btn btn-default">View Post</router-link>
        <router-link :to="{ name: 'edit', params: { id: post.id } }" class="btn btn-default">Edit Post</router-link>
        <button class="btn btn-danger" @click="deletePost(post.id, index)">Delete</button>
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

  methods: {
    deletePost(id, index) {
      posts.remove(id)
        .then((response) => {
          this.posts.splice(index, 1)
        })
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

  .btn {
    margin-top: 5px;
  }
</style>
