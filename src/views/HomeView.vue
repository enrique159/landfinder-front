<template>
  <div class="mb-5">
    <HeaderComp/>
    <div class="spacer-130"></div>
    <div class="container mb-5">
      <!-- <div class="d-flex justify-content-center">
        <p class="normal-text">
          Los resultados de búsqueda forman parte del portafolio de Lobbi y Grupo
          HUBi en Baja California Sur
        </p>
      </div> -->
      <div class="d-flex justify-content-center" style="column-gap: 3rem">
        <img class="down-arrow" src="@/assets/icons/down-arrow.svg" alt="" />
        <img src="@/assets/icons/mouse.svg" alt="" />
        <img class="down-arrow" src="@/assets/icons/down-arrow.svg" alt="" />
      </div>
    </div>
    <AportacionComp/>
    <FaqComp />
    <DestacadosComp/>
    <div id="team" style="margin-top: -70px; height: 100px;"></div>
    <ConoceComp/>
    <PartnersComp/>
    <ContactoComp/>
  </div>
</template>

<script>
import { placesMockData as places} from '@/common/mockData.js'
import HeaderComp from '@/components/home_view/Header_Comp.vue'
import AportacionComp from '@/components/home_view/Aportacion_Comp.vue'
import DestacadosComp from '@/components/home_view/Destacados_Comp.vue'
import ConoceComp from '@/components/home_view/Conoce_Comp.vue'
import PartnersComp from '@/components/home_view/Partners_Comp.vue'
import ContactoComp from '@/components/home_view/Contacto_Comp.vue'
import FaqComp from '@/components/home_view/Faq_Comp.vue'
export default {
  name: "HomeView",
  components: {
    HeaderComp,
    AportacionComp,
    DestacadosComp,
    ConoceComp,
    PartnersComp,
    ContactoComp,
    FaqComp
  },
  metaInfo: {
    title: 'Land Finder México',
    titleTemplate: '%s | Inicio'
  },
  data() {
    return {
      options: 1,
      selectedPlace: 0,
      places: places,
    };
  },
  methods: {
    selectPlace(place) {
      this.selectedPlace = place.id;
    },
  },
};
</script>

<style lang="scss" scoped>
.normal-text {
  width: 80%;
  color: var(--color-text-light);
  text-align: center;
}
.down-arrow {
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
}

@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>
