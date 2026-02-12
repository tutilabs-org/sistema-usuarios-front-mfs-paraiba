import cargos from "./cargos"

export default (cargo) => {

  const valid = cargos.find(c => c.nome_cargo === cargo)

  if (!valid) {
    return true
  }

  return false

}
