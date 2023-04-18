<template>
  <div class="row g-5 mb-2">
    <div class="col col-12 col-sm-4 col-md-3 col-lg-3">
      <div class="card-detail px-4 d-flex justify-content-center flex-column">
        <p class="info-name mb-2">Superficie</p>
        <h2 class="ff-secondary ts-h2">{{ project.land_area }} m²</h2>
        <p class="info-text ts-smaller mb-0">Superficie de terreno total del predio que se aporta.</p>
      </div>
    </div>
    <div class="col col-12 col-sm-4 col-md-3 col-lg-3">
      <div class="card-detail px-4 d-flex justify-content-center flex-column">
        <p class="info-name mb-2">Construcción</p>
        <h2 class="ff-secondary ts-h2">{{ project.build_area }} m²</h2>
        <p class="info-text ts-smaller mb-0">Área total construida dentro del predio aportado.</p>
      </div>
    </div>
    <div class="col col-12 col-sm-4 col-md-3 col-lg-3">
      <div class="card-detail px-4 d-flex justify-content-center flex-column">
        <p class="info-name mb-2">Tipo de propiedad</p>
        <h2 class="ff-secondary ts-h2">{{ project.class }}</h2>
        <p class="info-text ts-smaller mb-0">Propiedad aportada como edificio por la conservación de la construcción.</p>
      </div>
    </div>
    <div class="col col-12 col-sm-4 col-md-3 col-lg-3">
      <div class="card-detail px-4 d-flex justify-content-center flex-column">
        <p class="info-name mb-2">Vocación</p>
        <h2 class="ff-secondary ts-h2">{{ project.project_type }}</h2>
        <p class="info-text ts-smaller mb-0">Esta propiedad tiene características que la hacen elegible para el giro
          hotelero.</p>
      </div>
    </div>

    <!-- EXTEND PROPERTIES -->
    <div v-if="isLogged" class="col col-12 col-sm-4 col-md-3 col-lg-3">
      <div class="card-detail px-4 d-flex justify-content-center flex-column">
        <p class="info-name mb-2">Uso de suelo</p>
        <h2 class="ff-secondary ts-h2">Corredor urbano</h2>
        <p class="info-text ts-smaller mb-0">Según la normativa vigente el uso de suelo de este predio.</p>
      </div>
    </div>
    <div v-if="isLogged" class="col col-12 col-sm-4 col-md-3 col-lg-3">
      <div class="card-detail px-4 d-flex justify-content-center flex-column">
        <p class="info-name mb-2">Superficie construíble</p>
        <h2 class="ff-secondary ts-h2">{{ 831.00 }} m²</h2>
        <p class="info-text ts-smaller mb-0">área total que se permite construir según la normatividad de uso de suelo.</p>
      </div>
    </div>
    <div v-if="isLogged" class="col col-12 col-sm-4 col-md-3 col-lg-3">
      <div class="card-detail px-4 d-flex justify-content-center flex-column">
        <p class="info-name mb-2">Área vendible neta</p>
        <h2 class="ff-secondary ts-h2">{{ 680 }} m²</h2>
        <p class="info-text ts-smaller mb-0">Propiedad aportada como edificio por la conservación de la construcción.</p>
      </div>
    </div>
    <div v-if="isLogged" class="col col-12 col-sm-4 col-md-3 col-lg-3">
      <div class="card-detail px-4 d-flex justify-content-center flex-column">
        <p class="info-name mb-2">Densidad</p>
        <h2 class="ff-secondary ts-h2">{{ 260 }} viv/ha</h2>
        <p class="info-text ts-smaller mb-0">Número permitido según la normativa de viviendas por hectárea.</p>
      </div>
    </div>

  </div>
</template>

<script>
import { isLoggedIn } from '@/auth'
export default {
  name: 'DetallesComp',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data(){
    return {
      isLogged: isLoggedIn(),
    };
  }
}
</script>

<style lang="scss" scoped>
.card-detail {
  background-color: var(--color-black);
  border-radius: 1rem;
  height: 10rem;
}

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
</style>