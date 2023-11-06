<template>
  <div class="header-comp">
    <div class="search-header animate__animated animate__slideInDown">
      <div class="container padding-container">
        <h1 class="animate__animated animate__fadeInDown animate__delay">
          ¡Más de 
          <ICountUp
            class="counter"
            :endVal="enAportacion"
            :options="optionsCounter"
            @ready="onReady"
          />
          <span>m²</span> de tierra en aportación para desarrollo!
        </h1>
        <div class="search-bar animate__animated animate__fadeInUp animate__delay" >
          <!-- DROPDOWN LOCATION -->
          <div class="search-input input-w-40">
            <h3>Ubicación</h3>
            <div class="dropdown">
              <button
                class="button-location dropdown-toggle"
                type="button"
                id="dropdown_search_home"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ places[selectedPlace].name }}
              </button>
              <ul
                class="dropdown-menu dropdown-search-list"
                aria-labelledby="dropdown_search_home"
              >
                <li v-for="item in places" :key="item.id">
                  <a class="dropdown-item" @click="selectPlace(item)">{{
                    item.name
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- PROYECT TYPE -->
          <div class="search-input input-w-40">
            <h3>Tipo de propiedad</h3>
            <div class="dropdown">
              <button
                class="button-location dropdown-toggle"
                type="button"
                id="dropdown_search_home"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ getClassProject }}
              </button>
              <ul
                class="dropdown-menu dropdown-search-list"
                aria-labelledby="dropdown_search_home"
              >
                <li v-for="item in types" :key="item.id">
                  <a class="dropdown-item" @click="selectType(item)">{{
                    item.name
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- SUPERFICIE -->
          <div class="search-input">
            <h3>Superficie mínima</h3>
            <div class="d-flex surface-input p-relative">
              <input type="text" placeholder="500" v-model="minLand" />
            </div>
          </div>

          <!-- BOTON SEARCH -->
          <button class="button-search ms-0 ms-md-4" @click="setValues">Buscar</button>
        </div>

        <!-- SLIDER -->
        <div class="row">
          <div class="col col-12">
            <Splide :options="optionsSlider">
              <SplideSlide v-for="item in testimonials" :key="item.id">
                <div class="pt-3 pb-4 ps-1 header-text-container">
                  <p class="header-text">
                    "{{ item.description }}"
                  </p>
                  <div class="d-flex gap-1 ts-small">
                    <i class="bi bi-star-fill" v-for="star in item.stars" :key="`stars-${item.id}-${star}`"></i>
                  </div>
                  <h6>
                    {{ item.name }} {{ item.account }} - {{ item.position }} {{ item.company }}
                  </h6>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { placesMockData as places, testimonialsMockData as testimonials } from "@/common/mockData.js";
import { projectTypesMockData as types } from "@/common/mockData.js";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Variables from "@/services/variable_services.js";
import ICountUp from 'vue-countup-v2';
import { Money } from "v-money";
export default {
  name: "HeaderComp",
  components: {
    Money,
    ICountUp,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: 1,
      selectedPlace: 0,
      //value: 0,
      minLand: null,
      places: places,
      types: types,
      variables: [],
      money: {
        decimal: ".",
        thousands: ",",
        precision: 2,
        masked: false,
      },
      counterInstance: null,
      delay: 1000,
      optionsCounter: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
      },
      testimonials: testimonials,
      optionsSlider: {
        type: 'loop',
        autoplay: true,
        interval: 5000,
        rewind: true,
        arrows: false,
      }
    };
  },
  created() {
    this.selectedPlace = this.places.findIndex(
      (item) => item.value == this.$store.state.parameters.location.value
    );
    if (this.$store.state.parameters.class == "Todos") {
      this.options = 1;
    } else if (this.$store.state.parameters.class == "Terreno") {
      this.options = 2;
    } else {
      this.options = 3;
    }
    //this.getVariables();
  },
  computed: {
    getClassProject() {
      return this.options == 1
        ? "Todos"
        : this.options == 2
        ? "Terreno"
        : "Edificio";
    },
    enAportacion() {
      // return this.variables.length > 0
      //   ? this.variables.filter(
      //       (variable) => variable.attributes.name === "aportacion"
      //     )[0].attributes.value
      //   : 0;
      return 1316518
    },
  },
  methods: {
    onReady: function(instance, CountUp) {
      this.counterInstance = instance;
      instance.update(instance.endVal);
    },
    selectPlace(place) {
      this.selectedPlace = place.id;
    },
    selectType(type) {
      this.options = type.id;
    },
    // method to set the values in vuex
    setValues() {
      this.$store.state.parameters.class = this.getClassProject;
      this.$store.state.parameters.location = {
        name: this.places[this.selectedPlace].name,
        value: this.places[this.selectedPlace].value,
      };
      //this.$store.state.parameters.minValue = !this.value ? 0 : this.value;
      this.$store.state.parameters.minLand = !this.minLand ? 0 : this.minLand;
      this.$store.state.parameters.active = true;
      this.$router.push("/marketplace");
    },
    async getVariables() {
      await Variables.getAll().then((res) => {
        this.variables = res.data.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.search-header {
  position: relative;
  width: 100%;
  height: fit-content;
  background-image: url("@/assets/main-cover.webp");
  background-position: 0% 20%;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 5rem 3rem;
  animation-duration: 1s;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
  }

  h1 {
    font-family: var(--font-secondary);
    font-size: 3.7rem;
    font-weight: var(--font-regular);
    color: var(--color-text);
    margin-bottom: 2rem;
    .counter, span { color: var(--color-complementary-1)}
    width: 100%;
  }

  .header-text-container {
    width: 100%;
    .header-text {
      font-weight: var(--font-medium);
    }
  }

  @media only screen and (min-width: 1400px) {
    .header-text-container {
      width: 50%;
    }
  }

  @media only screen and (min-width: 992px) {
    h1 {
      width: 768px;
    } 
    .header-text-container {
      width: 60%;
    }
  }

  .search-bar {
    background-color: var(--color-white);
    width: 100%;
    height: fit-content;
    padding: 24px 18px;
    border-radius: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation-duration: 1.6s;
    margin-bottom: 3rem;
    .search-input {
      text-align: left;
      padding: 0 12px;
      .button-location {
        border: none;
        background-color: #efefef;
        color: #7e7e7e;
        font-weight: var(--font-medium);
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
        align-items: center;
        padding: 0.5rem 1rem;
      }
      .dropdown-search-list {
        background-color: var(--color-white);
        border-radius: 12px;
        li {
          cursor: pointer;
          a {
            border-radius: 8px;
            font-size: var(--normal-font-size);
            font-weight: var(--font-semi-bold);
          }
        }
      }
      input,
      .valor-input {
        width: 100%;
        background-color: #efefef;
        color: var(--color-text-dark);
        font-weight: var(--font-medium);
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
        align-items: center;
        padding: 0.5rem 1rem;
        &::placeholder {
          color: var(--color-text-light);
        }
        &:focus {
          outline: none;
        }
      }
      .surface-input::before {
        content: "m²";
        position: absolute;
        width: 24px;
        height: 20px;
        border-left: #9b9b9b solid 1px;
        right: 6px;
        top: calc(50% - 10px);
        padding-left: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: var(--small-font-size);
        color: var(--color-text-light);
      }
      .valor-input-placeholder {
        color: var(--color-text-light);
      }
      span {
        color: var(--color-text-dark);
        font-weight: var(--font-semi-bold);
      }
      h3 {
        font-size: var(--big-font-size);
        font-weight: var(--font-semi-bold);
        color: var(--color-text-dark);
        margin: 0 0 6px;
        padding-left: 4px;
      }
    }
    .button-search {
      border: none;
      background-color: var(--color-complementary-1-dark);
      color: var(--color-text);
      font-weight: var(--font-semi-bold);
      border-radius: 12px;
      padding: 0.6rem 2rem;
      transition: var(--transition-fast);
      &:hover {
        background-color: var(--color-complementary-1-dark);
      }
      &:active {
        outline: none;
        transform: translateY(4px);
      }
    }

    .input-w-40 {
      width: 40%;
    }
  }
  @media screen and (max-width: 992px) {
    h1 { font-size: var(--biggest-font-size); }
    .search-bar {
      width: 100%;
      max-width: 360px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 1rem;
      animation-duration: 1.6s;
      input, .search-input {
        width: 100% !important;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 3rem 0;
    h1 {
      font-size: var(--h1-font-size);
    }
  }
}
</style>
