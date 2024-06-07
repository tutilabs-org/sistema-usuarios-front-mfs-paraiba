<template>
  <div>
    <Header :nome="user.nome_completo" :cargo="user.cargo.descricao" />
    <div class="container_card">
      <div class="frameHub">
        <MoldeAnimation />
      </div>
      <div class="content_scroll">
        <div class="containerButton" v-for="s in sistemas" :key="s.sistema.id">
          <ButtonReport :comReport="`${s.sistema.descricao}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonReport from "~/components/buttons/ButtonReport.vue";
export default {
  async asyncData({ $auth, redirect }) {
    if ($auth.user.nivel_de_acesso.descricao == "admin_master") {
      redirect("/users/table");
      return;
    }


    let user = $auth.user;

    let sistemas = user.User_Sistema;

    return { user, sistemas };
  },
  middleware: "authenticated",
  components: { ButtonReport },
  data() {
    return {};
  },
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 1rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--white);
  border-radius: 1rem;
}

.container_card {
  width: 100%;
  height: calc(100vh - 23vh);
  background: var(--gradient-green);
  padding: var(--negativeSpace) var(--negativeSpace) 0 var(--negativeSpace);

  display: grid;
  grid-template: 1fr / 22rem 1fr;
  gap: var(--negativeSpace);
}

.containerButton {
  height: fit-content;
}

.content_scroll {
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  gap: 2rem;

  height: fit-content;
  max-height: 100%;

  overflow: hidden;
  overflow-y: scroll;

  padding-right: 8vw;
}

.frameHub {
  border-radius: 10px;
  width: 22rem;
  height: 22rem;
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 926px) {
  .content_scroll {
    padding-right: 0vw;
  }
}

@media (max-width: 768px) {
  .content_scroll {
    grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
  }
}

@media (max-width: 666px) {
  .container_card {
    grid-template: 23rem / 1fr;
  }
}
</style>
