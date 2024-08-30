<template>
  <div>
    <Header :nome="user.nome_completo" :cargo="user.nivel_de_acesso.descricao" />
    <main>
          <div class="containerButton" v-for="s in sistemas" :key="s.sistema.id">
            <ButtonReport :comReport="`${s.sistema.descricao}`" />
          </div>
    </main>
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
main {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, auto);
    gap: 2.7vh; 
    width: 100%;
    margin: auto;
    padding-top: 7vh;
    padding-bottom: 7vh;
}

@media (max-width: 1322px) {
    main {
        justify-content: center;
        grid-template-columns: repeat(3, auto);        
    }
}

@media (max-width: 989px) {
    main {
        justify-content: center;
        grid-template-columns: repeat(2, auto);
        column-gap: 5vw;    
    }
}

@media (max-width: 692px) {
    main {
        justify-content: center;
        grid-template-columns: repeat(1, auto);
        row-gap: 10vw; 
    }
}

</style>
