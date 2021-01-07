import CookieParser from 'cookieparser'

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let token = null
    let user = null

    if (req.headers.cookie) {
      const cookies = CookieParser.parse(req.headers.cookie)
      try {
        token = JSON.parse(cookies.token)
        user = JSON.parse(cookies.user)
      } catch (error) {
        // No valid cookie found
      }
    }
    commit('user/signIn', { token, user })
  }
}
