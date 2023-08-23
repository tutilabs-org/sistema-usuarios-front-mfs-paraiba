<template>
<div class="container">
  <div class="containerLoad">
      <div class="loading"></div>
  </div>
  <div class="textInfor">
      <h1>Carregando...</h1>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
    .container{
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
        background: rgba(119, 119, 185, 0.342);
        backdrop-filter: blur(15px);
    }
    .containerLoad{
        position: fixed;
        top:0;

        width: 100%;
        height: 1rem;
        z-index: 9999;
        
    }
    .loading{
        height: 100%;

        animation: loading 2s infinite ease-in-out;
        transform-origin: center;
        transform-box: fill-box;
    }
    @keyframes loading{
        0%{
            width: 0%;
            margin-left: 0%;
        }
        50%{
            width: 100%;
            margin-left: 0%;
            background: var(--blue);
        }
        100%{
            width: 0%;
            margin-left: 100%;
            
        }
    }
    @media only screen and (max-width: 600px) {
        .containerLoad{
            top: 3rem;
        }
    }
</style>