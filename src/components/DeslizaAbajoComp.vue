<template>
  <div class="container py-4 animate__animated animate__fadeInUp">
    <div class="d-flex flex-column align-items-center">
      <h5 class="tc-text-dark ts-h3">Desliza para ver más</h5>
      <img src="@/assets/icons/circle-arrow-down.svg" alt="Down">
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(10px);
  }
  60% {
    transform: translateY(5px);
  }
}
</style>