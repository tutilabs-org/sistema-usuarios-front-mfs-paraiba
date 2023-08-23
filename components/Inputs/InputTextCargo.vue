<template>
  <label for="input">
    <div class="styleInput" :class="{ borderError: status }">
      <p>{{ titulo }}</p>

      <input type="text" list="complete" class="input" v-model="value" />
      <datalist id="complete">
        <option
          v-for="item in cargos"
          :key="item.id_cargo"
          :value="item.nome_cargo"
        ></option>
      </datalist>
    </div>
  </label>
</template>

<script>
import cargos from "~/utils/cargos";

export default {
  created() {
    if (this.$props.valor) {
      this.value = this.$props.valor;
    }
  },
  data() {
    return {
      cargos,
      value: "",
    };
  },
  props: {
    titulo: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    valor: String,
  },
  emit: ["newValue"],
  watch: {
    value(newValue) {
      this.$emit("newValue", newValue);
    },
  },
};
</script>

<style scoped>
.input label {
  color: black;
}
</style>
