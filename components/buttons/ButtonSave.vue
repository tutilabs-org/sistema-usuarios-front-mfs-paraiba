<template>
  <button type="submit">Salvar</button>
</template>

<script>
export default {
  name: "NuxtButtonSave",
};
</script>
<style scoped>
button {
  width: 6rem;
  height: 3rem;
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
</style>
