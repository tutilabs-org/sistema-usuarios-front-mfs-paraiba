<template>
  <div class="tableContent">
    <table>
      <thead>
        <th><p>MATRÍCULA</p></th>
        <th abbr="Nome"><p>NOME COMPLETO</p></th>
        <th><p>E-MAIL</p></th>
        <th><p>SISTEMA</p></th>
        <th><p>CARGO</p></th>
        <th><p>UNIDADE</p></th>
        <th><p>STATUS</p></th>
        <th><p>OPÇÕES</p></th>
      </thead>
      <tbody>
        <tr v-for="u in orderedUsuarios" :key="u.id">
          <td style="display:none"></td>
          <td data-title="Matricula"><p>{{ u.matricula }}</p></td>
          <td data-title="Nome"><p>{{ u.nome_completo }}</p></td>
          <td data-title="E-mail" class="hoverMouse" :title="u.email">
            <p>{{ u.email }}</p>
          </td>
          <td data-title="Sistemas" class="hoverMouse" :title="'Sistemas'">
            <div class="sistemas">
            <div v-for="(s, index) in u.User_Sistema" :key="s.sistema.id">
              <p id="systemp">{{ s.sistema.descricao }}
                <span v-if="index < u.User_Sistema.length - 1" class="comma">, </span>
              </p>
            </div>
          </div>
          </td>
          <td data-title="Cargo"><p>{{ u.cargo.descricao }}</p></td>
          <td data-title="Unidade"><p>{{ u.unidade === 'MAO' ? 'Manaus' : 'Paraíba' }}</p></td>
          <td data-title="Status">
            <p>{{ u.status ? "Ativo" : "Desativado" }}</p>
          </td>
          <td data-title="Opções">
            <div class="opcoes">
              <button @click="edit(u.id)">
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "NuxtTableUsers",
  props: {
    usuarios: Array,
  },
  computed: {
    orderedUsuarios() {
      const order = ["RRIM", "TRYOUT", "REL. TRYOUT", "FTI", "FIT"];
      return this.usuarios.map((user) => {
        user.User_Sistema = user.User_Sistema.sort((a, b) => {          
          return order.indexOf(a.sistema.descricao) - order.indexOf(b.sistema.descricao);
        });
        return user;
      });
    },
  },
  methods: {
    edit(id) {
      this.$router.push(`/users/update/${id}`);
    },
  },
};
</script>
<style scoped>
thead{
  background-color: #ccc8c8;
  height: 8vh;
}

thead th{
  color: #000000;
  padding: 0.5rem 1rem; 
  font-weight: normal; 
}

.opcoes {
  display: flex;
  justify-content: center;
}

.opcoes button {
  background-image: url(../../assets/img/editicon.svg);
  background-size: cover;
  height: 2.5rem;
  width: 2.5rem;
  border: none;
  padding: .5rem;
  border-radius: .5rem;
  display: flex;
  align-items: center;
  gap: .5rem;
  border: 1px solid #cbcbcb;
  cursor: pointer;
}

table, td, th {
  border: none;
}

table {
  margin: 0 auto;
  width: 99%;
  border-spacing: 0px;
  border-radius: 0.5rem;
  overflow: hidden;
}

table td {
  height: 6rem;
}

table tr:nth-child(2n) {
  background: #dfdfdf;
}

td {
  text-align: center;
  padding: 1rem 0rem;
}

th p {
  font-size: 1vw;
}

p {
  font-size: 1.2vw;
}

#systemp {
  font-weight: bold;
}

.comma {
  margin-left: 0;
  padding-left: 0;
}

@media(max-width:768px) {

  tbody tr {
  margin-bottom: 2rem; 
  display: block; 
  }

  td:nth-child(2n), th:nth-child(2n) {
    background-color: #dfdfdf; 
  }


  table {
    padding: 1em;
    border-spacing: 0; 
  }

  table td {
    padding: 1em;
  }

  table tr {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  table tr:nth-child(2n) {
    background: none;
  }

  .opcoes {
    justify-content: end;
  }

  .btns {
    display: flex;
    padding: 10px 30px 10px 30px;
  }

  .tableContent thead {
    display: none;
  }

  .tableButton {
    display: block;
  }

  [data-title] {
    color: var(--black_text);

  }

  .tableContent td {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 70px;
    color: var(--black_text);

  }

  .tableContent td:first-of-type {
    font-weight: bold;
    font-size: 1.2rem;

    display: flex;
    justify-content: center;

  }

  .tableContent td:not(:first-of-type):before {
    content: attr(data-title);
    display: block;
    font-weight: bold;

  }

  .lastTd {
    border-bottom: 1.6px solid var(--green_text);
  }

  p {
    font-size: 1em;
  }

  .sistemas {
    display: flex;
    flex-wrap: wrap; 
    gap: 0.5rem;
  }

  .sistemas div {
    display: inline-block; 
    padding: 0.2rem 0; 
  }

}

@media (max-width: 450px) {
  td {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding:0px;
  }
  p{
    font-size: 3.5vw;
  }
}

</style>

