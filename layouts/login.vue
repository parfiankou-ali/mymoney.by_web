<template>
  <div class="app">
    <Nuxt />
  </div>
</template>

<script>
  export default {
    middleware: ['guest']
  }
</script>

<style lang="stylus" scoped>
  .app
    display flex
    width 100%
    min-height 100vh
</style>
