export default function ({ $axios, $toast, $auth }) {

  $axios.onError(err => {

    if (!$auth.user) {
      return
    }
    if (err.response.status === 401) {
      $toast.warning("Token expirado")
    }
  })
}
