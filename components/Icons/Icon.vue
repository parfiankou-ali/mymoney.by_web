<template>
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox">
    <slot />
  </svg>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      viewBox: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .icon
    display inline-flex
    width 24px
    height 24px
</style>
