<template>
<div>
  <h4>Suggested Post</h4>
  <app-post :post="post"
            :isSuggested="true"/>
</div>
</template>

<script>
import AppPost from './AppPost'
export default {
  props: ['post'],
  components: {
    AppPost
  }
}
</script>

<style>
.suggested-post-wrapper {
  width: 90%;
  padding: 10px;
  margin: 10px;
}
</style>
