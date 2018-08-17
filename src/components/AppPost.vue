<template>
  <div v-if="post" class="col-md-10 col-md-offset-1 blog-post post-content">
    <h2>{{ post.title }}</h2>
    <div v-html="post.text"></div>
    <div>
      <span class="badge">Posted at {{ post.createdAt | formatDate }}</span>
    </div>
    <div class="details">
      <div>
          <router-link :to="{ name: 'view', params: { id: post.id } }" class="btn btn-default">View Post</router-link>
          <router-link v-if="!isSuggested" :to="{ name: 'edit', params: { id: post.id } }" class="btn btn-default">Edit Post</router-link>
          <button v-if="!isSuggested" class="btn btn-danger" @click="onDeletePost(post.id)">Delete</button>
      </div>
      <div>
          <span class="badge">Number of comments: {{ this.post.comments.length }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { DateMixin } from '../mixins'
export default {
  props: ['post', 'index', 'isSuggested'],
  mixins: [DateMixin],
  methods: {
    onDeletePost(postId) {
      this.$emit('deletePost', { postId, index: this.index })
    }
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

.details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
