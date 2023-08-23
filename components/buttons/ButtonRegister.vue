<template>
  <button @click="()=>this.$emit('register')">Registrar</button>
</template>

<script>
export default {
  name: "NuxtButtonRegister",
  emit: ["register"]
};
</script>
<style scoped>
button {
  width: 15rem;

  height: 3rem;
  background: var(--green);
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
@media(max-width: 678px){
  button{
    width: 10rem;
  }
}
</style>
