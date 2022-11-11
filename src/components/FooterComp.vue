<template>
  <div id="footer" class="container">
    <div class="row px-4 px-sm-0" style="margin: 0 !important;">
      <div class="col col-12 col-lg-4 mb-4 mb-lg-0">
        <img src="@/assets/logo.svg" alt="" class="mb-4">
        <p class="normal-text lh-1">
          Isabel La Católica #350, La Paz, <br>
          Baja California Sur, México.
        </p>
        <a href="tel:+526121694149">
          <i class="bi bi-telephone-fill mx-1"></i> +52 (612) 169 4149
        </a> <br>
        <a href="mailto:hola@landfindermexico.com">
          <img src="@/assets/icons/mail.svg" alt="" class="me-1"> hola@landfindermexico.com
        </a>
      </div>
      <div class="col col-12 col-lg-3 nav-options mb-4 mb-lg-0">
        <h3>Otras Páginas</h3>
        <a href="#"><span>Lobbi - IGE</span></a>
        <a href="#"><span>HUB inmobiliario BCS</span></a>
        <a href="#"><span>Bantra Technologies</span></a>
      </div>
      <div class="col col-12 col-lg-3 nav-options mb-4 mb-lg-0">
        <h3>Términos y condiciones</h3>
        <a href="#"><span>Políticas de privacidad</span></a>
        <a href="#"><span>Uso de datos</span></a>
      </div>
      <div class="col col-12 col-lg-2 nav-social mb-4 mb-lg-0">
        <h3>Síguenos</h3>
        <a href="https://www.facebook.com/landfinderm" class="me-3"><i class="bi bi-facebook"></i></a>
        <a href="https://www.linkedin.com/company/landfindermexico/" class="me-3"><i class="bi bi-linkedin"></i></a>
        <a href="#" class="me-3"><i class="bi bi-twitter"></i></a>
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
  height: fit-content;
  padding: 40px 0;

  .normal-text {
    color: var(--color-white-1);
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }

  a {
    color: var(--color-white-1);
    font-weight: var(--font-bold);
    img {
      width: 20px;
    }
  }

  h3 {
    color: var(--color-white);
    font-size: var(--h3-font-size);
    font-weight: var(--font-bold);
    margin: 0 0 24px;
  }

  .nav-options {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    a {
      color: var(--color-white-1);
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