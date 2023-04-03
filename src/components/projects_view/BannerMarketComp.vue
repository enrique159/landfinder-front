<template>
  <div class="banner-market-comp">
    <h2 class="ff-secondary mb-0">¿Quieres subir tu propiedad a nuestro marketplace?</h2>
    <p class="fw-medium mb-1">Regístrate y sigue los pasos para comenzar a comercializar tu inmueble con nosotros.</p>
    <router-link to="/signup" class="button-base bc-complementary-1 tc-background">
      Registrarme ahora
    </router-link>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.banner-market-comp {
  width: 100%;
  height: fit-content;
  min-height: 180px;
  background-image: url('~@/assets/bg_banner_market.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>