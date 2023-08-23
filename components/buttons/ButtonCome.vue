<template>
  <button type="submit">Entrar</button>
</template>

<script>
export default {
  name: "NuxtButtonCome",
};
</script>
<style scoped>
button {
  width: 8rem;
  height: 4rem;
  background: var(--blue);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  color: var(--white);
  font-weight: var(--bold);
  font-size: 1rem;
}
button:active {
  filter: brightness(0.9);
}

@media screen and (min-width: 320px) {
  button {
    width: 6rem;
    height: 3rem;
    font-size: 0.9rem;
  }
}
</style>
