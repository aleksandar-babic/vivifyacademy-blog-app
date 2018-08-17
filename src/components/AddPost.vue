<template>
  <div class="container jumbotron">
    <form @submit.prevent="onSubmit" @reset="reset">
      <div class="form-group row">
        <label class="col-4"></label>
        <div class="col-8">
          <input id="title" name="title" placeholder="Title" type="text" class="form-control here" required="required" minlength="2" v-model="post.title">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-4"></label>
        <div class="col-8">
          <textarea id="text" name="text" placeholder="Your content here" class="form-control here" v-model="post.text" minlength="300"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <div class="offset-4 col-8">
          <button name="submit" type="submit" class="btn btn-primary">{{ isEditing ? 'Edit' : 'Submit' }}</button>
          <button name="reset" type="reset" class="btn btn-default">Reset</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { posts } from '../services/Posts'

export default {
  data() {
    return {
      post: {
        title: '',
        text: ''
      },
      isEditing: false
    }
  },

  created() {
    if (this.$route.params.id) {
      this.isEditing = true
      posts.get(this.$route.params.id).then(response => {
        this.post = response.data
      })
    }
  },

  methods: {
    onSubmit() {
      if (this.$route.params.id) {
        this.editPost()
      } else {
        this.addPost()
      }
    },

    addPost() {
      posts.add(this.post).then(response => {
        this.$router.push({ name: 'posts' })
      })
    },

    editPost() {
      posts.update(this.post).then(response => {
        this.$router.push({ name: 'posts' })
      })
    },

    reset() {
      this.post.title = ''
      this.post.text = ''
    }
  }
}
</script>
