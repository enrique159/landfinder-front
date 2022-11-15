<template>
  <div class="container my-5" id="team">
    <div class="row py-5 border-line">
      <div class="col col-12 col-sm-6">
        <h2>Nuestros colaboradores</h2>
      </div>
      <div class="col col-12 col-sm-6">
        <p>
          Gracias a las más de 8 marcas que colaboran con Land Finder México
          podemos seguir ofreciendo certeza y agilidad en la consolidación de
          nuevos proyectos inmobiliarios.
        </p>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/landfindermexico/"
          >Conocer más
          <img src="@/assets/icons/arrow-down-right.svg" class="ms-2"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConoceComp",
};
</script>

<style lang="scss" scoped>
#team {
  scroll-margin-top: 160px;
}
.border-line {
  border-top: 1px solid var(--color-text-dark);
  border-bottom: 1px solid var(--color-text-dark);
}
h2 {
  font-size: var(--biggest-font-size);
  font-weight: var(--font-medium);
  color: var(--color-white);
}

p {
  color: var(--color-text-light);
  margin: 0 0 24px;
}

a {
  color: var(--color-white);
  text-decoration: none;
  img {
    width: 12px;
    transform: rotate(-90deg);
    transition: var(--transition-fast);
  }
  &:hover {
    opacity: 0.8;
    color: var(--color-white);
    img {
      margin-left: 16px !important;
    }
  }
}
</style>
