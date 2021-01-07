<template>
  <div class="throbbler">
    <div class="throbbler__point throbbler__point--1" />
    <div class="throbbler__point throbbler__point--2" />
    <div class="throbbler__point throbbler__point--3" />
  </div>
</template>

<script>
  export default {
    name: 'Throbbler'
  }
</script>

<style lang="stylus" scoped>
  .throbbler
    display inline-flex

  throbbler-animation-duration = 1.4s
  .throbbler__point
    display inline-flex
    width 8px
    height 8px
    margin-right 5px
    border-radius 50%
    background-color white
    animation: point throbbler-animation-duration infinite linear;
    &:last-child
      padding-right 0

  .throbbler__point--1
    animation-delay -(throbbler-animation-duration / 4 * 2);

  .throbbler__point--2
    animation-delay -(throbbler-animation-duration / 4)

  @keyframes point
    0%
    40%
    100%
      background-color rgba(255, 255, 255, 0.25)
    20%
      background-color rgba(255, 255, 255, 1.0)

</style>
