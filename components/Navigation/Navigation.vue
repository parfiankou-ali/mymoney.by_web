<template>
  <div class="navigation">
    <div class="navigation__section" @click="toggleMenu">
      <div class="navigation__icon">
        <NavigationIcon>
          <IconMenu />
        </NavigationIcon>
      </div>
    </div>
    <div class="navigation__section navigation__section--block">
      <AlignXCenter>
        <div class="navigation__logo">
          <Logo />
        </div>
      </AlignXCenter>
    </div>
    <div class="navigation__section">
      <div class="navigation__icon">
        <NavigationIcon />
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from "./Logo";
  import AlignXCenter from "../Layout/AlignXCenter";
  import IconMenu from "../Icons/IconMenu";
  import NavigationIcon from "./NavigationIcon";
  export default {
    name: 'Navigation',
    components: {NavigationIcon, IconMenu, AlignXCenter, Logo},
    methods: {
      toggleMenu () {
        console.log('toggle menu')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .navigation
    display flex
    height 60px
    align-items center

  .navigation__section
    display inline-flex

  .navigation__section--block
    width 100%
    padding 0 20px

  .navigation__logo
    display inline-flex
    width 190px

  .navigation__icon .icon
    fill color-primary

</style>
