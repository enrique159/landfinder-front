<template>
  <div class="drawer-menu-container" :class="{ 'active': activeProp }" @click.self="toggleNav()">
    <div class="drawer-menu" :class="{ 'active': activeProp }">
      <div class="d-flex justify-content-end py-3">
        <button class="btn btn-primary" @click="toggleNav()">close</button>
      </div>
      <div class="row">
        <div class="col col-5 col-md-4">
          <span class="title-content">Mi cuenta</span>
          <div class="menu-user pt-4" v-if="isLogged">
            <router-link to="/account">Mi cuenta</router-link>
            <a @click="logout()">Cerrar sesión</a>
          </div>
          <div class="menu-user pt-4" v-else>
            <router-link to="/login" @click.native="active = false" class="button-base button-signin">Inicia sesión</router-link>
            <button @click="toSignUp" class="btn button-base button-register">
              registrarme
            </button>
          </div>
        </div>
        <div class="col col-7 col-md-8">
          <span class="title-content">Menú</span>
          <div class="menu-content pt-4">
            <router-link to="/#header-search" @click.native="scrollFix('#header-search')"><span>Buscar</span></router-link>
            <router-link to="/portfolio" @click.native="activeProp = false"><span>Portafolio</span></router-link>
            <router-link to="/#methodology" @click.native="scrollFix('#methodology')"><span>Metodología</span></router-link>
            <router-link to="/#team" @click.native="scrollFix('#team')"><span>Partners</span></router-link>
            <router-link to="/#contacto" @click.native="scrollFix('#contacto')"><span>Contacto</span></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import { logoutUser } from '@/auth'
export default {
  name: 'DrawerMenuComp',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    isLogged() {
      return store.getters['getIsLoggedIn']
    },
    activeProp: {
      get() {
        return this.active
      },
      set(value) {
        this.$emit('updateActive', value)
      },
    },
  },
  methods: {
    toggleNav() {
      this.activeProp = !this.activeProp
    },
    scrollFix(hashbang) {
      if (this.activeProp) this.activeProp = false;
      location.href = hashbang;
    },
    logout() {
      logoutUser()
      this.$router.push('/')
    },
    toSignUp(){
      this.$router.push('/signup')
      this.activeProp = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-menu-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  &.active {
    opacity: 1;
    transition: none;
    pointer-events: all;
    z-index: 200;
  }

  .drawer-menu {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    max-width: 720px;
    background-color: var(--color-background);
    z-index: 200;
    color: var(--color-text);
    transition: all 0.3s ease-in-out;
    transform: translateX(100%);
    // container
    padding: 1rem 3rem;
    &.active {
      transform: translateX(0);
    }

    .title-content {
      font-size: var(--normal-font-size);
      color: var(--color-text-light);
    }

    
    
    .menu-user {
      display: flex;
      flex-direction: column;
      row-gap: 0.6rem;
      .button-signin {
        color: var(--color-text);
        background-color: transparent;
        &:hover {
          background-color: var(--color-text-dark);
          color: var(--color-white);
        }
      }
      .button-register {
        border: 2px solid var(--color-complementary-1);
        color: var(--color-complementary-1);
        background-color: transparent;
        &:hover {
          background-color: var(--color-complementary-1);
          color: var(--color-white);
        }
      }
      a {
        width: fit-content;
        position:relative;
        font-size: var(--normal-font-size);
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
      }
    }

    .menu-content {
      display: flex;
      flex-direction: column;
      a {
        width: fit-content;
        position:relative;
        font-size: var(--biggest-font-size);
        &::before {
          content: '';
          display: block;
          position: absolute;
          bottom: 6px;
          left: 0;
          width: 0;
          height: 3px;
          background-color: var(--color-text);
          transition: width 0.3s;
        }
        &:hover { color: var(--color-text); }
        &:hover::before {
          width: 100%;
        }
      }
    }
  }
}

@media only screen and (max-width: 992px) {
  .drawer-menu-container {
    .drawer-menu {
      width: 100%;
    }
  }
}

@media screen and (max-width: 768px) {
  .drawer-menu-container {
    .drawer-menu {
      padding: 1rem 2rem;
      .menu-content {
        a {
          font-size: var(--h2-font-size);
        }
      }
    }
  }
}
</style>