export default function ({ $axios, store, redirect }) {
  $axios.onRequest(config => {
    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    config.timeout = 5000 // default is `0` (no timeout)
  })

  $axios.onError(error => {
    if (error.response.status === 400 && error.response.data.status_code === 401) {
      this.$store.commit('user/logOut')
      redirect('/login')
    }
  })
}
