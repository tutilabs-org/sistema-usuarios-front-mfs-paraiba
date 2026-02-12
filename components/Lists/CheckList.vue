<template>
  <div class="container">
    <div class="btnCheck" v-for="(s, index) in sistemas" :key="index">
      <div
        class="iconCheck"
        :class="{
          btnCheck_green: user_s.some(
            (system) => system.sistema.descricao === s.descricao
          ),
        }"
        @click="check($event, s, index)"
      ></div>
      <div class="text">
        <h3>{{ s.descricao }}</h3>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "NuxtCheckList",
  created() {
    if (this.$props.user_s || this.$props.user_s.length > 0) {
      this.$props.user_s.forEach((element) =>
        this.sis.push(element.sistema.id)
      );
      this.$emit("watchSistemas", this.sis);
    }
  },
  props: {
    sistemas: Array,
    user_s: Array,
  },
  data() {
    return {
      sis: [],
    };
  },
  emit: ["watchSistemas"],
  methods: {
    check(event, s, index) {
      const icon = event.target;

      icon.classList.toggle("btnCheck_green");

      if (icon.classList.length == 1) {
        const index = this.sis.findIndex((i) => i.id == s.id);

        this.sis.splice(index, 1);
        this.$emit("watchSistemas", this.sis);

        return;
      }

      this.sis.push({
        index: index,
        id: s.id
      });
      this.$emit("watchSistemas", this.sis);
    },
  },
};
</script>

<style scoped>
.container {
  background: var(--white);
  height: 15rem;
  border-radius: var(--radius);
  padding: calc(var(--paddingInput) * 2);
  box-shadow: var(--shadow);
  overflow-y: scroll;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-content: space-between;
}
.btnCheck {
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
  width: fit-content;
}
.iconCheck {
  width: 2rem;
  height: 2rem;
  background: var(--gray);
  border-radius: 0.5rem;
}
.btnCheck_green {
  background-image: url(../../assets/img/check_box.svg);
  background-repeat: no-repeat;
  background-size: 85%;
  background-position: center;
  background-color: var(--green);
}
@media (max-width: 400px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
