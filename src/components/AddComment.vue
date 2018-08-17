<template>
  <form @submit.prevent="onSubmit">
    <div class="add-comment-wrapper">
      <div class="form-group md-6">
          <textarea id="text" name="text" placeholder="Your comment here" class="form-control add-comment-input" v-model="comment.text" required="required"></textarea>
      </div>
      <custom-captcha @verify="handleCaptchaVerify"
                      @expired="handleCaptchaExpired"
                      ref="captcha"/>
      <button name="submit" type="submit" class="btn btn-primary" :disabled="!captchaPassed">Submit</button>
    </div>
  </form>
</template>

<script>
import CustomCaptcha from './shared/CustomCaptcha'
export default {
  components: {
    CustomCaptcha
  },
  data() {
    return {
      comment: {
        text: ''
      },
      captchaPassed: false
    }
  },

  methods: {
    onSubmit() {
      if (!this.captchaPassed) {
        return
      }

      this.$emit('commentAdded', this.comment)
      this.$refs.captcha.reset()
    },
    handleCaptchaVerify() {
      this.captchaPassed = true
    },
    handleCaptchaExpired() {
      this.captchaPassed = false
    }
  }
}
</script>

<style>
.add-comment-input {
  width: 70%;
}
.add-comment-wrapper {
  width: 35%;
  padding: 10px;
  margin: 10px;
  border: 0.5px solid grey;
  border-radius: 0.5rem;
}
</style>
