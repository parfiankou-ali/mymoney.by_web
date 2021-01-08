<template>
  <div class="page" :class="classes">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Page',
    props: {
      paddingXY: {
        type: Boolean
      }
    },
    computed: {
      classes () {
        return [
          this.paddingXY ? 'page--padding-xy' : ''
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .page
    display flex
    flex-direction column
    width 100%

  .page--padding-xy
    padding 18px
</style>
