<template>
  <div class="styleInput">
    <p>Níveis de acesso</p>
    <select v-model="nivel">
      <option value="" disabled>Selecione um sistema</option>
      <option v-for="n in niveis" :key="n.id" :value="n.id">
        {{ n.descricao }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  created() {
    if (this.$props.valor) {
      this.nivel = this.$props.valor;
    }
  },
  data() {
    return {
      nivel: "",
    };
  },
  props: {
    niveis: {
      type: Array,
    },
    valor: String,
  },
  emit: ["watchNivel"],
  watch: {
    nivel(newValue) {
      this.$emit("watchNivel", newValue);
    },
  },
};
</script>

<style scoped>
</style>
