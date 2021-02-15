<template>
  <div class="errors" v-show="errors.length" :class="classes">
    <div class="errors__error" v-for="error in errors">
      {{ error }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Errors',
    props: {
      errors: {
        type: Array,
        required: true
      },
      large: {
        type: Boolean
      }
    },
    computed: {
      classes () {
        return [
          this.large ? 'errors--large' : ''
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .errors
    padding 2px 4px
    font-size rem(14px)
    border-radius 5px
    line-height 1
    font-weight 600
    background-color #f9ebf2
    color #b30121

  .errors--large
    padding 6px 10px
</style>
