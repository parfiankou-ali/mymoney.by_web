<template>
  <div class="credentials">
    <div class="credentials__body">
      <div class="credentials__section">
        <CredentialInput name="email" type="text" :placeholder="$t('Auth.Login')" autofocus />
      </div>
      <div class="credentials__section">
        <CredentialInput name="password" type="password" :placeholder="$t('Auth.Password')" />
      </div>
    </div>
  </div>
</template>

<script>
  import CredentialInput from './CredentialInput'
  export default {
    name: 'Credentials',
    components: {CredentialInput}
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
    overflow hidden
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

</style>
