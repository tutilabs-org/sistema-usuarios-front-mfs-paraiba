<template>
  <label for="input">
    <div class="styleInput" :class="{ borderError: status }">
      <p>{{ titulo }}</p>

      <input type="text" list="unidade" class="input" v-model="value" />
      <datalist id="unidade">
        <option v-for="(unidade, index) in unidades" :key="index" :value="unidade.sigla">
          {{ unidade.unidade }}
        </option>
      </datalist>
    </div>
  </label>
</template>

<script>
import unidades from "~/utils/unidades";

export default {
  // created() {
  //   if (this.$props.valor) {
  //     this.value = this.$props.valor;
  //   }
  // },
  data() {
    return {
      unidades,
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
