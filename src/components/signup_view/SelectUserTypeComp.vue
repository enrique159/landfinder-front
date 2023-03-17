<template>
  <div class="select-usertype-comp">
    <slot name="description" />

    <div class="select-usertype-comp__options">
      <!-- PROPIETARIO -->
      <button 
        class="select-usertype-comp__options__button"
        :class="{ active: userProp.type === 'OWNER' }"
        @click="setUserType('OWNER')"
      >
        <img src="@/assets/lfm_type_1.png">
        <p class="mb-0">Soy propietario de inmueble</p>
        <i class="bi bi-check-circle-fill"></i>
      </button>

      <!-- DESARROLLADOR -->
      <button 
        class="select-usertype-comp__options__button"
        :class="{ active: userProp.type === 'INVESTOR' }"
        @click="setUserType('INVESTOR')"
      >  
        <img src="@/assets/lfm_type_2.png">
        <p class="mb-0">Soy inversionista o desarrollador</p>
        <i class="bi bi-check-circle-fill"></i>
      </button>

      <!-- REAL ESTATE -->
      <button 
        class="select-usertype-comp__options__button"
        :class="{ active: userProp.type === 'REALESTATE' }"
        @click="setUserType('REALESTATE')"
      >
        <img src="@/assets/lfm_type_3.png">
        <p class="mb-0">Soy empresa inmobiliaria</p>
        <i class="bi bi-check-circle-fill"></i>
      </button>
    </div>

    <div class="d-flex justify-content-end mt-5">
      <button class="btn-continue" @click="goNext()">
        Continuar
        <img src="@/assets/icons/arrow-down-right.svg" alt="">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  computed: {
    userProp: {
      get: function () {
        return this.user
      },
      set: function (newValue) {
        this.$emit('update:user', newValue)
      }
    }
  },
  methods: {
    setUserType (type) {
      this.userProp.type = type
    },
    goBack () {
      this.$emit('back')
    },
    goNext () {
      this.$emit('next')
    }
  },
}
</script>

<style lang="scss" scoped>
.select-usertype-comp {
  width: 100%;
  height: fit-content;

  &__options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: fit-content;

    &__button {
      display: flex;
      align-items: center;
      gap: 1rem;
      width: 100%;
      height: 4rem;
      padding: 0 1rem;
      border: 1px solid #212121;
      border-radius: 0.5rem;
      background-color: transparent;
      color: var(--color-white);
      transition: var(--transition-fast);
      text-align: left;
      cursor: pointer;

      &:hover {
        border-color: var(--color-complementary-1);
      }

      img {
        width: 2rem;
        height: 2rem;
      }

      p {
        font-size: 1rem;
        font-weight: 500;
        color: inherit;
      }

      i {
        margin-left: auto;
        font-size: 1rem;
        color: inherit;
        display: none;
      }

      &.active {
        border-color: var(--color-white);
        background-color: #161616;
        i {
          display: block;
        }
      }
    }
  }

  .btn-continue {
    background-color: #0c0c0c;
    color: var(--color-white-2);
    padding: 0.5rem 1rem;
    font-weight: var(--font-semi-bold);
    img { width: 12px; transform: rotate(-90deg); }
    border-radius: 12px;
  }

  .btn-goback {
    background-color: transparent;
    color: var(--color-text-light);
    padding: 0.5rem 1rem;
    font-weight: var(--font-semi-bold);
    border-radius: 12px;
  }
}
</style>