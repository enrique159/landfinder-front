<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-12 col-lg-4 col-xl-5 py-4">
        <span class="tw-medium d-block mb-3">Ubicaciones LFM</span>
        <h2 class="ff-secondary ts-h1 mb-4">
          Descubre lugares para desarrollar hoy
        </h2>
        <p class="tc-text-light mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Harum atque deserunt sed ex, inventore quos ipsum nulla
          sapiente laboriosam similique error natus nobis minus
          blanditiis, aliquam dolor neque autem excepturi.
        </p>
      </div>
      <div class="col-12 col-lg-8 col-xl-7">
        <div class="carousel-container">
          <splide :options="isMobile ? minOptions : options">
            <splide-slide
              class="splide-container"
              v-for="place in places"
              :key="places.name"
            >
              <div
                class="carousel-card"
                :style="{ 'background-image': `url(${place.image})` }"
              >
                <div class="info">
                  <span class="ts-smaller tw-medium">Baja California Sur</span>
                  <h4 class="ff-secondary">{{ place.name }}</h4>
                </div>
              </div>
            </splide-slide>
          </splide>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      places: [
        {
          name: "La Paz",
          image: require("@/assets/places/lapaz.png"),
        },
        {
          name: "Los Barriles",
          image: require("@/assets/places/barriles.png"),
        },
        {
          name: "Todos Santos",
          image: require("@/assets/places/todos_santos.png"),
        },
      ],
      options: {
        type: "loop",
        perPage: 3,
        perMove: 1,
        arrows: true,
        pagination: false,
      },

      minOptions: {
        type: "loop",
        perPage: 1,
        perMove: 1,
        arrows: true,
        pagination: false,
      },

      min: false
    };
  },
  computed: {
    isMobile() {
      return this.min;
    },
  },
  created() {
    this.min = window.innerWidth < 768;
    // listen to the resize window event
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    // remove the event listener when the component is destroyed
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      // set the min flag to true if the window width is less than 768px
      this.min = window.innerWidth < 768;
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 100%;
  height: 100%;
  min-height: 50vh;
}

.splide-container {
  height: 400px;
  display: grid;
  place-items: center;
}
.carousel-card {
  width: calc(100% - 2em);
  height: calc(100% - 2em);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1rem;
  transition: var(--transition-normal);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  position: relative;
  cursor: pointer;

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
    border-radius: 1rem;
  }

  .info {
    position: relative;
  }
}

::v-deep .is-active > .carousel-card {
  width: calc(100% - 1em);
  height: calc(100% - 1em);
}

::v-deep .splide__arrow {
  top: calc(100% + 2em);
  background: transparent;
  border: 1px solid var(--color-text-light);
  svg {
    fill: var(--color-text-light);
  }
}

::v-deep .splide__arrow--prev {
  left: calc(50% - 2.5em);
}

::v-deep .splide__arrow--next {
  right: calc(50% - 2.5em);
}
</style>
