<template>
  <div class="align-y-center">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'AlignYCenter'
  }
</script>

<style lang="stylus" scoped>
  .align-y-center
    display flex
    width 100%
    align-items center
</style>
