<template>
  <div :class="{ borderError: status, styleInput: true }" class="password-container">
    <p>Senha</p>
    <div class="input-wrapper">
      <input :type="passwordVisible ? 'text' : 'password'" autocomplete="off" v-model="value" />
      <button type="button" class="toggle-password" @click="togglePasswordVisibility">
        <img :src="passwordVisible ? eyeSlashIcon : eyeIcon" alt="Toggle visibility" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtInputPasswords",
  emit: ["newValue"],
  data() {
    return {
      value: "",
      passwordVisible: false, 
      eyeIcon: require('~/assets/img/eye.svg'), 
      eyeSlashIcon: require('~/assets/img/eye-slash.svg'),   
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
      required: true,
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>

<style scoped>
.password-container {
  position: relative;
  display: flex;
  flex-direction: column;
}

.input-wrapper {
  position: relative;
}

input {
  padding-right: 40px;
  width: 100%;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width:2.2em;
}

.toggle-password img {
  width: 100%;
}
</style>
