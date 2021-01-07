<template>
  <div class="credential-input">
    <input class="credential-input__input" v-model="value" @keyup="keyup" :autofocus="autofocus" :type="type" :placeholder="placeholder" />
    <div class="credential-input__errors">
      <Errors :errors="validationErrors" />
    </div>
  </div>
</template>

<script>
  import Errors from './Errors'
  export default {
    name: 'CredentialInput',
    components: {Errors},
    props: {
      name: {
        type: String
      },
      placeholder: {
        type: String
      },
      type: {
        type: String
      },
      autofocus: {
        type: Boolean
      }
    },
    data () {
      return {
        value: null,
        form: null,
        validationErrors: []
      }
    },
    methods: {
      getHttpRequestValue () {
        if (this.value === '') {
          return null;
        }

        return this.value;
      },
      keyup (event) {
        if (this.form && event.key === "Enter") {
          this.form.submit()
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .credential-input__input
    border 0
    width 100%
    height 50px
    padding 0 15px
    font-size rem(16px)
    background-color transparent
    color black
</style>
