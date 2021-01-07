<template>
  <div class="list">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'List'
  }
</script>

<style lang="stylus" scoped>
  .list
    display flex
    width 100%
    height 100%

</style>
