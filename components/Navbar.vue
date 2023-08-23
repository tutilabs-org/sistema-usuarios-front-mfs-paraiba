<template>
  <nav>
      <NuxtLink to="/">
        <img src="~/assets/img/iconMFS.svg" alt="icon-mfs">
      </NuxtLink>
      <h1>Sistema de Gerenciamento de Molde</h1>
  </nav>
</template>
<script>
  export default{
    data:() => {
      return{

      }
    }
  }
</script>
<style scoped>
    nav{
        background: var(--green);
        width: 100%;
        height: 10vh;
        position: fixed;
        top: 0;
        padding: 0 var(--negativeSpace);
        display: flex;
        align-items: center;
        gap: 1rem;
        color:var(--white);
    }
    .btnManu{
        cursor: pointer;
    }
    .btnManu img{
        width: 100%;
    }
    .cardMenu{
        width: 100%;
        height: 0vh;
        position: fixed;
        top: 10vh;
        background: var(--white);
        padding: 0 var(--negativeSpace) 0;
        overflow: hidden;
        transition: .5s;
    }
    .showMenu{
        height: 70vh;
    }
    .btnOff{
        filter: invert(1);
        opacity: 0.2;

    }
    .containerRelatorio{
        width: 100%;
        display: grid;
        grid: 1fr / 20rem 1fr 20rem
    }
    .scrollRelatorio{
        border-right: 2px solid var(--gray);
        height: 100%;
    }
    .scroll{
        margin-top: 2rem;
        height: 20rem;
        padding-right: 2rem;
    }
    .rowsBnt{
        color: var(--blue);
        font-size: 1.5rem;
        cursor: pointer;
        border-bottom: 2px solid var(--gray);
    }
    .optionRelatorio{
        padding-left: var(--negativeSpace);
        border-right: 2px solid var(--gray);
    }
     ul{
        display: grid;
        grid-auto-rows: 1fr;
        grid-template-columns: repeat(3, 1fr);
        gap:1rem;
        margin-top: 2rem;
     }
     li{
         list-style: none;
         color: var(--blue);
         cursor: pointer;
     }

    .exit{
        border-top: 2px solid var(--gray);
        width: 100%;
        height: 5rem;
        position: relative;
        top: 4vh;
        background: var(--white);
        color: var(--blue);
        display: flex;
        justify-content: end;
        align-items: center;
    }
    .containerUsuario{
        padding-left: var(--negativeSpace);
    }
    .informUsuario{
        margin-top: 2rem;
    }
    .informUsuario p{
        opacity: .6;
    }
    .informUsuario button{
        border: none;
        background: var(--while);
        color: var(--blue);
        font-weight: bold;
        margin-top: 2rem;
        cursor: pointer;
    }

    @media(max-width: 768px) {
      h1{
        font-size: 1rem;
      }
    }
</style>
