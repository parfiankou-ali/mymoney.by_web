<template>
  <button class="button" :class="classes">
    <div class="button__throbbler" v-if="showThrobbler">
      <Throbbler />
    </div>
    <div class="button_body" v-else>
      <div v-if="$slots.icon" class="button__icon">
        <slot name="icon" />
      </div>
      <div class="button__name">
        <slot />
      </div>
    </div>
  </button>
</template>

<script>
  import Throbbler from './Throbbler'
  export default {
    name: 'Button',
    components: {Throbbler},
    props: {
      primary: {
        type: Boolean
      },
      secondary: {
        type: Boolean
      },
      large: {
        type: Boolean
      },
      block: {
        type: Boolean
      },
      showThrobbler: {
        type: Boolean
      }
    },
    computed: {
      classes () {
        return [
          this.primary ? 'button--style-primary' : '',
          this.secondary ? 'button--style-secondary' : '',
          this.large ? 'button--size-large' : '',
          this.block ? 'button--block' : '',
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .button
    display inline-flex
    align-items center
    justify-content center
    border 0
    cursor pointer

  .button__throbbler
    display flex
    align-items center

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

  .button--style-secondary
    color black
    background-color #d0d3dc
    &:hover
      background-color darken(#d0d3dc, 20%)
    & .button__icon
      fill black

  .button--block
    width 100%

</style>
