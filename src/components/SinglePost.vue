<template>
  <div class="container">
    <div class="col-md-10 col-md-offset-1 blog-post">
      <h2>{{ post.title }}</h2>
      <div>{{ post.text }}...</div>
      <div>
        <span class="badge">Posted at {{ post.createdAt }}</span>
      </div>
    </div>
    <add-comment @commentAdded="addComment"></add-comment>
    <comment-list :comments="comments"></comment-list>
  </div>
</template>

<script>
import AddComment from './AddComment.vue'
import CommentList from './CommentList.vue'
import { posts } from '../services/Posts'

export default {
  data () {
    return {
      post: {}
    }
  },

  components: {
    AddComment,
    CommentList
  },

  methods: {
    addComment (comment) {
      posts.addComment(comment, this.post.id)
        .then((response) => {
          posts.get(this.post.id)
            .then((response) => {
              this.post = response.data
            })
        })
    }
  },

  computed: {
    comments () {
      return this.post.comments ? this.post.comments.reverse() : []
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
