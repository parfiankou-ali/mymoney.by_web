export default function ({ $axios, store, redirect }) {
  $axios.onRequest(config => {
    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    config.timeout = 5000 // default is `0` (no timeout)

    // `baseURL` will be prepended to `url` unless `url` is absolute.
    // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
    // to methods of that instance.
    config.baseURL = process.env.API_URL + '/' + process.env.API_VERSION + '/'
  })

  $axios.onError(error => {
    if (error.response.status === 400 && error.response.data.status_code === 401) {
      this.$store.commit('user/logOut')
      redirect('/signIn')
    }
  })
}
