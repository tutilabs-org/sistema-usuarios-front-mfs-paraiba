import unidades from "./unidades";

export default (sigla) => {
  const valid = unidades.find((u) => u.sigla === sigla);

  if (!valid) {
    return true;
  }

  return false;
};
