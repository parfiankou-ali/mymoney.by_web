<template>
  <div class="input" :class="classes">
    <div class="input__label">
      {{ placeholder }}
    </div>
    <div class="input__body">
      <input ref="input" v-model="value" @keyup="keyup" @focus="focus" @blur="blur" class="input__input" :type="type" :autofocus="autofocus" />
      <div class="input__errors" v-show="validationErrors.length">
        <Errors :errors="validationErrors" />
      </div>
    </div>
  </div>
</template>

<script>
  import Errors from "../Form/Errors";
  import {Plugins} from "@capacitor/core";
  export default {
    name: 'Input',
    components: {Errors},
    props: {
      name: {
        type: String
      },
      primary: {
        type: Boolean
      },
      large: {
        type: Boolean
      },
      autofocus: {
        type: Boolean
      },
      placeholder: {
        type: String
      },
      type: {
        type: String
      }
    },
    data () {
      return {
        value: null,
        form: null,
        validationErrors: [],
        isInputFocused: false
      }
    },
    computed: {
      classes () {
        return [
          this.primary ? 'input--style-primary' : '',
          this.large ? 'input--size-large' : '',
          this.isInputFocused || this.value ? 'input--focused' : '',
        ]
      }
    },
    methods: {
      getHttpRequestValue () {
        if (this.value === '') {
          return null;
        }

        return this.value
      },
      keyup (event) {
        if (this.form && event.key === "Enter") {
          this.form.submit()
        }
      },
      focus () {
        this.isInputFocused = true
        this.$refs.input.focus()

        try {
          Plugins.Keyboard.show()
        } catch (e) {
          console.error(e)
        }
      },
      blur () {
        this.isInputFocused = false
        this.$refs.input.blur()

        try {
          Plugins.Keyboard.hide()
        } catch (e) {
          console.error(e)
        }
      }
    },
    mounted () {
      if (this.autofocus) {
        this.focus()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .input
    position relative
    display inline-flex
    flex-direction column
    width 100%
    border 2px solid transparent
    border-radius 10px

  .input__label
    height = 20px
    position absolute
    z-index -1
    top 27px
    margin-top -(height / 2)
    line-height height
    color #999
    font-weight 500
    .input--focused &
      transform-origin 0 0 0
      transform scale(0.75) translateY(-13px)
      transition transform 0.2s ease-in-out

  .input__body
    overflow hidden

  .input__errors
    padding 0 5px 5px

  .input__input
    border 0
    width 100%
    background-color transparent
    box-shadow none
    &::selection
      background-color #aec4ff
    &:-moz-placeholder
      box-shadow none !important

  .input--size-large
    padding-left = 15px
    .input__input
      height 54px
      padding 15px padding-left 0
      font-size rem(16px)
      font-weight 600
    .input__label
      left padding-left
      right padding-left

  .input--style-primary
    border-color rgba(0, 0, 0, 0.1)
    & .input__input
      color black

</style>
