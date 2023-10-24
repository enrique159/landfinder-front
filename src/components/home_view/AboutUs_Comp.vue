<template>
  <div class="container about-us px-5 px-md-3">
    <div class="row">
      <div class="col-12 col-md-6 mb-5 px-0 px-md-5">
        <h2 class="ff-secondary ts-h1 mb-5">Somos la oficina consultora inmobiliaria <span class="tc-complementary-1"> No. 1</span> de Baja California Sur
        </h2>
        <p class="tc-text-light">
          Contamos con más de 15 años de experiencia en comercialización estratégica, conceptualización y desarrollo de
          negocios inmobiliarios, litigio y financiamiento de proyectos en Baja Sur.
        </p>
      </div>

      <div class="col-12 col-md-6 order-1 order-md-0">
        <div class="technicals-grid">
          <div class="card-detail px-4 d-flex justify-content-center flex-column">
            <p class="info-name mb-2">m² aportados</p>
            <h2 class="ff-secondary ts-h2">+8k</h2>
            <p class="info-text ts-smaller mb-0">Total de m² aportados por Land Finder México</p>
          </div>

          <div class="card-detail px-4 d-flex justify-content-center flex-column">
            <p class="info-name mb-2">m² ejidales</p>
            <h2 class="ff-secondary ts-h2">+840M</h2>
            <p class="info-text ts-smaller mb-0">Superficie de tierra ejidal aportada por Land Finder México</p>
          </div>

          <div class="card-detail px-4 d-flex justify-content-center flex-column">
            <p class="info-name mb-2">m² regularizados</p>
            <h2 class="ff-secondary ts-h2">+31M</h2>
            <p class="info-text ts-smaller mb-0">Total de m² regularizados a través de Land Finder México</p>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      place: {
        name: 'La Paz, Baja California Sur',
        value: 'La Paz',
      },
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.about-us {
  padding-top: 7rem !important;
}

.technicals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 1rem;

  .card-detail {
    background-color: var(--color-black);
    border-radius: 1rem;
    height: 10rem;

    .info-name {
      font-size: var(--normal-font-size);
      color: var(--color-text-light);
    }

    .info-text {
      color: #707070;

      &::before {
        content: url('@/assets/info-icon.svg');
        margin-right: .3rem;
      }
    }
  }
}
</style>
