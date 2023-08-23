<template>
  <div>
    <div class="btnReport" @click="replace">
      <p>{{ comReport }}</p>
    </div>
  </div>
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
          window.location.replace("http://185.209.179.253:8300")
          break
        case "TRYOUT":
          // alert("Em desenvolvimento")
          window.location.replace("http://185.209.179.253:8500")
          break
        case "FTI":
         // alert("Em desenvolvimento")
         window.location.replace("http://185.209.179.253:7701")
          break
        case "FIT":
       //   alert("Em desenvolvimento")
           // window.location.replace("http://www.google.com.br")
        window.location.replace("http://185.209.179.253:9007")
         break
             case "REL. TRYOUT":
          // alert("Em desenvolvimento")
          window.location.replace("http://185.209.179.253:9200")
          break  
     }
    }
  },
}
</script>

<style scoped>
.btnReport {
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  text-align:center;
  align-items: center;
  border-radius: .5rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: var(--bold);

  cursor: pointer;

  color: var(--white);
  background-image: linear-gradient(180deg, #ffffffb3 0%, #ffffff3a 70%);

  transition: filter .2s;
}

.btnReport:hover {
  filter: brightness(.9);
}

@media (max-width: 768px) {
  .btnReport {
    width: 5rem;
    height: 5rem;
    font-size: 1rem;
  }
}
</style>

