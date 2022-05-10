<template>
  <div class="box mx-auto relative">
    <span class="absolute text-center h-min inset-0 m-auto text-purple-50">Rotate me</span>
  </div>
</template>

<style>
  .box {
    background-color: rebeccapurple;
    border-radius: 10px;
    width: 100px;
    height: 100px;
  }

  .box:hover {
    animation-name: rotate-scale;
    animation-duration: 1s;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes rotate-scale {
    0% {
      transform: rotate(0) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(2);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
}

</style>