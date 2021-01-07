<template>
  <div class="form">
    <slot :form="this" name="form" />
  </div>
</template>

<script>
  export default {
    name: 'Form',
    data () {
      return {
        isProcessingRequest: false
      }
    },
    methods: {
      submit () {
        this.isProcessingRequest = true;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .form
    display flex
    flex-direction column
    width 100%
</style>
