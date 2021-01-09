<template>
  <div class="section" :class="classes">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Section',
    computed: {
      classes () {
        return [
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .section
    width 100%
    display flex
    & + &
      margin-top 10px

</style>
