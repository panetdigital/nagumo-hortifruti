<template>
  <img
    class="vuetify-logo"
    alt="logo_nagumo"
    src="/logo_nagumo.png"
  >
</template>

<style>
.vuetify-logo {
  height: 80px;
  width: 80px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
