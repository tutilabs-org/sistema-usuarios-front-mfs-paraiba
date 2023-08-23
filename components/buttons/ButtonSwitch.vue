<template>
  <div class="boxButton">
    <p>
      status
      <span v-if="desativado">DESATIVADO</span>
      <span v-else>ATIVADO</span>
    </p>
    <div class="btn_switch" @click="change" :class="{ myStatus: desativado }">
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NuxtButtonSwitch",
  created() {
    this.desativado = this.$props.status;
  },
  props: {
    status: Boolean,
  },
  emit: ["changeStatus"],
  data: () => {
    return {
      desativado: false,
    };
  },
  methods: {
    change() {
      this.desativado = !this.desativado;
      this.$emit("changeStatus", this.desativado);
    },
  },
};
</script>

<style scoped>
.boxButton{
  width: 10rem;
}
.btn_switch {
  width: 6rem;
  height: 3rem;
  background: var(--green);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  padding-left: 0.3rem;
  cursor: pointer;

  transition: 0.2s;
}
.btn_switch :nth-child(1) {
  background: var(--white);
  min-width: 2.5rem;
  min-height: 2.5rem;
  border-radius: var(--circuleRadius);
}
.myStatus {
  background: var(--orange);
  padding-left: 3.2rem;
}
P {
  color: var(--green);
  font-weight: var(--bold);
}
span {
  color: var(--gray_text);
}
</style>
