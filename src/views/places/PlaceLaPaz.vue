<template>
  <div>
    <div class="container-fluid header animate__animated animate__slideInDown">
      <div class="container py-0" style="height: 100%">
        <div class="header-title animate__animated animate__fadeInDown animate__delay">
          <h1 class="main-title ff-secondary">La Paz</h1>
        </div>
      </div>
    </div>

    <DeslizaAbajoComp />

    <section class="container py-5 px-5">
      <div class="row">
        <div class="col-12 col-md-6 order-1 order-md-0 animate__animated animate__slideInLeft">
          <div class="technicals-grid">
            <div class="card-detail px-4 d-flex justify-content-center flex-column">
              <p class="info-name mb-2">Sectores</p>
              <h2 class="ff-secondary ts-h2">Turístico</h2>
              <p class="info-text ts-smaller mb-0">Superficie de terreno total del predio que se aporta.</p>
            </div>

            <div class="card-detail px-4 d-flex justify-content-center flex-column">
              <p class="info-name mb-2">Sectores</p>
              <h2 class="ff-secondary ts-h2">Turístico</h2>
              <p class="info-text ts-smaller mb-0">Superficie de terreno total del predio que se aporta.</p>
            </div>

            <div class="card-detail px-4 d-flex justify-content-center flex-column">
              <p class="info-name mb-2">Sectores</p>
              <h2 class="ff-secondary ts-h2">Turístico</h2>
              <p class="info-text ts-smaller mb-0">Superficie de terreno total del predio que se aporta.</p>
            </div>

            <div class="card-detail px-4 d-flex justify-content-center flex-column">
              <p class="info-name mb-2">Sectores</p>
              <h2 class="ff-secondary ts-h2">Turístico</h2>
              <p class="info-text ts-smaller mb-0">Superficie de terreno total del predio que se aporta.</p>
            </div>

            <div class="card-detail px-4 d-flex justify-content-center flex-column">
              <p class="info-name mb-2">Sectores</p>
              <h2 class="ff-secondary ts-h2">Turístico</h2>
              <p class="info-text ts-smaller mb-0">Superficie de terreno total del predio que se aporta.</p>
            </div>

            <div class="card-detail px-4 d-flex justify-content-center flex-column">
              <p class="info-name mb-2">Sectores</p>
              <h2 class="ff-secondary ts-h2">Turístico</h2>
              <p class="info-text ts-smaller mb-0">Superficie de terreno total del predio que se aporta.</p>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 mb-5 px-0 px-md-5 animate__animated animate__slideInRight">
          <h2 class="ff-secondary ts-biggest mb-5">Puerto de ilusión y de grandes oportunidades</h2>
          <p class="tc-text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum libero
            maxime illo laudantium, incidunt dolorem neque tempore cum
            reprehenderit? Ad, porro corrupti nisi quis sit eligendi iusto ipsum
            voluptatibus fugit.
          </p>
          <p class="tc-text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum libero
            maxime illo laudantium, incidunt dolorem neque tempore cum
            reprehenderit? Ad, porro corrupti nisi quis sit eligendi iusto ipsum
            voluptatibus fugit.
          </p>
          <p class="tc-text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>

    <PropertiesComp :place="place" title="Propiedades destacadas en La Paz" />
  </div>
</template>

<script>
import DeslizaAbajoComp from '@/components/DeslizaAbajoComp.vue';
import PropertiesComp from '@/components/places_view/Properties_Comp.vue';

export default { 
  components: { DeslizaAbajoComp, PropertiesComp },
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
.header {
  background-image: url("@/assets/places/lapaz_full.jpg");
  background-size: cover;
  background-position: center;
  height: 60vh;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
  .header-title {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 100%;
    .main-title {
      color: white;
      text-transform: uppercase;
      font-size: 8rem;
      margin-bottom: 0;
      line-height: 6.5rem;
    }
  }
}

.technicals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px,1fr));
  grid-gap: 1rem;
  .card-detail {
    background-color: var(--color-black);
    border-radius: 1rem;
    height: 10rem;
    .info-name {
      font-size: var(--normal-font-size);
      color: var(--color-text-light);
    }
    .info-text{
      color: #707070;
    
      &::before{
        content: url('@/assets/info-icon.svg');
        margin-right: .3rem;
      }
    }
  }
}


</style>
