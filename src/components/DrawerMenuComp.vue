<template>
  <div class="drawer-menu-container" :class="{ 'active': activeProp }" @click.self="toggleNav()">
    <div class="drawer-menu" :class="{ 'active': activeProp }">
      <div class="d-flex justify-content-between py-3">
        <div class="d-flex align-items-center gap-3" v-if="isLogged">
          <!-- <i class="bi bi-person ts-h2 pe-2"></i> -->
          <img :src="require(`@/assets/lfm_type_${getTypeImage}.png`)" alt="Img" style="width: 32px">
          <div>
            <p class="ts-small tc-text mb-0">{{ getUser.name + " " + getUser.lastname }}</p>
            <p class="ts-small tc-text-light mb-0">{{ getUser.email }}</p>
          </div>
        </div>
        <div v-else></div>
        <button class="button-close" @click="toggleNav()">
          <i class="bi bi-x-circle"></i>
        </button>
      </div>
      <div class="row">
        <div class="col col-12 col-md-4">
          <span class="title-content">Mi cuenta</span>

          <!-- MENU LOGGED -->
          <div class="menu-user pt-4" v-if="isLogged">
            <router-link to="/profile" @click.native="activeProp = false">Mi perfil</router-link>
            <router-link to="/saved" @click.native="activeProp = false">Guardados</router-link>
            <a @click="logout()">Cerrar sesión</a>
          </div>

          <!-- MENU NO LOGGED -->
          <div class="menu-user pt-4" v-else>
            <button @click="toLogin" class="btn button-base button-login">
              inicia sesión
            </button>
            <button @click="toSignUp" class="btn button-base button-register">
              registrarme
            </button>
          </div>

          <div class="menu-user pt-2 pt-md-5">
            <router-link to="/support" @click.native="activeProp = false">
              <span class="ts-small tc-text-light">Ayuda y soporte</span>
            </router-link>
            <router-link to="/terminos-y-condiciones" @click.native="activeProp = false">
              <span class="ts-small tc-text-light">Términos y condiciones</span>
            </router-link>
            <router-link to="/politicas-privacidad" @click.native="activeProp = false">
              <span class="ts-small tc-text-light">Privacidad</span>
            </router-link>
          </div>
        </div>
        <div class="col col-12 col-md-8">
          <span class="title-content">Menú</span>
          <div class="menu-content pt-4 ff-secondary">
            <router-link to="/#header-search" @click.native="scrollFix('#header-search')"><span>Inicio</span></router-link>
            <router-link to="/marketplace" @click.native="activeProp = false"><span>Marketplace</span></router-link>
            <router-link to="/#places" @click.native="scrollFix('#places')"><span>Lugares</span></router-link>
            <router-link to="/#methodology" @click.native="scrollFix('#methodology')"><span>Metodología</span></router-link>
            <router-link to="/collaborators" @click.native="activeProp = false"><span>Colaboradores</span></router-link>
            <!-- <router-link to="/#team" @click.native="scrollFix('#team')"><span>Partners</span></router-link> -->
            <router-link to="/contacto" @click.native="activeProp = false"><span>Contacto</span></router-link>
          </div>
        </div>
      </div>
      <div class="dashboard-footer">
        <div class="container fluid px-0">
          <div class="row" >
            <div class="col col-8 col-sm-6">
              <p class="tc-text-dark ts-small mb-0">Contáctanos</p>
              <a href="mailto:hola@landfindermexico.com" class="ml-2 tc-text-light">hola@landfindermexico.com</a>
            </div>
            <div class="col col-4 col-sm-6">
              <p class="tc-text-dark ts-small mb-0">Nuestras redes</p>
              <a href="https://www.facebook.com/landfinderm" target="_blank" class="me-3 tc-text-light">
                <i class="bi bi-facebook">
              </i></a>
              <a href="https://www.linkedin.com/company/landfindermexico/" target="_blank" class="me-3 tc-text-light">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="https://www.twitter.com/LandFinderMx" target="_blank" class="me-3 tc-text-light">
                <i class="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import { logoutUser } from '@/auth'
import { mapGetters } from 'vuex'
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
    ...mapGetters(['getUser']),
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
    getUsertype() {
      return store.getters['getUserType']
    },
    getTypeImage() {
      return this.getUsertype == 'OWNER' ? 1 : this.getUsertype == 'INVESTOR' ? 2 : 3
    }
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
    },
    toLogin(){
      this.$router.push('/login')
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

  .button-close {
    background-color: transparent;
    border: none;
    color: var(--color-text);
    font-size: 2rem;
    &:hover {
      color: var(--color-text-dark);
    }
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
    display: flex;
    flex-direction: column;
    // container
    padding: 1rem 3rem;
    &.active {
      transform: translateX(0);
    }

    .title-content {
      font-size: var(--normal-font-size);
      color: var(--color-text-light);
    }

    .dashboard-footer {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: flex-end;
      padding: 1rem 0;
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
      .button-login {
        border: 2px solid #969696;
        background: transparent;
        color: var(--color-text);
        padding: 0.3rem 1rem;
        width: 100%;
        max-width: 128px;
        &:hover {
          border: 2px solid var(--color-text-dark);
        }
      }
      .button-register {
        border: none;
        color: var(--color-complementary-1);
        background-color: rgba($color: #0DBA6A, $alpha: 0.2);
        width: 100%;
        max-width: 128px;
        &:hover {
          background-color: var(--color-complementary-1);
          color: var(--color-white);
        }
      }
      a {
        width: fit-content;
        position:relative;
        font-size: var(--normal-font-size);
        cursor: pointer;
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
      .menu-user {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .drawer-menu-container {
    overflow-y: auto;
    .drawer-menu {
      padding: 1rem 2rem;
      .menu-content {
        a {
          font-size: var(--h1-font-size);
        }
      }
    }
  }
}
</style>