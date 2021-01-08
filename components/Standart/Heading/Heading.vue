<template>
  <button class="heading" :class="classes">
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'Heading',
    computed: {
      classes () {
        return [
          //
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .heading
    color black

</style>
