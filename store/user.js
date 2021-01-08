export const state = () => ({
  token: localStorage.getItem('token'),
  user: localStorage.getItem('user')
})

export const mutations = {
  logOut (state) {
    state.token = null

    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },
  signIn (state, { token, user }) {
    state.token = token
    state.user = user

    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
  }
}
