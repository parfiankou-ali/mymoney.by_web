<template>
  <button class="button" :class="classes">
    <div v-if="$slots.icon" class="button__icon">
      <slot name="icon" />
    </div>
    <div class="button__name">
      <slot />
    </div>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      primary: {
        type: Boolean
      },
      large: {
        type: Boolean
      }
    },
    computed: {
      classes () {
        return [
          this.primary ? 'button--style-primary' : '',
          this.large ? 'button--size-large' : ''
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .button
    display inline-flex
    align-items center
    border 0
    cursor pointer

  .button--size-large
    height rem(40px)
    padding rem(4px) rem(16px)
    font-size rem(16px)
    border-radius rem(5px)

  .button--style-primary
    color white
    background-color color-primary
    &:hover
      background-color darken(color-primary, 20%)
    & .button__icon
      fill white

</style>
