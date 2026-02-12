<template>
  <button @click.prevent="() => $emit('cancel')">Cancelar</button>
</template>

<script>
export default {
  name: "NuxtButtonCancel",
  emit: ["cancel"],
};
</script>
<style scoped>
button {
  width: 6rem;
  height: 3rem;
  background: var(--gray);
  color: var(--black-text);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  font-weight: var(--bold);
  font-size: 1rem;
}
button:active {
  filter: brightness(0.9);
}
</style>
