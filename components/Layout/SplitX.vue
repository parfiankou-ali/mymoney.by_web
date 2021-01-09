<template>
  <div class="split-x" :class="classes">
    <div class="split-x__section">
      <slot name="left" />
    </div>
    <div class="split-x__section">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SplitX',
    props: {
      small: {
        type: Boolean
      },
      medium: {
        type: Boolean
      }
    },
    computed: {
      classes () {
        return [
          this.small ? 'split-x--small' : '',
          this.medium ? 'split-x--medium' : '',
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .split-x
    width 100%
    display flex

  .split-x__section
    width 100%
    .split-x--small &
      padding 0 5px
    .split-x--medium &
      padding 0 10px
    &:first-child
      padding-left 0
    &:last-child
      padding-right 0

</style>
