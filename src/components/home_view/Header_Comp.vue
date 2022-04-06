<template>
  <div class="container">
    <div class="search-header animate__animated animate__zoomIn">
      <h1 class="animate__animated animate__fadeInDown animate__delay">
        Land Finder México <br />
        El inicio de grandes proyectos
      </h1>
      <div
        class="select-type animate__animated animate__fadeInDown animate__delay"
      >
        <div
          class="selected-box"
          :class="[
            { 'first-selected': options == 1 },
            { 'second-selected': options == 2 },
            { 'third-selected': options == 3 },
          ]"
        ></div>
        <button @click="options = 1" :class="{ selected: options == 1 }">
          Proyectos
        </button>
        <button @click="options = 2" :class="{ selected: options == 2 }">
          Tierras
        </button>
        <button @click="options = 3" :class="{ selected: options == 3 }">
          Edificios
        </button>
      </div>
      <div class="search-bar animate__animated animate__fadeInUp animate__delay">
        <!-- DROPDOWN LOCATION -->
        <div class="search-input" style="width: 35%">
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
            <ul class="dropdown-menu dropdown-search-list" aria-labelledby="dropdown_search_home">
              <li v-for="item in places" :key="item.id">
                <a class="dropdown-item" @click="selectPlace(item)">{{
                  item.name
                }}</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- SUPERFICIE -->
        <div class="search-input">
          <h3>Superficie (min.)</h3>
          <div class="d-flex">
            <input type="text" placeholder="500" />
            <span>M²</span>
          </div>
        </div>
        <!-- VALOR PRICE -->
        <div class="search-input">
          <h3>Valor (min.)</h3>
          <div class="d-flex">
            <input type="text" placeholder="$3'000'000.00" />
            <span>MXN</span>
          </div>
        </div>
        <!-- BOTON SEARCH -->
        <div class="search-input">
          <button class="button-search">Buscar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { placesMockData as places } from "@/common/mockData.js";
export default {
  name: "HeaderComp",
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
.search-header {
  position: relative;
  width: 100%;
  height: 480px;
  background-image: url("@/assets/search-background-min.webp");
  background-position: 0% 20%;
  background-size: cover;
  background-repeat: no-repeat;
  //background-attachment: fixed;
  border-radius: 24px;
  padding: 2rem;
  text-align: center;
  animation-duration: 1s;

  h1 {
    margin-top: 5rem;
    font-size: var(--biggest-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--color-text);
  }
  .select-type {
    background-color: var(--color-white);
    position: absolute;
    display: block;
    bottom: 48px;
    left: calc(50% - 177px);
    width: 354px;
    padding: 10px;
    border-radius: 12px;
    animation-duration: 1.5s;
    button {
      position: relative;
      z-index: 10;
      width: 110px;
      background-color: transparent;
      border: none;
      padding: 0.6rem 0;
      color: var(--color-text-light);
      font-weight: var(--font-semi-bold);
      transition: var(--transition-fast);
      &:hover {
        color: var(--color-text-dark);
      }
    }
    .selected {
      color: var(--color-text) !important;
    }
    .selected-box {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 122px;
      height: 52px;
      background-color: var(--color-background);
      border-radius: 8px;
      transition: all 0.3s ease-in-out;
    }
    .first-selected {
      left: 6px;
    }
    .second-selected {
      left: 116px;
    }
    .third-selected {
      left: 226px;
    }
  }

  .search-bar {
    background-color: var(--color-white);
    position: absolute;
    bottom: -62px;
    left: calc(50% - 450px);
    width: 900px;
    height: 86px;
    padding: 10px 28px;
    border-radius: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation-duration: 1.6s;
    .search-input {
      text-align: left;
      padding: 0 12px;
      .button-location {
        border: none;
        background-color: transparent;
        color: var(--color-text-dark);
        font-weight: var(--font-semi-bold);
        padding: 0;
      }
      .button-search {
        border: none;
        background-color: var(--color-complementary-1);
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
      input {
        border: none;
        width: 70%;
        color: var(--color-text-dark);
        font-weight: var(--font-semi-bold);
        &::placeholder {
          color: var(--color-text-light);
        }
        &:focus {
          outline: none;
        }
      }
      span {
        color: var(--color-text-dark);
        font-weight: var(--font-semi-bold);
      }
      h3 {
        font-size: var(--big-font-size);
        font-weight: var(--font-medium);
        color: var(--color-text-light);
        margin: 0 0 6px;
      }
    }
  }
  @media screen and (max-width: 992px) {
    height: 360px;
    margin-bottom: 240px;
    h1 {
      margin-top: 2rem;
      font-size: var(--h1-font-size);
    }
    .select-type {
      left: calc(50% - 150px);
      width: 300px;
      button {
        width: 33.3%;
      }
      .selected-box {
        position: absolute;
        top: 6px;
        left: 6px;
        width: 100px;
        height: 52px;
        background-color: var(--color-background);
        border-radius: 8px;
        transition: all 0.3s ease-in-out;
      }
      .first-selected {
        left: 6px;
      }
      .second-selected {
        left: 100px;
      }
      .third-selected {
        left: 193px;
      }
    }
    .search-bar {
      bottom: -254px;
      left: calc(50% - 150px);
      width: 300px;
      height: fit-content;
      padding: 16px 6px;
      border-radius: 18px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      animation-duration: 1.6s;
      .search-input {
        width: 100% !important;
        margin-bottom: 12px;
        text-align: center;
        input {
          width: 144px !important;
          text-align: left;
        }
        div {
          justify-content: center;
        }
      }
      div:last-child {
        margin-bottom: 0 !important;
      }
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      margin-top: 2rem;
      font-size: var(--h2-font-size);
    }
  }
}
</style>