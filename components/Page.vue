<template>
  <div class="page">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Page'
  }
</script>

<style lang="stylus" scoped>
  .page
    width 100%
</style>
