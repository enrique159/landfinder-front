<template>
  <div id="app">
    <div class="position-fixed w-100 navbar-container">
      <nav id="navbar" class="container">
        <router-link to="/">
          <img class="logo" src="@/assets/logo.svg" alt="">
        </router-link>
        <div class="menu-dashboard">
          <div class="d-flex justify-content-center align-items-center gap-2 me-0 me-sm-2" v-if="!isLogged">
            <button id="#buttonLogin" class="button-login" ref="buttonLogin" @click="goTo('/login', true)">
              <span>Iniciar sesión</span>
              <i class="bi bi-box-arrow-in-right"></i>
            </button>
            <button class="button-register" @click="goTo('/signup', true)">
              <span>Registrarme ahora</span>
              <i class="bi bi-person-plus-fill"></i>
            </button>
          </div>
          <div class="menu-dashboard__info" v-if="isLogged">
            <button class="button-market" @click="goTo('/marketplace', true)">
              <span>marketplace</span>
            </button>
            <i class="bi bi-person tc-text-light pe-2"></i>
          </div>
          <i v-if="isLogged" class="bi bi-person tc-text-light icon-min"></i>
          <button class="button-nav" @click="toggleNav()">
            <div class="line-1"></div>
            <div class="line-2"></div>
          </button>
        </div>
      </nav>
    </div>
    <div class="spacer-120" id="header-search"></div>
    <!-- ROUTER VIEW -->
    <router-view />

    <!-- FOOTER -->
    <FooterComp />

    <DrawerMenuComp :active="active" @updateActive="active = $event" />
  </div>
</template>

<script>
import FooterComp from '@/components/Footer/FooterNewComp.vue'
import DrawerMenuComp from '@/components/DrawerMenuComp.vue';
import { isLoggedIn, logoutUser } from '@/auth'
import store from '@/store'
export default {
  components: {
    FooterComp,
    DrawerMenuComp
  },  
  data() {
    return {
      active: false,
      view: {
        topOfPage: true,
      },
    }
  },
  computed: {
    isLogged() {
      return isLoggedIn();
    },
    username() {
      return isLoggedIn() ? store.state.user.username : '';
    }
  },
  mounted() {
    if (!isLoggedIn) logoutUser();
    const buttonLogin = this.$refs.buttonLogin;
    if (buttonLogin) {
      buttonLogin.addEventListener('mousemove', this.handleOnMouseMove);
    }
  },
  beforeUnmount() {
    const buttonLogin = this.$refs.buttonLogin;
    if (buttonLogin) {
      buttonLogin.removeEventListener('mousemove', this.handleOnMouseMove);
    }
  },
  methods: {
    toggleNav() {
      this.active = !this.active
    },
    goTo(path, router) {
      this.active = false;
      return router ? this.$router.push(path) : window.open(path, "_self");
    },
    scrollFix: function(hashbang) {
      if (this.active) this.active = false;
      location.href = hashbang;
    },
    handleOnMouseMove(event) {
      const { currentTarget: target } = event;
      const rect = target.getBoundingClientRect(),
        x = event.clientX - rect.left,
        y = event.clientY - rect.top;

      target.style.setProperty('--mouse-x', `${ x }px`);
      target.style.setProperty('--mouse-y', `${ y }px`);
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/fonts.css";
@import "@/styles/general.scss";

.navbar-container {
  width: 100%;
  position: relative;
  z-index: 100;
  background: rgba($color: #101010, $alpha: 0.7);
  backdrop-filter: blur( 24px );
  -webkit-backdrop-filter: blur( 24px );
}

#navbar {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: var(--transition-normal);
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

  .button-login {
    height: 38px;
    border: 2px solid #969696;
    background: transparent;
    color: var(--color-text);
    padding: 0.3rem 1rem;
    border-radius: 2rem;
    position: relative;

    span {
      font-size: var(--small-font-size);
      font-weight: var(--font-bold);
    }

    &::before {
      background: radial-gradient(
        200px circle at var(--mouse-x) var(--mouse-y), 
        rgba(255, 255, 255, 0.2),
        transparent 40%
      );
      border-radius: inherit;
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.3s;
      top: 0;
      left: 0;
      content: '';
      z-index: 2;
    }

    &:hover::before {
      opacity: 1;
    }

    i {
      display: none;
    }
  }

  .button-register {
    height: 38px;
    background: linear-gradient(-90deg, var(--color-complementary-1-dark), #101010);
    color: var(--color-text);
    padding: 0.2rem 1.5rem;
    border-radius: 2rem;
    font-size: var(--small-font-size);
    font-weight: var(--font-bold);
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: var(--color-complementary-1-dark);
      border-radius: 2rem;
      transition: var(--transition-normal);
      opacity: 0;
    }
    &:hover {
      &::before {
        opacity: 1;
      }
    }
    span {
      position: relative;
      z-index: 100;
    }
    i {
      display: none;
    }
  }

  .menu-dashboard {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    .icon-min { display: none; }
    &__info { 
      display: flex;
      align-items: center;
      column-gap: 1rem; 
      .button-market {
        height: 38px;
        border: 2px solid #969696;
        background: transparent;
        color: var(--color-text);
        padding: 0.3rem 1rem;
        border-radius: 2rem;
        position: relative;
      }
    }
  }

  .portfolio-link {
    width: fit-content;
    font-size: 1.25rem;
    position: relative;
    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--color-text);
      transition: width 0.3s;
    }
    &:hover { color: var(--color-text); }
    &:hover::before {
      width: 100%;
    }
  };

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
    a:nth-child(4) {
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
    a:nth-child(4) {
      border-bottom: 1px solid var(--color-white);
    }
  }
  .button-nav {
    background: #141414;
    border: 1px solid #141414;
    cursor: pointer;
    width: 38px;
    height: 38px;
    max-width: 38px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    transition: var(--transition-normal);
    border-radius: 2rem;
    padding: 6px 0;
    padding-left: 10px;
    div {
      height: 2px;
      background: var(--color-white);
      transition: var(--transition-fast);
    }
    .line-1 { width: 18px; margin-bottom: 3px; }
    .line-2 { width: 14px; }
    &:hover {
      border: 1px solid var(--color-black-2);
      .line-1 { width: 12px; }
      .line-2 { width: 8px; }
    }
  }

  @media screen and (max-width: 768px) {
    .portfolio-link {
      span { display: none; }
    }

    .button-login, .button-register {
      width: 38px;
      height: 38px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      span { display: none; }
      i { position: relative; z-index: 100; display: block; line-height: 0; }
      font-size: 1.2rem;
    }
    .button-login i {
      padding-right: 2px;
    }
    .button-register {
      background: var(--color-complementary-1);
    }
    .button-register i {
      padding-left: 4px;
    }

    .nav-options {
      display: none;
    }
    .nav-options-min {
      display: flex;
      position: absolute;
      top: -180px;
      left: 0;
      width: 100%;
      height: 0px;
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

@media screen and (max-width: 576px) {
  #navbar {
    .menu-dashboard {
      &__info { display: none; }
      .icon-min { display: block; }
    }
  }
}
</style>
