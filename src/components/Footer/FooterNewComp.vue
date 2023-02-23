<template>
  <div id="footer" class="container">
    <div class="menu-footer mb-3">
      <router-link to="/">Inicio</router-link>
      <router-link to="/portfolio">Marketplace</router-link>
      <router-link to="/">Nosotros</router-link>
      <router-link to="/">Metodología</router-link>
      <router-link to="/">Partners</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </div>

    <p class="text-center ts-small tc-text-light mb-5">
      Conoce los
      <router-link to="/terminos-y-condiciones">
        Términos y condiciones
      </router-link> y nuestras
      <router-link to="/politicas-privacidad">
        Políticas de privacidad
      </router-link>
    </p>

    <p class="text-center ts-small tc-text-light mb-0">
      © 2023 Land Finder México. Todos los derechos reservados.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer {
  height: fit-content;
  padding: 80px 0 20px;

  .menu-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
    flex-wrap: wrap;
    padding: 0 3rem;

    a {
      width: fit-content;
      position: relative;
      font-weight: var(--font-bold);
      &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--color-text);
        transition: width 0.3s;
      }
      &:hover {
        color: var(--color-text);
      }
      &:hover::before {
        width: 100%;
      }
    }
  }
}
</style>
