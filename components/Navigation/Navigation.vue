<template>
  <div class="navigation">
    <div class="navigation__section">
      <Logo />
    </div>
    <div class="navigation__section">
      <Button primary large>
        Text
      </Button>
    </div>
  </div>
</template>

<script>
  import Logo from './Logo'
  import Button from '../Button'
  export default {
    components: {Button, Logo}
  }
</script>

<style lang="stylus" scoped>
  .navigation
    display flex
    align-items center

  .navigation__section
    display inline-flex
    & + &
      padding-left rem(25px)
</style>
