<template>
  <div class="login-page">
    <div class="img-pos">
      <img src="~assets/img/background_login.svg" />
    </div>
    <div class="login-inputs">
      <div class="login-title">
        <img src="~assets/img/user.svg" />
        <h1>Login</h1>
      </div>

      <form @submit.prevent="login">
        <input-text :titulo="'Matricula'" :status="statusMatricula" @newValue="novaMatricula" />
        <input-passwords @newValue="novaSenha" :status="statusSenha" />
        <buttonCome />
      </form>
    </div>
  </div>
</template>

<script>
import ButtonCome from "~/components/buttons/ButtonCome.vue";
import InputPasswords from "~/components/Inputs/InputPasswords.vue";
import InputText from "~/components/Inputs/InputText.vue";

export default {
  layout: "login",
  components: { InputPasswords, InputText, ButtonCome },
  methods: {
    novaMatricula(valor) {
      this.user.matricula = valor;

      if (this.user.matricula.length < 3 && this.user.matricula.length > 0) {
        this.statusMatricula = true;
        return;
      }

      this.statusMatricula = false;
    },
    novaSenha(valor) {
      this.user.password = valor;

      if (this.user.password.length < 6 && this.user.password.length > 0) {
        this.statusSenha = true;
        return;
      }

      this.statusSenha = false;
    },
    async login() {
      if (!this.user.matricula || !this.user.password) {
        this.$toast.warning("Matrícula ou senha inválidas");

        return;
      }
      try {
        if (this.$auth.strategy.token.get()) {
          this.$auth.strategy.token.reset();
        }
        const response = await this.$auth.loginWith("local", {
          data: this.user,
        });

        if (response.data.data.status == "error") {
          this.$toast.warning("Matrícula ou senha inválidas");
          return;
        }

        this.$auth.strategy.token.set(response.data.data.token);
        this.$axios.setHeader("Authorization", response.data.data.token);

        if (!response.data.data.user.status) {
          await this.$auth.logout();
          this.$toast.warning("Usuário não autorizado");
          this.$router.push("/login");
          return;
        }

        this.$toast.success("Logado com sucesso");
        this.$router.push("/");
        localStorage.setItem('unidade', response.data.data.user.unidade)

        return;
      } catch (e) {
        this.$toast.warning("Matrícula ou senha inválidas");
        await this.$auth.logout();
        this.$router.push("/login");
        return;
      }
    },
  },
  data() {
    return {
      statusMatricula: false,
      statusSenha: false,
      user: {
        matricula: "",
        password: "",
      },
    };
  },
  auth: false,
};
</script>

<style scoped>
.login-page {
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;
}

.login-inputs {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: var(--white);
}

.login-inputs form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  align-items: flex-end;
}

.img-pos {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  background: hsla(0, 0%, 100%, 1);
  background: linear-gradient(180deg,
      hsla(0, 0%, 100%, 1) 0%,
      hsla(0, 0%, 94%, 1) 100%);
}

.img-pos img {
  width: 100%;
}

.login-title {
  display: flex;
  gap: 2rem;
  width: 16rem;
  align-items: center;
  justify-content: flex-start;
}

.login-title img {
  height: 5rem;
}

.login-title h1 {
  font-size: 3rem;
}

@media (max-width: 768px) {
  .login-page {
    display: block;
  }

  .img-pos {
    height: 30vh;
    display: flex;
    justify-content: center;
  }

  .img-pos img {
    position: relative;
    top: max(2rem, 20vw);
    width: max(23rem, 70vw);
  }

  .login-inputs {
    height: 70vh;
  }
}
</style>
