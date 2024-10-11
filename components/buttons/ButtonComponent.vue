<template>
    <button :type="type" :class="buttonClass" :disabled="disabled" @click="$emit('click')">
      {{ title }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: "button",
        validator: function (value) {
          return ["button", "submit", "reset"].includes(value);
        },
      },
      color: {
        type: String,
        default: null,
      },
      disabled: {
      type: Boolean,
      default: false,
    },
    },
    computed: {
      buttonClass() {
        return {
          outlined: !this.color,
          [this.color]: this.color,
          disabled: this.disabled,
        };
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    border-radius: 0.5em;
    font-size: 1rem;
    cursor: pointer;
    width: 9.375rem;
    font-weight: 600;
  }
  
  button.outlined {
    background-color: transparent;
    color: var(--green);
    border: 1px solid var(--green);
  }
  
  button.green {
    background-color: var(--green);
    color: var(--white);
    border: 1px solid var(--green);
  }
  
  button.orange {
    background-color: var(--orange) !important;
    color: var(--white);
    border: 1px solid var(--orange) !important;
  }
  
  button.green2 {
    color: #267e5c;
    border: 0.83px solid #267e5c;
    padding: 8px 20px;
    background: #d5e7d9;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    width: 200px;
    justify-content: center;
    border-radius: 8px;
  }

  button.green3 {
    width: 15.9rem;
    height: 3.5rem;
    background-color: var(--green);
    color: var(--white);
    border: 1px solid var(--green);
  }
  
  button.blue {
    background-color: var(--blue) !important;
    color: var(--white);
    border: 1px solid var(--blue) !important;
  }
  
  button.red {
    background-color: #EB102F !important;
    color: var(--white);
    border: 1px solid #EB102F !important;
  }
  
  button:hover {
    opacity: 0.8;
  }
  
  button.disabled {
    background-color: var(--green);
    color: var(--white);
    cursor: not-allowed;
    border: 1px solid var(--green) !important;
    opacity: .8;
  }

  @media (max-width: 700px) {

    button.green3 {
      height: 2.8rem;
      font-size: 0.8rem;
  }

}
  </style>