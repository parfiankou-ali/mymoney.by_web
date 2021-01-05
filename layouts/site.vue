<template>
  <div class="app">
    <div class="app__heading">
      <Navigation />
    </div>
    <div class="app__body">
      <Nuxt />
    </div>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation/Navigation'
  export default {
    components: {Navigation}
  }
</script>

<style lang="stylus" scoped>
</style>
