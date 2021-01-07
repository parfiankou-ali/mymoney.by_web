<template>
  <div class="navigation-icon">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'NavigationIcon'
  }
</script>

<style lang="stylus" scoped>
  .navigation-icon
    display inline-flex
    width 60px
    height 60px
    justify-content center
    align-items center
</style>
