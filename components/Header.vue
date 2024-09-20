<template>
  <header>
    <div id="logo"></div>
    <div id="login">
      <div id="sublogin">
        <h1>{{ nome }}</h1>
        <h2>{{ cargo }}</h2>
      </div>
      <button @click="logout"></button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    nome: String,
    cargo: String,
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/login");
      localStorage.removeItem('unidade');
    },
  },
};
</script>

<style scoped>
:root {
  --background-f: #393939;
 
}

* {
  box-sizing: border-box;
}

button,
input {
  appearance: none;
  background: none;
  border: none;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
  align-items: center;
  background-color: #ffff;
  height: 4.7em;
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid var(--border);
}

#login {
  display: flex;
  column-gap: 20px;
  align-items: center;
  overflow: hidden;
  height: 10.54em;
}

#logo {
  background-image: url(../assets/img/engDigital.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 8.3em;
  height: 10.6em;
}

h1 {
  color: var(--background-f);
  text-align: right;
  font-family: Inter;
  font-size: 1.4em;
  font-weight: 600;
}

h2 {
  text-align: right;
  font-family: Inter;
  font-size: 0.8em;
  font-weight: 400;
}

button {
  cursor: pointer;
  background-image: url(../assets/img/SignOut.svg);
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: center;
  width: 2.8em;
  height: 4.8em;
}

@media (max-width: 949px) {
  header {
    height: 6.5em;
    padding: 20px 30px;
  }

  h1 {
    font-size: 1.7em;
  }

  h2 {
    font-size: 1.1em;
  }

  button {
    background-size: 120%;
    width: 2.8em;
    height: 4.8em;
  }
}

@media (max-height: 770px) {
  h1 {
    font-size: 1.4em;
  }
}

@media (max-width: 402px) {
  header {
    justify-content: space-between;
    height: 20vw;
    padding: 10px 10px;
    width: 100%; 
    margin: auto; 
    box-sizing: border-box; 
  }

  h1 {
    font-size: 3.5vw;
  }

  h2 {
    font-size: 3vw;
  }

  button {
    background-size: 120%;
    width: 2em;
    height: 4em;
  }

  #logo {
    width: 28vw;
    height: 4em;
  }

  #login {
    justify-content: center;
    width: auto;
    padding:0;
    height: auto;
    margin-left: auto;
  }

  header {
  display: flex;
  flex-wrap: wrap;
  height: auto;
}
}


</style>
