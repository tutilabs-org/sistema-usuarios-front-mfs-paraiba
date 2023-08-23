<template>
  <div class="container">
    <div class="icon">
      <img src="~assets/img/user.svg" alt="" />
    </div>
    <div class="inform">
      <h1>{{nome}}</h1>
      <h3>{{cargo}}</h3>
    </div>
    <div class="bntExit" @click="logout">
        <img src="~/assets/img/iconExit.svg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    nome: String,
    cargo: String
  },
  methods:{
    async logout(){
      await this.$auth.logout()
      this.$router.push("/login")
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  gap: 2rem;
  border-bottom: 2px solid var(--gray);
  padding: 1rem var(--negativeSpace);
  width: 100%;
  height: 13vh;
}
.bntExit{
  margin-left: auto;
  width: 3rem;
  cursor: pointer;
}
.bntExit img{
  width: 100%;
}
.inform h3 {
  font-weight: var(--regular);
}
.icon img {
  width: 4.5rem;
}
@media(max-width: 768px) {
  .container {
    gap: 1rem;
  }
  .container h1{
    font-size: 1rem;
  }
}
</style>
