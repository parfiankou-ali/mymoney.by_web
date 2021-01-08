<template>
  <Heading class="heading-huge">
    <slot />
  </Heading>
</template>

<script>
  import Heading from "./Heading";
  export default {
    name: 'HeadingHuge',
    components: {Heading}
  }
</script>

<style lang="stylus" scoped>
  .heading-huge
    font-size rem(26px)

</style>
