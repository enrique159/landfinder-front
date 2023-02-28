<template>
  <div class="page-confirm-email">
    <h1>Confirma tu correo</h1>
    <h2>Hemos enviado un correo de confirmacion a tu bandeja de entrada</h2>
    <p>
      Podras iniciar sesion una vez confirmes tu correo electronico
    </p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.page-confirm-email {
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