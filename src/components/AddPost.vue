<template>
  <div class="container jumbotron">
    <form @submit.prevent="onSubmit">
      <div class="form-group row">
        <label class="col-4"></label>
        <div class="col-8">
          <input id="title" name="title" placeholder="Title" type="text" class="form-control here" required="required" v-model="post.title">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-4"></label>
        <div class="col-8">
          <input id="text" name="text" placeholder="Your content here" type="text" class="form-control here" v-model="post.text">
        </div>
      </div>
      <div class="form-group row">
        <div class="offset-4 col-8">
          <button name="submit" type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { posts } from '../services/Posts'

export default {
  data () {
    return {
      post: {
        title: '',
        text: ''
      }
    }
  },

  methods: {
    onSubmit () {
      posts.add(this.post)
        .then((response) => {
          this.$router.push({ name: 'posts' })
        })
    }
  }
}
</script>
