<template>
  <Page>
    <AlignXYCenter>
      <div class="signUp__form">
        <Form v-slot:form="formSlot" request="user.signUp" method="post" :on-success="signIn" :on-error="handleError">
          <AlignXCenter>
            <Logo />
          </AlignXCenter>
          <div class="signUp__body">
            body
          </div>
          <div class="signUn__errors" v-if="errors.length">
            <Errors :errors="errors" />
          </div>
          <SplitX medium>
            <template slot="left">
              <Button primary large block :show-throbbler="formSlot.form.isProcessingRequest" @click.native="formSlot.form.submit">{{ $t('Auth.SignUp') }}</Button>
            </template>
            <template slot="right">
              <NuxtLink to="/signIn">
                <Button text large block>{{ $t('Auth.SignIn') }}</Button>
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
import Button from '../components/Standart/Button'
import Form from '../components/Form/Form'
import SplitX from '../components/Layout/SplitX'
import AlignXYCenter from '../components/Layout/AlignXYCenter'
import AlignXCenter from '../components/Layout/AlignXCenter'
import Errors from "../components/Form/Errors";
import Input from "../components/Standart/Input";
import Section from "../components/Layout/Section";

import {InvalidCredentialsHttpException} from '../app/Exceptions/User/InvalidCredentialsHttpException'
import {InternalErrorHttpException} from "../app/Exceptions/App/InternalErrorHttpException";
import {ValidationErrorHttpException} from "../app/Exceptions/App/ValidationErrorHttpException";

import { Plugins } from '@capacitor/core'

export default {
  components: {Section, Input, Errors, AlignXCenter, AlignXYCenter, SplitX, Form, Button, Logo, Page},
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
  .signUp__form
    padding 20px
    width 100%
    max-width 400px

  .signUp__body
    padding-top 30px
    padding-bottom 20px

  .signUp__errors
    padding-bottom 20px

</style>
