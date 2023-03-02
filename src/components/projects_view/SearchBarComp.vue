<template>
  <div class="search-bar-comp">
    <h5 class="mb-4">Filtrar por:</h5>
    <div class="option-location">
      <!-- TYPE PROJECT -->
      <label class="ts-small ps-2 pb-1">Tipo de inmueble</label>
      <div class="selector-type">
        <button
          :class="[type == 'Todos' ? 'active' : '']"
          @click="selectType('Todos')"
        >
          Todos
        </button>
        <button
          :class="[type == 'Edificio' ? 'active' : '']"
          @click="selectType('Edificio')"
        >
          Edificio
        </button>
        <button
          :class="[type == 'Terreno' ? 'active' : '']"
          @click="selectType('Terreno')"
        >
          Tierra
        </button>
      </div>

      <!-- PLACE SELECTION -->
      <label for="dropdown_search_home" class="ts-small ps-2 pb-1"
        >Ubicación</label
      >
      <button
        class="button-base button-location dropdown-toggle mb-4"
        type="button"
        name="dropdown_search_home"
        id="dropdown_search_home"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>{{ places[selectedPlace].name }}</span>
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

      <!-- SURFACE RANGE -->
      <label class="ts-small ps-2 pb-1">Superficie mínima: {{ getMinSurfaceFormat }} m²</label>
      <input type="range" class="form-range surface-range px-1" min="0" max="10000" id="surfacerangepicker" step="100" v-model="minSurface">

      <!-- FILTER -->
      <button class="button-base button-filter mt-4" @click="setValues()">
        <i class="bi bi-funnel"></i>
        Filtrar
      </button>
    </div>
  </div>
</template>

<script>
import { placesMockData as places } from "@/common/mockData.js";
import { mapGetters } from "vuex";
import store from "@/store";
export default {
  data() {
    return {
      places: places,
      selectedPlace: 0,
      minSurface: 0,
      type: "Todos",
    };
  },
  computed: {
    ...mapGetters({
      parameters: "getParameters",
    }),
    getMinSurfaceFormat() {
      return this.minSurface.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  created() {
    this.type = this.parameters.class;
    this.minSurface = this.parameters.minLand;
    this.selectedPlace = this.places.findIndex(
      (item) => item.value == this.parameters.location.value
    );
  },
  methods: {
    selectPlace(item) {
      this.selectedPlace = item.id;
    },
    selectType(type) {
      this.type = type;
    },

     // method to set the values in vuex
    setValues() {
      store.state.parameters.class = this.type;
      store.state.parameters.location = {
        name: this.places[this.selectedPlace].name,
        value: this.places[this.selectedPlace].value,
      };
      //this.$store.state.parameters.minValue = !this.value ? 0 : this.value;
      store.state.parameters.minLand = this.minSurface;
      store.state.parameters.active = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin track() {
  margin-top: 1rem;
  height: 2px;
  padding: 0;
  cursor: pointer;
  background: #454545;
}

@mixin progress() {
  background: #0dba6a;
  height: 2px;
  /*también podéis cambiar border, etc...*/
}

.search-bar-comp {
  width: 100%;
  height: fit-content;
  background: rgba($color: #282828, $alpha: 0.7);
  padding: 1rem 1.3rem 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  .option-location {
    display: flex;
    flex-direction: column;

    .selector-type {
      display: flex;
      background-color: rgba($color: #727272, $alpha: 0.1);
      height: fit-content;
      width: 100%;
      border-radius: 12px;
      margin-bottom: 1rem;

      button {
        border: none;
        color: var(--color-text-light);
        background-color: rgba($color: #ffffff, $alpha: 0);
        font-weight: var(--font-semi-bold);
        border-radius: 12px;
        padding: 0.6rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        transition: var(--transition-fast);

        &:hover {
          color: var(--color-text);
        }
        &.active {
          background-color: rgba($color: #0dba6a, $alpha: 0.2);
          color: var(--color-complementary-1);
        }
      }
    }

    .button-location {
      border: none;
      color: var(--color-text-light);
      background-color: rgba($color: #ffffff, $alpha: 0.1);
      font-weight: var(--font-semi-bold);
      padding: 0.4rem 0.4rem 0.4rem 0.6rem;
      width: 100%;
      display: flex;
      align-items: center;

      // span with 3 dots when text is too long
      span {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 90%;
      }

      &:hover {
        background-color: rgba($color: #0dba6a, $alpha: 0.2);
        color: var(--color-complementary-1);
      }
    }

    .dropdown-search-list {
      background-color: var(--color-white);
      border-radius: 18px;
      li {
        cursor: pointer;
        a {
          border-radius: 8px;
          font-size: var(--small-font-size);
          font-weight: var(--font-semi-bold);
        }
      }
    }

    .surface-range {
      appearance: none;
      width: 100%;
      height: 5px;
      border-radius: 5px;
      background: none;
      outline: none;
      opacity: 0.7;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
      margin-bottom: 1.5rem;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin-top: -9px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--color-complementary-1);
        cursor: pointer;
      }

      &::-webkit-slider-runnable-track { @include track }
      &::-moz-range-track { @include track }
      &::-ms-track { @include track }

      &::-moz-range-progress { @include progress }
      &::-ms-fill-upper { @include progress }

      &::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--color-complementary-1);
        cursor: pointer;
      }
    }

    .button-filter {
      width: 100%;
      background-color: var(--color-complementary-1);
      color: var(--color-black-1);
      font-weight: var(--font-semi-bold);
      border-radius: 12px;
      &:hover {
        background-color: var(--color-complementary-1-dark);
      }
    }
  }
}
</style>
