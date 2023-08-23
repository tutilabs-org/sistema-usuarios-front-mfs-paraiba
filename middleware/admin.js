
export default async ({ redirect, $auth }) => {

  const u = await $auth.user.nivel_de_acesso.descricao

  if (u != "admin_master") {
    redirect("/")
    return
  }


}
