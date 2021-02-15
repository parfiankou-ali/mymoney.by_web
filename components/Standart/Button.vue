<template>
  <button class="button" :class="classes">
    <div class="button__throbbler" v-if="showThrobbler">
      <Throbbler />
    </div>
    <div class="button__body" v-else>
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
      text: {
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
          this.text ? 'button--style-text' : '',
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
    height 45px
    padding 4px 16px
    font-size rem(16px)
    font-weight 600
    border-radius 10px

  .button--style-primary
    color white
    background-color color-primary
    &:hover
      background-color darken(color-primary, 20%)
    & .button__icon
      fill white

  .button--style-secondary
    color black
    background-color white
    border 1px solid rgba(0, 0, 0, 0.2)
    &:hover
      background-color darken(#d0d3dc, 20%)
    & .button__icon
      fill black

  .button--style-text
    color #57575f
    background-color transparent
    & .button__body
      position relative
      &:before
        content ''
        position absolute
        left 0
        right 0
        bottom -1px
        border-top 2px dotted #57575f
    &:hover
      background-color rgba(0, 0, 0, 0.1)
    & .button__icon
      fill #57575f

  .button--block
    width 100%

</style>
