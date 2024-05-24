<template>
  <div class="tableContent">
    <table cellpadding="0">
      <thead>
        <th>Matrícula</th>
        <th abbr="Nome">Nome Completo</th>
        <th>E-mail</th>
        <th>Sistemas</th>
        <th>Cargo</th>
        <th>Unidade</th>
        <th>Status</th>
        <th>Opções</th>
      </thead>
      <tbody>
        <tr v-for="u in usuarios" :key="u.id">
          <td style="display:none"></td>
          <td data-title="Matricula">{{ u.matricula }}</td>
          <td data-title="Nome">{{ u.nome_completo }}</td>
          <td data-title="E-mail" class="hoverMouse" :title="u.email">
            {{ u.email }}
          </td>
          <td data-title="Sistemas" class="hoverMouse" :title="'Sistemas'">
            <div class="sistemas" v-for="s in u.User_Sistema" :key="s.sistema.id">
              <div>
                {{ s.sistema.descricao }}
              </div>
            </div>
          </td>
          <td data-title="Cargo">{{ u.cargo.descricao }}</td>
          <td data-title="Cargo">{{ u.unidade === 'MAO' ? 'Manaus' : 'Paraíba' }}</td>
          <td data-title="Status">
            {{ u.status ? "Ativo" : "Desativado" }}
          </td>
          <td data-title="Opções">
            <div class="opcoes">
              <button @click="edit(u.id)">
                <img src="~/assets/img/iconEdit.svg" alt="">
                Editar
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
  methods: {
    edit(id) {
      this.$router.push(`/users/update/${id}`);
    },
  },
};
</script>
<style scoped>
.opcoes {
  display: flex;
  justify-content: center;
}

.opcoes button {
  background: #ffffff;
  border: none;
  padding: .5rem;
  border-radius: .5rem;
  display: flex;
  align-items: center;
  gap: .5rem;
  border: 1px solid #cbcbcb;
}

table,
td,
th {
  border: none;
}

table {
  border-spacing: 0px;
}

.sistemas div:after {
  content: ", ";
}

.sistemas div:nth-last-child(-n + 1):after {
  content: " ";
}

table {
  width: 100%;
}

table td {
  height: 6rem;

}

table tr:nth-child(2n) {
  background: #dfdfdf;
}

td {
  text-align: center;
}

@media(max-width:768px) {

  table td {
    border-bottom: 0.4px solid rgba(0, 0, 0, 0.199);
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
}
</style>
