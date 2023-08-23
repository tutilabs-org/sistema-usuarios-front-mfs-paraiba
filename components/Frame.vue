<template>
  <div class="containerFrame">
      <slot></slot>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .containerFrame{
        width: 100%;
        height: 90vh;
        margin-top:10vh;
        background: var(--bg);
        padding: var(--negativeSpace);
    }
</style>