<template>
  <div class="credentials">
    <div class="credentials__body">
      <div class="credentials__section">
        <input autofocus class="credentials__input" type="text" :placeholder="$t('Auth.Login')" />
      </div>
      <div class="credentials__section">
        <input class="credentials__input" type="password" :placeholder="$t('Auth.Password')" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Credentials'
  }
</script>

<style lang="stylus" scoped>
  .credentials
    display flex
    width 100%
    flex-direction column
    padding 2px
    border-radius 5px
    background-color color-primary

  .credentials__body
    border-radius 3px
    background-color white

  .credentials__section
    &:first-child
      position relative
      padding-bottom 1px
      &:before
        content ''
        position absolute
        left 15px
        right 15px
        bottom 0
        border-bottom 1px solid rgba(0, 0, 0, 0.1)

  .credentials__input
    border 0
    width 100%
    height 50px
    padding 0 15px
    font-size rem(16px)
    background-color transparent
    color black

</style>
