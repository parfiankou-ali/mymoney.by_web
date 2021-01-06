<template>
  <Page>
    <div class="page__section page__logo">
      <Logo />
    </div>
    <div class="page__section page__credentials">
      <Credentials />
    </div>
  </Page>
</template>

<script>
import Page from '../components/Page'
import Logo from '../components/Navigation/Logo'
import Credentials from '../components/Credentials'
export default {
  components: {Credentials, Logo, Page},
  layout: 'login'
}
</script>

<style lang="stylus" scoped>
  .page__logo
    margin-top -70px

  .page__section
    display flex
    width 100%
    flex-direction column
    align-items center

  .page__credentials
    padding-top 30px

</style>
