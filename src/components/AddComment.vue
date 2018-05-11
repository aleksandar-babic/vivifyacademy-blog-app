<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <div class="col-6">
        <textarea id="text" name="text" placeholder="Your comment here" class="form-control here" v-model="comment.text" required="required"></textarea>
      </div>
    </div>
    <div class="form-group row">
      <div class="offset-4 col-8">
        <button name="submit" type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      comment: {
        text: ''
      }
    }
  },

  methods: {
    onSubmit () {
      this.$emit('commentAdded', this.comment)
    }
  }
}
</script>
