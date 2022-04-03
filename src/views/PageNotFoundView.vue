<template>
  <div class="page-not-found">
    <h1>404</h1>
    <h2>Página no encontrada</h2>
    <p>
      La página que estás buscando no existe.
    </p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.page-not-found {
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: var(--h1-font-size);
    font-weight: var(--font-medium);
    color: var(--color-text);
    margin: 0;
  }
  h2 {
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--color-text-light);
    margin: 0;
  }
  p {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    color: var(--color-text);
    margin: 0;
  }
}
</style>