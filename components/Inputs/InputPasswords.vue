<template>
  <div :class="{ borderError: status, styleInput: true }">
    <p>Senha</p>
    <input type="password" autocomplete="off" v-model="value" />
  </div>
</template>

<script>
export default {
  name: "NuxtInputPasswords",
  emit: ["newValue"],
  data() {
    return {
      value: "",
    };
  },
  watch: {
    value(newValue) {
      this.$emit("newValue", newValue);
    },
  },
  props: {
    status: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.input label {
  color: black;
}
</style>
