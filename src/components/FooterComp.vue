<template>
  <div id="footer" class="container">
    <div class="row">
      <div class="col col-12 col-md-4 mb-4 mb-md-0">
        <img src="@/assets/logo.svg" alt="" class="mb-4">
        <p class="normal-text lh-1">
          Alvaro Obregón #123 <br>
          Col. Centro, La Paz <br> 
          Baja California Sur, México.
        </p>
        <a href="tel:+526121211212">
          (612)-121-1212
        </a>
      </div>
      <div class="col col-12 col-md-4 nav-options mb-4 mb-md-0">
        <router-link to="/"><span>Buscar</span></router-link>
        <router-link to="/about"><span>Sobre LFM</span></router-link>
        <router-link to="/us"><span>Nosotros</span></router-link>
        <router-link to="/team"><span>Equipo</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FooterComp'
  }
</script>

<style lang="scss" scoped>
#footer {
  height: 240px;
  padding: 40px 58px;

  .normal-text {
    color: var(--color-text);
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
  }

  .nav-options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    a {
      color: #fff;
      font-size: var(--normal-font-size);
      font-weight: var(--font-semi-bold);
      margin-bottom: 1rem;
      text-decoration: none;
      transition: var(--transition-fast);
      &:hover {
        margin-left: 6px;
      }
    }
  }
}
</style>