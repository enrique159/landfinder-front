<template>
  <div class="container">
    <div class="alerta">
      <img src="@/assets/missing.svg" alt="">
      <h1>{{ error.status }}</h1>
      <h4>{{ error.message }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alerta404Comp",
  props: {
    error: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.alerta {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 55vh;
  color: var(--color-text-light);
  position: relative;
  img {
    width: 50%;
    position: absolute;
    top: -20%;
    left: calc(50% - 25%);
    opacity: 0.15;
  }
  @media screen and (max-width: 992px) {
    img {
      width: 100%;
      top: -20%;
      left: 0;
    }
  }
  @media screen and (max-width: 768px) {
    img {
      width: 100%;
      top: 0;
      left: 0;
    }
  }
}
</style>