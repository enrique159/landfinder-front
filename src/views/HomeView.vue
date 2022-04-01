<template>
  <div class="container mb-5">
    <HeaderComp/>
    <div class="spacer"></div>
    <div class="w-100 mb-5 animate__animated animate__zoomIn">
      <div class="d-flex justify-content-center">
        <p class="normal-text">
          Los resultados de búsqueda forman parte del portafolio de Lobbi y Grupo
          HUBi en Baja California Sur
        </p>
      </div>
      <div class="d-flex justify-content-center" style="column-gap: 3rem">
        <img class="down-arrow" src="@/assets/icons/down-arrow.svg" alt="" />
        <img src="@/assets/icons/mouse.svg" alt="" />
        <img class="down-arrow" src="@/assets/icons/down-arrow.svg" alt="" />
      </div>
    </div>
    <AportacionComp/>
  </div>
</template>

<script>
import { placesMockData as places} from '@/common/mockData.js'
import HeaderComp from '@/components/home_view/Header_Comp.vue'
import AportacionComp from '@/components/home_view/Aportacion_Comp.vue'
export default {
  name: "HomeView",
  components: {
    HeaderComp,
    AportacionComp,
  },
  metaInfo: {
    title: 'Land Finder México',
    titleTemplate: '%s | Home'
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
