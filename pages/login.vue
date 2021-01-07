<template>
  <Page>
    <AlignXYCenter>
      <div class="login__form">
        <Form v-slot:form="formSlot" request="user.signIn" method="post" :on-success="signIn" :on-error="handleError">
          <AlignXCenter>
            <Logo />
          </AlignXCenter>
          <div class="login__credentials">
            <Credentials />
          </div>
          <div class="login__errors">
            <Errors :errors="errors" />
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
import {InvalidCredentialsHttpException} from '../app/Exceptions/User/InvalidCredentialsHttpException'
import Errors from "../components/Errors";
import {InternalErrorHttpException} from "../app/Exceptions/App/InternalErrorHttpException";

export default {
  components: {Errors, AlignXCenter, AlignXYCenter, SplitY, Form, Button, Credentials, Logo, Page},
  layout: 'login',
  data () {
    return {
      errors: []
    }
  },
  methods: {
    signIn ({ token, user }) {
      this.removeErrors()

      this.$store.commit('user/signIn', { token, user })
      this.$router.push('/')
    },
    handleError(error) {
      this.removeErrors()

      if (error.status_code === InvalidCredentialsHttpException.StatusCode) {
        this.errors.push(this.$t('Exceptions.User.InvalidCredentials'))
      } else if (error.status_code === InternalErrorHttpException.StatusCode) {
        this.errors.push(this.$t('Exceptions.App.InternalError'))
      }
    },
    removeErrors () {
      this.errors = []
    }
  }
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

  .login__errors
    padding-bottom 20px

</style>
