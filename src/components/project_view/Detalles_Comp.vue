<template>
  <div class="row mb-2">
    <div class="col col-6 col-sm-4 col-md-3 col-lg-2">
      <h2 class="info-text">{{ project.land_area}} m²</h2>
      <p class="info-name">Superficie</p>
    </div>
      <div class="col col-6 col-sm-4 col-md-3 col-lg-2">
      <h2 class="info-text">{{ project.build_area}} m²</h2>
      <p class="info-name">Construcción</p>
    </div>
      <div class="col col-6 col-sm-4 col-md-3 col-lg-2">
      <h2 class="info-text">{{ project.class}}</h2>
      <p class="info-name">Clase</p>
    </div>
      <div class="col col-6 col-sm-4 col-md-3 col-lg-2">
      <h2 class="info-text">{{ project.mod}}</h2>
      <p class="info-name">Modalidad</p>
    </div>
      <div class="col col-6 col-sm-4 col-md-3 col-lg-2">
      <h2 class="info-text">{{ project.project_type}}</h2>
      <p class="info-name">Tipo</p>
    </div>
      <div class="col col-6 col-sm-4 col-md-3 col-lg-2">
      <h2 class="info-text">{{ project.domain}}</h2>
      <p class="info-name">Propiedad</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetallesComp',
    props: {
      project: {
        type: Object,
        required: true,
      },
    }
  }
</script>

<style lang="scss" scoped>
.info-text{
  font-size: var(--h3-font-size);
  font-weight: var(--font-semi-bold);
  color: var(--color-white-2);
  margin-bottom: 0;
}
.info-name{
  font-size: var(--small-font-size);
  font-weight: var(--font-semi-bold);
  color: var(--color-text-light);
}
</style>