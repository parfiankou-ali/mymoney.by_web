<template>
  <div class="align-xy-center">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'AlignXYCenter'
  }
</script>

<style lang="stylus" scoped>
  .align-xy-center
    display flex
    align-items center
    justify-content center
    width 100%
    height 100%
    min-height 100%

</style>
