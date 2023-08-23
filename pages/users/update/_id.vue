<template>
  <div>
    <div class="containerRegister">
      <div class="icon">
        <img src="~assets/img/user.svg" alt="" />
      </div>
      <div class="inform">
        <h1>Editar</h1>
      </div>
    </div>
    <form @submit.prevent="editUser">
      <div class="columInputs">
        <p class="title titleTop">Dados do usuários</p>
        <inputText :titulo="'Matricula'" :status="statusMatricula" :valor="user.matricula" @newValue="watchMatricula" />
        <inputText :titulo="'Nome Completo'" :status="statusNome" @newValue="watchNome" :valor="user.nome_completo" />
        <inputText :titulo="'E-mail'" :status="statusEmail" @newValue="watchEmail" :valor="user.email" />
        <inputTextCargo @newValue="watchCargo" :titulo="'Cargo'" :status="statusCargo" :valor="user.cargo.descricao" />
      </div>
      <div class="containerCheck">
        <p class="title">Sistema</p>

        <div class="headerCheck">
          <div class="styleGap">
            <InputSelect :niveis="niveis" @watchNivel="watchNivel" :valor="user.nivel_de_acesso.id" />
            <ButtonSwitch :status="!user.status" @changeStatus="watchStatus" />
            <ButtonSwitchResetPassword :status="true" @changeStatus="watchSenha" />
          </div>
          <div style="text-align: end">
            <p>Data de criação</p>
            <h4 class="date">{{ day }}</h4>
          </div>
        </div>
        <div class="boxCheck">
          <CheckList :sistemas="sistemas" @watchSistemas="watchSistemas" :user_s="user.User_Sistema" />
        </div>
        <div class="rowsButtons">
          <ButtonCancel @cancel="cancel" />
          <ButtonSave />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import InputText from "~/components/Inputs/InputText.vue";
import InputTextCargo from "~/components/Inputs/InputTextCargo.vue";
import InputSelect from "~/components/Inputs/InputSelect.vue";
import InputPassWords from "~/components/Inputs/InputPasswords.vue";

import ButtonSwitch from "~/components/buttons/ButtonSwitch.vue";
import ButtonSwitchResetPassword from "~/components/buttons/ButtonSwitchResetPassword.vue";
import ButtonCancel from "~/components/buttons/ButtonCancel.vue";
import ButtonSave from "~/components/buttons/ButtonSave.vue";

import CheckList from "~/components/Lists/CheckList.vue";

import ValidateCargo from "~/utils/ValidateCargos";

import dayjs from "dayjs";

