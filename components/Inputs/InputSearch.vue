<template>
<label for="inputSearch">
  <div class="search">
    <input
      type="text"
      name=""
      id="inputSearch"
      placeholder="Pesquisar Colaborador"
      v-model="item"
    />
    <img src="~/assets/img/iconLupa.svg" alt="">
  </div>
</label>
</template>
<script>
export default {
  emit: ["searchColaborador"],
  data() {
    return {
      item: "",
    };
  },
  watch: {
    item(newValue) {
      this.$emit("searchColaborador", newValue);
    },
  },
};
</script>

<style scoped>
.search {
  width: 18rem;
  height: 3rem;
  background: var(--gray);
  padding:var(--paddingInput) 1rem;
  border-radius: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.search input {
  background: 0;
}
</style>
