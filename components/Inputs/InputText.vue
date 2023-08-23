<template>
  <label for="input">
    <div class="styleInput" :class="{ borderError: status }">
      <p>{{ titulo }}</p>

      <input type="text" class="input" v-model="value" />
    </div>
  </label>
</template>

<script>
export default {
  mounted() {
    if (this.$props.valor) {
      this.value = this.$props.valor;
    }
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
  data() {
    return {
      value: "",
    };
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