export default {
  async asyncData({ $axios, $toast, route }) {
    const responseNivel = await $axios.get("system/access_levels");

    if (responseNivel.data.status == "error") {
      $toast.warning("Erro na requisição");
      return { nivel: [] };
    }

    const id = route.params.id;
    const responseSistema = await $axios.get("system/all");
    const response = (await $axios.$get(`users/find/${id}`)).data;

    const niveis = responseNivel.data.data.AcessLevels;
    const sistemas = responseSistema.data.data.sistemas;
    const user = response.user;

    const day = dayjs(user.criado_em).format("DD/MM/YYYY");

    return { niveis, sistemas, day, user, id };
  },
  middleware: ["authenticated", "admin"],
  components: {
    InputText,
    InputTextCargo,
    InputSelect,
    InputPassWords,

    ButtonSwitch,
    ButtonSwitchResetPassword,
    ButtonCancel,
    ButtonSave,

    CheckList,
  },
  data() {
    return {
      matricula: "",
      statusMatricula: false,
      nome: "",
      statusNome: false,
      statusSenha: true,
      email: "",
      statusEmail: false,
      statusCargo: false,
      nivel: "",
      sistemasSelecionados: [],
      status: false,
    };
  },
  methods: {
    watchMatricula(value) {
      this.statusMatricula = false;
      this.matricula = value;
    },
    watchSenha(value) {
      this.statusSenha = false;
      this.senha = value;
    },
    watchNome(value) {
      this.statusNome = false;
      this.nome = value;
    },
    watchSenha(value) {
      this.statusSenha = value;
    },
    watchEmail(value) {
      this.statusEmail = false;
      this.email = value;
    },
    watchCargo(value) {
      this.statusCargo = false;
      this.cargo = value;
    },
    watchNivel(value) {
      this.nivel = value;
    },
    watchStatus(value) {
      this.status = value;
    },
    watchSistemas(value) {
      this.sistemasSelecionados = value;
    },
    cancel() {
      this.$router.push("/users/table");
    },
    async editUser() {
      const errors = [];

      if (!this.matricula || this.matricula.length < 4) {
        this.statusMatricula = true;
        errors.push(
          "Matricula inválida, a matricula deve ter no mínimo 3 digitos"
        );
      }

      if (!this.nome || this.nome.length < 2) {
        this.statusNome = true;
        errors.push("Nome completo inválido, é vazio ou muito curto");
      }

      let emailStatus;
      if (this.email) {
        const emailValido = /\S+@\S+\.\S+/;
        emailStatus = emailValido.test(this.email);
      }
      if (this.email.length < 8 || !emailStatus) {
        this.statusEmail = true;
        errors.push("Email inválido");
      }
      const valid = ValidateCargo(this.cargo);
      if (valid) {
        this.statusCargo = true;
        errors.push("Cargo não consta na lista");
      }
      if (!this.nivel) {
        errors.push("Selecione um nível de usuário");
      }

      if (!this.status && this.sistemasSelecionados.length < 1) {
        errors.push("Não há sistemas selecionados");
      }

      if (errors.length > 0) {
        errors.forEach((e) => {
          this.$toast.info(e);
        });
        return;
      }

      try {
        if (!this.statusSenha) {
          await this.$axios.put(`users/edit/${this.id}`, {
            name: this.nome,
            email: this.email,
            matricula: this.matricula,
            senha: "tuti123",
            cargo: this.cargo,
            IdNivelDeAcesso: this.nivel,
            sistemas: this.sistemasSelecionados,
            userStatus: !this.status,
          });
        } else {
          await this.$axios.put(`users/edit/${this.id}`, {
            name: this.nome,
            email: this.email,
            matricula: this.matricula,
            senha: "",
            cargo: this.cargo,
            IdNivelDeAcesso: this.nivel,
            sistemas: this.sistemasSelecionados,
            userStatus: !this.status,
          });
        }

        this.$toast.success("Usuário editado com sucesso");
        this.$router.push("/users/table");
      } catch (error) {
        this.$toast.warning("Matricula ou Email já cadastrados no sistema");
      }
    },
  },
};
</script>
<style scoped>
.containerRegister {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem var(--negativeSpace);
  width: 100%;
  height: 14vh;
}

.inform h3 {
  font-weight: var(--regular);
}

.icon img {
  width: 4.5rem;
}

.containerGrid {
  display: grid;
  grid-template: 1fr / 1fr 1fr;
}

form {
  background: var(--bg);
  padding: 2rem var(--negativeSpace);

  display: grid;
  grid-template: 1fr / 19rem minmax(37rem, 60rem);
}

.title {
  color: var(--green);
  font-weight: var(--bold);
}

.headerCheck {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}

.headerCheck .styleGap {
  display: flex;
  gap: 1rem;
}

.columInputs {
  display: grid;
  gap: 1rem;
  border-right: 3px solid var(--gray);
}

.containerCheck {
  padding: 0 var(--negativeSpace);
  border-right: 3px solid var(--gray);
}

.boxCheck {
  margin-top: 1rem;
}

.rowsButtons {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
}

@media (max-width: 865px) {
  form {
    height: auto;
    grid-template: 0.5fr 1fr / 1fr;
    gap: 2rem;
  }

  .columInputs {
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    border: none;
  }

  .titleTop {
    position: absolute;
    top: 23.5vh;
  }

  .containerCheck {
    border: none;
  }
}

@media (max-width: 564px) {
  .headerCheck {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  .styleGap {
    flex-direction: column;
  }

  .containerCheck {
    padding: 0;
  }
}
</style>
