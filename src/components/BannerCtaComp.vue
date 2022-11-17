<template>
  <!-- :class="{ 'show': showBanner }" -->
  <div class="banner-cta-comp animate__animated animate__zoomInDown" :class="{ 'show': showBanner }">
    <p class="main-text">
      ¿Quieres saber más sobre lo que tenemos para ti?
    </p>
    <button class="button-show-register" data-bs-toggle="modal" data-bs-target="#formNewsletter">¡Regístrate ahora!</button>
    <div class="button-close">
      <button class="btn btn-transparency btn-sm" @click="closeBanner">
        <i class="bi bi-x"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBanner: false,
      flagClose: true
    }
  },
  mounted() {
    // add a scroll event listener
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // get the current scroll position
      const scrollPosition = window.pageYOffset;
      // if the scroll position is greater than 100px, show the banner
      if (scrollPosition > 400 && this.flagClose) {
        this.showBanner = true;
      }
    },

    closeBanner() {
      this.showBanner = false;
      this.flagClose = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-cta-comp {
  background-color: var(--color-complementary-1);
  width: 100%;
  height: fit-content;
  min-height: 40px;
  display: none;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  position: fixed;
  top: 110px;
  left: 0;
  z-index: 999;
  padding: 4px 14%;

  .main-text {
    color: black;
    font-size: var(--normal-font-size);
    font-weight: var(--font-semi-bold);
    text-align: center;
    margin: 0;
  }
}

.button-show-register {
  background: white;
  font-size: var(--small-font-size);
  font-weight: var(--font-semi-bold);
  color: var(--color-black);
  display: grid;
  place-items: center;
  border-radius: 8px;
  height: fit-content;
  min-height: 30px;
  min-width: 136px;
  margin: 0;
  transition: 0.2s ease-in-out;

  &:hover {
    font-size: var(--smaller-font-size);
  }

  &:active {
    opacity: 0.8;
  }
}

.button-close {
  position: absolute;
  right: 10px;
  top: 4px;
}

.show {
  display: flex;
}

@media only screen and (max-width: 768px) {
  .banner-cta-comp {
    padding: 4px 50px 4px 20px;
    top: 118px;
    .main-text {
      font-size: var(--small-font-size);
      text-align: left;
    }
  }
}
</style>