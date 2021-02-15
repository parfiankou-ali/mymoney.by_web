<template>
  <div class="section" :class="classes">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Section',
    props: {
      marginBottomLarge: {
        type: Boolean
      },
      marginBottomSmall: {
        type: Boolean
      },
      marginBottomTiny: {
        type: Boolean
      }
    },
    computed: {
      classes () {
        return [
          this.marginBottomLarge ? 'section--margin-bottom-large' : '',
          this.marginBottomSmall ? 'section--margin-bottom-small' : '',
          this.marginBottomTiny ? 'section--margin-bottom-tiny' : '',
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .section
    width 100%
    display flex

  .section--margin-bottom-large
    margin-bottom 40px

  .section--margin-bottom-small
    margin-bottom 20px

  .section--margin-bottom-tiny
    margin-bottom 5px

</style>
