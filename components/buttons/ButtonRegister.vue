<template>
  <div>
    <div>
      <p>registrar: </p>
    </div><button @click="()=>this.$emit('register')"></button>
  </div>
</template>

<script>
export default {
  name: "NuxtButtonRegister",
  emit: ["register"]
};
</script>
<style scoped>

div {
  display: flex;
  width: calc(100% - 3rem);
  justify-content: flex-end;
  column-gap: 1em;
}

p{
  color: var(--dark);
  font-weight: var(--bold);
}

button {
  background-image: url(../../assets/img/person_add.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;
  width: 3rem;
  height: 3rem;
  background-color: var(--green);
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
    width: 3rem;
    height: 3rem;
  }
}
</style>
