<template>
  <div class="back">
      <div class="modal">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .back{
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
    .modal{
        background: var(--white);
        width: 30rem;
        height: 25rem;
    }
</style>