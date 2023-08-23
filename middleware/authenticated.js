export default async ({ redirect, $axios, $auth, $toast}) => {
  try {

    const u = await $axios.$post("session/verify")

    $auth.setUser(u.user)

  } catch (error) {

    $toast.warning("Usuário não autorizado")
    return redirect("/login")
  }

}
