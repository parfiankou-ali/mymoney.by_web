<template>
  <div class="list-add-button">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'ListAddButton'
  }
</script>

<style lang="stylus" scoped>
  .list-add-button
    display flex
    align-items center
    justify-content center
    position fixed
    right 48px
    bottom 32px
    width 64px
    height 64px
    border-radius 50%
    background-color color-primary
    box-shadow 0 5px 20px rgba(0, 0, 0, 0.4)

  .list-add-button .icon
    fill white

</style>
