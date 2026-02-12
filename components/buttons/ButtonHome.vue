<template>
    <button @click.prevent="() => $emit('cancel')"></button>
  </template>
  
  <script>
  export default {
    name: "Homebutton",
    emit: ["cancel"],
  };
  </script>
  <style scoped>
  button {
    background-image: url('../../assets/img/iconhome.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    width: 4rem;
    height: 3rem;
    background-color: var(--green);
    color: var(--black-text);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
  
    font-weight: var(--bold);
    font-size: 1rem;
  }

  button:active {
    filter: brightness(0.9);
  }

  </style>
  