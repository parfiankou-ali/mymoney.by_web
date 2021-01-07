<template>
  <div class="split-y">
    <div class="split-y__section split-y__section--left">
      <slot name="left" />
    </div>
    <div class="split-y__section split-y__section--right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SplitY'
  }
</script>

<style lang="stylus" scoped>
  .split-y
    width 100%
    display flex

  .split-y__section
    width 100%

  .split-y__section--left
    padding-right 20px

</style>
