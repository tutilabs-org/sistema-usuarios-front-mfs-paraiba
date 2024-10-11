<template>

  <section @click="replace">
    <div id="up" :style="{ background: systemColor }">
            <div id="ellipse">
            </div>
        </div>
    <div id="down">
    <h1>{{ comReport }}</h1>
         </div>
  </section>

</template>
<script>
export default {
  props: {
    comReport: String
  },
  methods: {
    replace() {
      switch (this.comReport) {
        case "RRIM":
          window.location.replace(process.env.NUXT_ENV_URL_RRIM);
          break
        case "TRYOUT":
          // alert("Em desenvolvimento")
          window.location.replace(process.env.NUXT_ENV_URL_TRYOUT);
          break
        case "FTI":
          // alert("Em desenvolvimento")
          window.location.replace(process.env.NUXT_ENV_URL_FTI)
          break
        case "FIT":
          //   alert("Em desenvolvimento")
          // window.location.replace("http://www.google.com.br")
          window.location.replace(process.env.NUXT_ENV_URL_FIT)
          break
        case "REL. TRYOUT":
          // alert("Em desenvolvimento")
          window.location.replace(process.env.NUXT_ENV_URL_RELTRYOUT)
          break
      }
    }
  },
  computed: {
    systemColor() {
      switch (this.comReport) {
        case 'RRIM':
          return 'var(--rrim-color)';
        case 'TRYOUT':
          return 'var(--soltryout-color)';
        case 'REL. TRYOUT':
          return 'var(--reltryout-color)';
        case 'FIT':
          return 'var(--fit-color)';
        case 'FTI':
          return 'var(--fti-color)';
        default:
          return 'var(--default-color)'; 
      }
    }
  }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

section {
    display: flex;
    flex-wrap: wrap;
    align-items: center; 
    width: 18.8em;
    padding: 0.09em 0.10em;
    border-radius: 0.96em;
    background-color: #ffffff;
    border: 1.067px solid var(--border);
    max-width: 100%;
    cursor: pointer;
    transition: border-color 0.3s ease;
}

section:hover{
    border: 3px solid var(--border);
    padding: 0;
}

section:active{
    border: 3px solid #b3b3b3;
    padding: 0;
}

a {
    display: block;
    text-decoration: none;
    width: 18.8em;
}

#up {
    width: 18.8em;
    height: 7em;
    border-radius: 0.74em;
}

#ellipse {
    margin-left: auto;
    height: 7em;
    width: 8.5em;
    background-image: url("../../assets/img/Ellipses.svg");
    background-repeat: no-repeat;
}

#down {
    padding: 0.60em;
    border-radius: 0.96em;
    margin-top: 0.14em;
}

h1 {
    color: #1E1E1E;
    font-family: Poppins;
    font-weight: 400;
    line-height: 115.987%;
    font-style: normal;
    font-size: 1.3em;
}
</style>
