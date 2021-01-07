<template>
  <div class="form">
    <slot :form="this" name="form" />
  </div>
</template>

<script>
  import {InternalErrorHttpException} from '../../app/Exceptions/App/InternalErrorHttpException'

  export default {
    name: 'Form',
    props: {
      request: {
        type: String,
        required: true
      },
      method: {
        type: String,
        required: true
      },
      onError: {
        type: Function,
        default: () => {}
      },
      onSuccess: {
        type: Function,
        default: () => {}
      }
    },
    data () {
      return {
        isProcessingRequest: false,
        components: {},
        keyUpListenerId: null
      }
    },
    methods: {
      submit () {
        this.findComponents()
        this.isProcessingRequest = true;

        this.$axios({
          method: this.method,
          url: this.request,
          data: this.getHttpRequestData()
        }).then((response) => {
          this.removeValidationErrors()
          this.onSuccess(response.data)
        }).catch((error) => {
          try {
            const response = error.response.data
            if (response.status_code === 422) {
              this.displayValidationErrors(response.response)
            } else {
              this.removeValidationErrors()
              this.onError(response)
            }
          } catch (e) {
            console.log(e, error)
            this.removeValidationErrors()
            this.onError({
              status_code: InternalErrorHttpException.StatusCode
            })
          }
        }).finally(() => {
          this.isProcessingRequest = false;
        })
      },
      getHttpRequestData () {
        const data = {}

        for (const name in this.components) {
          data[name] = this.components[name].getHttpRequestValue()
        }

        return data
      },
      removeValidationErrors () {
        this.displayValidationErrors([])
      },
      displayValidationErrors (errors) {
        for (const name in this.components) {
          const component = this.components[name]
          if (component) {
            component.validationErrors = errors[name] ? errors[name] : []
          }
        }
      },
      findComponents () {
        this.findComponentsInComponent(this)
      },
      findComponentsInComponent (component) {
        for (const children of component.$children) {
          if (children.name) {
            this.components[children.name] = children
          }
          if (children.$children.length) {
            this.findComponentsInComponent(children)
          }
        }
      },
      bindFormToComponents () {
        for (const name in this.components) {
          const component = this.components[name]
          component.form = this
        }
      }
    },
    mounted() {
      this.findComponents()
      this.bindFormToComponents()
    }
  }
</script>

<style lang="stylus" scoped>
  .form
    display flex
    flex-direction column
    width 100%
</style>
