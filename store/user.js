import Cookies from 'js-cookie'

export const state = () => ({
  token: null,
  user: null
})

export const mutations = {
  logOut (state) {
    state.token = null

    Cookies.remove('token')
    Cookies.remove('user')
  },
  signIn (state, { token, user }) {
    state.token = token
    state.user = user

    Cookies.set('token', JSON.stringify(token), { sameSite: 'Strict', secure: true })
    Cookies.set('user', JSON.stringify(user), { sameSite: 'Strict', secure: true })
  }
}
