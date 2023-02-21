<template>
  <div id="app">
    <div class="position-fixed w-100 navbar-container">
      <nav id="navbar" class="container">
        <router-link to="/">
          <img class="logo" src="@/assets/logo.svg" alt="">
        </router-link>
        <div class="menu-dashboard">
          <div class="menu-dashboard__info">
            <h5 class="text-end mb-0">menu</h5>
            <div class="d-flex" v-if="isLogged">
              <i class="bi bi-person tc-text-light pe-2"></i>
              <span class="ts-small tc-text-light">{{ username }}</span>
            </div>
          </div>
          <i class="bi bi-person tc-text-light icon-min"></i>
          <button class="button-nav" @click="toggleNav()">
            <div class="button-icon">
              <div></div>
              <div></div>
              <div></div>
            </div>
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
import FooterComp from '@/components/FooterComp.vue'
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
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/fonts.css";
@import "@/styles/general.scss";

.navbar-container {
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

  .menu-dashboard {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    .icon-min { display: none; }
    &__info { display: block; }
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
    background: transparent;
    border: none;
    cursor: pointer;
    display: inline-block;
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
      border-radius: 2rem;
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
