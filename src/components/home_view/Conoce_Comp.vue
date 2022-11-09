<template>
  <div class="container my-5">
    <div class="row py-5 border-line">
      <div class="col col-12 col-sm-6">
        <h2>Expertos en materia inmobiliaria.</h2>
      </div>
      <div class="col col-12 col-sm-6">
        <p>
          LFM es una iniciativa de HUB inmobiliario BCS donde han logrado
          colaborar más de 9 empresas especializadas en el sector inmobiliario
          entre las cuales se encuentran constructores, comercializadoras,
          estudios arquitectónicos, etc.
        </p>
        <a target="_blank" href="https://www.linkedin.com/company/landfindermexico/people/"
          >Conocer más <img src="@/assets/icons/arrow-down-right.svg" class="ms-2"
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

a{
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