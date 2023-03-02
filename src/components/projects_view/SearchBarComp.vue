<template>
  <div class="search-bar-comp">
    <h5 class="mb-4">Filtrar por:</h5>
    <div class="option-location">
      <!-- TYPE PROJECT -->
      <label class="ts-small ps-2 pb-1">Tipo de inmueble</label>
      <div class="selector-type">
        <button :class="[ parameters.class == 'Todos' ? 'active' : '' ]" @click="selectType('Todos')">Todos</button>
        <button :class="[ parameters.class == 'Edificio' ? 'active' : '' ]" @click="selectType('Edificio')">Edificio</button>
        <button :class="[ parameters.class == 'Terreno' ? 'active' : '' ]" @click="selectType('Terreno')">Tierra</button>
      </div>

      <!-- PLACE SELECTION -->
      <label for="dropdown_search_home" class="ts-small ps-2 pb-1">Ubicación</label>
      <button
        class="button-base button-location dropdown-toggle"
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
    }
  },
  computed: {
    ...mapGetters({
      parameters: 'getParameters'
    }),
  },
  created() {
    this.selectedPlace = this.places.findIndex(
      (item) => item.value == this.parameters.location.value
    );
  },
  methods: {
    selectPlace(item) {
      this.selectedPlace = item.id;
    },
    selectType(type) {
      store.state.parameters.class = type;
    }
  },
}
</script>

<style lang="scss" scoped>
.search-bar-comp {
  width: 100%;
  height: fit-content;
  background: rgba($color: #282828, $alpha: 0.7);
  padding: 1rem 1.3rem;
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

        &:hover {
          background-color: rgba($color: #ffffff, $alpha: 0.1);
          color: var(--color-text);
        }
        &.active {
          background-color: rgba($color: #0DBA6A, $alpha: 0.2);
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
        background-color: rgba($color: #0DBA6A, $alpha: 0.2);
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
  }
}
</style>