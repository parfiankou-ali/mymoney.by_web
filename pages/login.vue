<template>
  <Page>
    <AlignXYCenter>
      <div class="login__form">
        <Form v-slot:form="formSlot">
          <AlignXCenter>
            <Logo />
          </AlignXCenter>
          <div class="login__credentials">
            <Credentials />
          </div>
          <SplitY>
            <template slot="left">
              <Button primary large block :show-throbbler="formSlot.form.isProcessingRequest" @click.native="formSlot.form.submit">{{ $t('Auth.SignIn') }}</Button>
            </template>
            <template slot="right">
              <Button secondary large block>{{ $t('Auth.SignUp') }}</Button>
            </template>
          </SplitY>
        </Form>
      </div>
    </AlignXYCenter>
  </Page>
</template>

<script>
import Page from '../components/Page'
import Logo from '../components/Navigation/Logo'
import Credentials from '../components/Credentials'
import Button from '../components/Button'
import Form from '../components/Form'
import SplitY from '../components/Layout/SplitY'
import AlignXYCenter from '../components/Layout/AlignXYCenter'
import AlignXCenter from '../components/Layout/AlignXCenter'

export default {
  components: {AlignXCenter, AlignXYCenter, SplitY, Form, Button, Credentials, Logo, Page},
  layout: 'login'
}
</script>

<style lang="stylus" scoped>
  .login__form
    padding 20px
    width 100%
    max-width 400px

  .login__credentials
    padding-top 30px
    padding-bottom 20px

</style>
