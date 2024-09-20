<template>
  <div class="boxButton" @click="change">
    <p>
      Reset senha:
    </p>
  <span style="color: var(--red);" v-if="desativado">DESATIVADO</span>
    <span style="color:var(--green)" v-else>ATIVADO</span>
    <div class="btn_switch":class="{ myStatus: desativado }">
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
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 1em;
  padding: 0px 1em;
}
.btn_switch {
  width: 4.4rem;
  height: 1.8rem;
  background: var(--green);
  border-radius: 1.6rem;
  display: flex;
  align-items: center;
  padding-left: 0.3rem;
  cursor: pointer;
  transition: 0.2s;
}
.btn_switch :nth-child(1) {
  background: var(--white);
  min-width: 1.3rem;
  min-height: 1.3rem;
  border-radius: var(--circuleRadius);
}
.myStatus {
  background: var(--orange);
  padding-left: 2.8rem;
}
P {
  color: var(--dark);
  font-weight: var(--bold);
}
span {
  color: var(--gray_text);
  font-weight: var(--bold);
  cursor: pointer;
}
</style>
