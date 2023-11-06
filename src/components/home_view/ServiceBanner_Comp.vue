<template>
  <div class="container p-5">
    <div class="banner-market-comp">
      <h2 class="ff-secondary mb-0">Conoce el potencial de desarrollo de tu terreno</h2>
      <p class="fw-medium mb-3">Contáctanos y solicita una factibilidad de potencial de desarrollo para conocer todo sobre
        tu inmueble.</p>
      <router-link to="/contacto" class="button-base bc-complementary-1 tc-background">
        Solicitar
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.banner-market-comp {

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