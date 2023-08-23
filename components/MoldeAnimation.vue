<template>
  <svg width="232" height="211" viewBox="0 0 232 211" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="232" height="211" fill="#ffffff"/>
    <g id="molde">
    <g id="base">
    <path id="Vector" d="M1.00006 210.87L231.457 210.87V196.087L1.00006 196.087V210.87Z" fill="#3AD185"/>
    <g id="Group">
    <path id="Vector_2" d="M9.88052 100V196.087H83.716V173.913H148.749V196.087H219.65V100H9.88052Z" fill="#3AD185"/>
    </g>
    </g>
    <g id="top">
    <path id="Vector_3" d="M230.457 0H0V14.7826H230.457V0Z" fill="#3AD185"/>
    <path id="Vector_4" d="M220.838 14.7825H11.0679V51.7391H220.838V14.7825Z" fill="#3AD185"/>
    </g>
    </g>
  </svg>
</template>
<style scoped>
  #base{
    animation: base 2s infinite linear alternate;
    transform-origin: center;
    transform-box: fill-box;
  }
  @keyframes base {
    from{
      transform: translateY(-40px);
    }
    to{
      transform: translateY(0px);
    }
  }
</style>
