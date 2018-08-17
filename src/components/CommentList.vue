<template>
  <div class="list-group">
    <li class="list-group-item" v-for="comment in comments" :key="comment.id">
      {{ comment.createdAt | diffForHumans }} - {{ comment.text }}
    </li>
  </div>
</template>

<script>
import { DateMixin } from '../mixins'

export default {
  props: {
    comments: Array
  },

  mixins: [DateMixin]
}
</script>
