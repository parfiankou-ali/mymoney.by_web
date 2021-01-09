<template>
  <div class="input" :class="classes">
    <div class="input__body">
      <input v-model="value" @keyup="keyup" class="input__input" :type="type" :placeholder="placeholder" :autofocus="autofocus" />
      <div class="input__errors" v-show="validationErrors.length">
        <Errors :errors="validationErrors" />
      </div>
    </div>
  </div>
</template>

<script>
  import Errors from "../Form/Errors";
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
        validationErrors: []
      }
    },
    computed: {
      classes () {
        return [
          this.primary ? 'input--style-primary' : '',
          this.large ? 'input--size-large' : ''
        ]
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
  .input
    display inline-flex
    flex-direction column
    padding 2px
    width 100%
    border-radius 5px

  .input__body
    overflow hidden
    border-radius 3px
    background-color white

  .input__errors
    padding 5px

  .input__input
    border 0
    width 100%

  .input--size-large .input__input
    height 50px
    padding 0 15px
    font-size rem(16px)

  .input--style-primary
    background-color color-primary
    & .input__input
      color black

</style>
