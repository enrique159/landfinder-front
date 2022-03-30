<template>
  <div id="app">
    <nav id="navbar" class="container">
      <router-link to="/">
        <img class="logo" src="@/assets/logo.svg" alt="">
      </router-link>
      <div class="nav-options">
        <router-link to="/"><span>Buscar</span></router-link>
        <router-link to="/about"><span>Sobre LFM</span></router-link>
        <router-link to="/us"><span>Nosotros</span></router-link>
        <router-link to="/team"><span>Equipo</span></router-link>
      </div>
      <div class="nav-options-min" :class="{ 'active' : active }">
        <router-link to="/"><span>Buscar</span></router-link>
        <router-link to="/about"><span>Sobre LFM</span></router-link>
        <router-link to="/us"><span>Nosotros</span></router-link>
        <router-link to="/team"><span>Equipo</span></router-link>
      </div>
      <button class="button-nav" @click="toggleNav()">
        <div class="button-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    </nav>

    <!-- ROUTER VIEW -->
    <router-view />

    <!-- FOOTER -->
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue'
export default {
  components: {
    FooterComp
  },  
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggleNav() {
      this.active = !this.active
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/fonts.css";
@import "@/styles/general.scss";

#navbar {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 1rem;
  .logo {
    transition: var(--transition-fast);
    position: relative;
    cursor: pointer;
    z-index: 100;
  }
  .logo:hover {
    opacity: 0.8;
  }
  .nav-options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: var(--transition-fast);
    a {
      font-size: var(--normal-font-size);
      font-weight: var(--font-medium);
      color: var(--color-primary);
      text-decoration: none;
      transition: var(--transition-fast);
      padding: 0 2rem;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    a:nth-child(1) {
      border-right: 1px solid var(--color-white);
    }
    a:nth-child(2) {
      border-right: 1px solid var(--color-white);
    }
    a:nth-child(3) {
      border-right: 1px solid var(--color-white);
    }
  }
  .nav-options-min {
    display: none;
    background: var(--color-background);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    transition: var(--transition-fast);
    padding: 98px 0 48px;
    z-index: 50;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     a {
      font-size: var(--normal-font-size);
      font-weight: var(--font-medium);
      color: var(--color-primary);
      text-decoration: none;
      transition: var(--transition-fast);
      padding: 0 2rem;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    a:nth-child(1), a:nth-child(2), a:nth-child(3) {
      border: none;
    }
    a:nth-child(1) {
      border-bottom: 1px solid var(--color-white);
    }
    a:nth-child(2) {
      border-bottom: 1px solid var(--color-white);
    }
    a:nth-child(3) {
      border-bottom: 1px solid var(--color-white);
    }
  }
  .button-nav {
    background: transparent;
    border: none;
    cursor: pointer;
    display: none;
    position: relative;
    z-index: 100;
    .button-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: fit-content;
      padding: 1rem;
      column-gap: 0.2rem;
      transition: var(--transition-normal);
      border-radius: 1rem;
      &:hover {
        column-gap: 0.4rem;
        background-color: #323232;
      }
      div {
        width: 0.3rem;
        height: 0.3rem;
        background: var(--color-white);
        border-radius: 50%;
        transition: var(--transition-fast);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .nav-options {
      display: none;
    }
    .nav-options-min {
      display: flex;
      position: absolute;
      top: -30%;
      left: 0;
      width: 100%;
      height: 0px;
    }
    .button-nav {
      display: inline-block;
    }
    .active {
      display: flex;
      position: absolute;
      background: var(--color-background);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
      top: 0;
      width: 100%;
      height: 80vh;
      padding: 98px 0 48px;
      z-index: 50;
      flex-direction: column;
      justify-content: center;
      a {
        padding: 2rem 0;
        width: 100px;
        text-align: center;
      }
      a:nth-child(1), a:nth-child(2), a:nth-child(3) {
        border: none;
      }
      a:nth-child(1) {
        border-bottom: 1px solid var(--color-white);
      }
      a:nth-child(2) {
        border-bottom: 1px solid var(--color-white);
      }
      a:nth-child(3) {
        border-bottom: 1px solid var(--color-white);
      }
    }
  }
}
</style>
