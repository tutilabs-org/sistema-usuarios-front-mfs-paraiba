<template>
  <div>
    <Header :nome="user.nome_completo" :cargo="user.cargo.descricao" />
    <div class="content">
      <InputSearch @searchColaborador="searchColaborador" />
      <div class="contentButtons">
        <ButtonSwitch :status="status" @changeStatus="changeStatus" />
        <ButtonRegister @register="resgistrarColaborador" />
      </div>
    </div>
    <div class="space" v-if="
      (!status && usuariosAtivos.length > 0) ||
      (status && usuariosInativos.length > 0)
    ">
      <TableUsers v-if="!status" :usuarios="ativos" />
      <TableUsersInativos v-else :usuarios="inativos" />
    </div>
    <div class="space" v-else>
      <h1>Não há usuários cadastrados</h1>
    </div>
  </div>
</template>

<script>
import InputSearch from "~/components/Inputs/InputSearch.vue";
import ButtonSwitch from "~/components/buttons/ButtonSwitch.vue";
import ButtonRegister from "~/components/buttons/ButtonRegister.vue";

import TableUsers from "~/components/Lists/TableUsers.vue";
import TableUsersInativos from "~/components/Lists/TableUsersInativos.vue"
export default {
  components: {
    InputSearch,
    ButtonSwitch,
    ButtonRegister,
    TableUsers,
    TableUsersInativos
  },
  middleware: ["authenticated", "admin"],
  async asyncData({ $auth, redirect, $axios, $toast }) {
    if ($auth.user.nivel_de_acesso.descricao != "admin_master") {
      redirect("/");
      return;
    }

    try {
      const response = await $axios.get("users/list");

      let { usuariosAtivos, usuariosInativos } = response.data.data.users;

      const user = $auth.user;

      usuariosInativos = usuariosInativos.reduce((acc, u) => {
        u.User_Sistema = []
        acc.push(u);
        return acc;
      }, []);

      return { user, usuariosAtivos, usuariosInativos };
    } catch (error) {
      $toast.warning("Usuários não encontrados");
      return;
    }
  },
  data() {
    return {
      status: false,
      inputSearch: "",
    };
  },
  methods: {
    changeStatus(value) {
      this.status = value;
    },
    searchColaborador(value) {
      this.inputSearch = value;

      if (!this.status && this.inputSearch.length > 0) {
        console.log("ativos");
      }

      if (this.status && this.inputSearch.length > 0) {
        console.log("inativos");
      }
    },
    resgistrarColaborador() {
      this.$router.push("/users/register");
    },
  },
  computed: {
    ativos() {
      return this.usuariosAtivos.filter(
        (u) =>
          u.matricula.toLowerCase().includes(this.inputSearch.toLowerCase()) ||
          u.email.toLowerCase().includes(this.inputSearch.toLowerCase()) ||
          u.nome_completo.toLowerCase().includes(this.inputSearch.toLowerCase()) ||
          u.cargo.descricao.toLowerCase().includes(this.inputSearch.toLowerCase())
      );
    },
    inativos() {
      return this.usuariosInativos.filter(
        (u) =>
          u.matricula.toLowerCase().includes(this.inputSearch.toLowerCase()) ||
          u.email.toLowerCase().includes(this.inputSearch.toLowerCase()) ||
          u.nome_completo.toLowerCase().includes(this.inputSearch.toLowerCase()) ||
          u.cargo.descricao.toLowerCase().includes(this.inputSearch.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.content {
  display: grid;
  grid-template: 1fr / 20rem 1fr;
  align-items: flex-end;
  padding: 1rem var(--negativeSpace);
}

.contentButtons {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
}

.space {
  padding: 0 var(--negativeSpace);
}

@media (max-width: 678px) {
  .content {
    display: grid;
    grid-template: 0.5fr 1fr/ 1fr;
    gap: 1rem;
  }
}
</style>
