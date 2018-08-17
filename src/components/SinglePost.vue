<template>
  <div v-if="post" class="container">
    <div class="col-md-10 col-md-offset-1 blog-post">
      <h2>{{ post.title }}</h2>
      <div class="post-content" v-html="post.text"></div>
      <div>
        <span class="badge">Posted at {{ post.createdAt | formatDate }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-5">
        <add-comment @commentAdded="addComment" />
      </div>
      <div class="col-md-6">
        <suggested-post :post="suggestedPost"/>
      </div>
    </div>
    <comment-list :comments="comments"></comment-list>
  </div>
</template>

<script>
import AddComment from './AddComment.vue'
import CommentList from './CommentList.vue'
import SuggestedPost from './SuggestedPost'
import { DateMixin } from '../mixins'
import { posts } from '../services/Posts'

export default {
  data() {
    return {
      posts: [],
      post: {
        title: '',
        text: '',
        createdAt: '',
        comments: []
      },
      suggestedPost: {
        title: '',
        text: '',
        createdAt: '',
        comments: []
      }
    }
  },

  mixins: [DateMixin],

  components: {
    AddComment,
    CommentList,
    SuggestedPost
  },

  methods: {
    addComment(comment) {
      posts.addComment(comment, this.post.id).then(response => {
        posts.get(this.post.id).then(response => {
          this.post = response.data
        })
      })
    },
    setPosts(response, context, currId) {
      context.post = response.data.find(p => p.id === currId)
      context.posts = response.data

      let randomIndex = Math.floor(Math.random() * this.posts.length)
      this.suggestedPost = this.posts[randomIndex]
    }
  },
  computed: {
    comments() {
      return this.post.comments ? this.post.comments.reverse() : []
    }
  },
  beforeRouteEnter(to, from, next) {
    posts.getAll().then(response => {
      next(vm => {
        vm.setPosts(response, vm, to.params.id)
      })
    })
  },
  beforeRouteUpdate(to, from, next) {
    posts.getAll().then(response => {
      this.setPosts(response, this, to.params.id)
      next()
    })
  }
}
</script>

<style>
.post-content {
  overflow: hidden;
  width: 99%;
}
</style>
