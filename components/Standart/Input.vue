<template>
  <div class="input" :class="classes">
    <input class="input__input" :type="type" :placeholder="placeholder" />
  </div>
</template>

<script>
  export default {
    name: 'Input',
    props: {
      primary: {
        type: Boolean
      },
      large: {
        type: Boolean
      },
      placeholder: {
        type: String
      },
      type: {
        type: String
      }
    },
    computed: {
      classes () {
        return [
          this.primary ? 'input--style-primary' : '',
          this.large ? 'input--size-large' : ''
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .input
    display inline-flex
    padding 2px
    width 100%
    border-radius 5px

  .input__input
    border 0
    border-radius 3px
    width 100%

  .input--size-large .input__input
    height 50px
    padding 0 15px
    font-size rem(16px)

  .input--style-primary
    background-color color-primary
    & .input__input
      color black

</style>
