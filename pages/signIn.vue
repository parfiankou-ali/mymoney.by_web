<template>
  <Page>
    <AlignXYCenter>
      <div class="signIn__form">
        <Form v-slot:form="formSlot" request="user.signIn" method="post" :on-success="signIn" :on-error="handleError">
          <Section margin-bottom-large>
            <AlignXCenter>
              <Logo />
            </AlignXCenter>
          </Section>
          <Section margin-bottom-tiny>
            <Input name="email" type="email" :placeholder="$t('Auth.Email')" primary large autofocus />
          </Section>
          <Section margin-bottom-small>
            <Input name="password" type="password" :placeholder="$t('Auth.Password')" primary large />
          </Section>
          <Section margin-bottom-small v-if="errors.length">
            <Errors :errors="errors" />
          </Section>
          <Section margin-bottom-small>
            <Button primary large block :show-throbbler="formSlot.form.isProcessingRequest" @click.native="formSlot.form.submit">{{ $t('Auth.SignIn') }}</Button>
          </Section>
          <Section>
            <NuxtLink to="/signUp" class="block">
              <Button secondary large block>{{ $t('Auth.SignUp') }}</Button>
            </NuxtLink>
          </Section>
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
import Section from "../components/Layout/Section";
import Input from "../components/Standart/Input";

export default {
  components: {Input, Section, Errors, AlignXCenter, AlignXYCenter, SplitX, Form, Button, Credentials, Logo, Page},
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
