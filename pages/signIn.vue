<template>
  <Page>
    <AlignXYCenter>
      <div class="signIn__form">
        <Form v-slot:form="formSlot" request="user.signIn" method="post" :on-success="signIn" :on-error="handleError">
          <AlignXCenter>
            <Logo />
          </AlignXCenter>
          <div class="signIn__credentials">
            <Credentials />
          </div>
          <div class="signIn__errors" v-if="errors.length">
            <Errors :errors="errors" />
          </div>
          <SplitX medium>
            <template slot="left">
              <Button primary large block :show-throbbler="formSlot.form.isProcessingRequest" @click.native="formSlot.form.submit">{{ $t('Auth.SignIn') }}</Button>
            </template>
            <template slot="right">
              <NuxtLink to="/signUp">
                <Button secondary large block>{{ $t('Auth.SignUp') }}</Button>
              </NuxtLink>
            </template>
          </SplitX>
        </Form>
      </div>
    </AlignXYCenter>
  </Page>
</template>

<script>
import Page from '../components/Standart/Page/Page'
import Logo from '../components/Navigation/Logo'
import Credentials from '../components/Form/Credentials/Credentials'
import Button from '../components/Standart/Button'
import Form from '../components/Form/Form'
import SplitX from '../components/Layout/SplitX'
import AlignXYCenter from '../components/Layout/AlignXYCenter'
import AlignXCenter from '../components/Layout/AlignXCenter'
import Errors from "../components/Form/Errors";

import {InvalidCredentialsHttpException} from '../app/Exceptions/User/InvalidCredentialsHttpException'
import {InternalErrorHttpException} from "../app/Exceptions/App/InternalErrorHttpException";
import {ValidationErrorHttpException} from "../app/Exceptions/App/ValidationErrorHttpException";

import { Plugins } from '@capacitor/core'

export default {
  components: {Errors, AlignXCenter, AlignXYCenter, SplitX, Form, Button, Credentials, Logo, Page},
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
      } else if (error.status_code === ValidationErrorHttpException.StatusCode) {
        // Do nothing.
      }
    },
    removeErrors () {
      this.errors = []
    }
  },
  mounted () {
    Plugins.Keyboard.show();
  }
}
</script>

<style lang="stylus" scoped>
  .signIn__form
    padding 20px
    width 100%
    max-width 400px

  .signIn__credentials
    padding-top 30px
    padding-bottom 20px

  .signIn__errors
    padding-bottom 20px

</style>
