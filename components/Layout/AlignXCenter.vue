<template>
  <div class="align-x-center">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'AlignXCenter'
  }
</script>

<style lang="stylus" scoped>
  .align-x-center
    display flex
    width 100%
    justify-content center
</style>
