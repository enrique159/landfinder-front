<template>
  <form id="signUpFormPart2" class="mb-4" @submit.prevent="() => {}">
    <slot name="description" />

    <div class="form-group mb-3">
      <label for="passwordInput" class="ms-2">Contraseña *</label>
      <div class="password-container">
        <i
          :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"
          @click="showPassword = !showPassword"
        ></i>
        <input
          :type="showPassword ? 'text' : 'password'"
          class="form-input"
          :class="{ 'is-invalid': $v.password.$error }"
          placeholder="Mi contraseña"
          id="passwordInput"
          v-model="password"
          @keypress="validatePassword($event)"
        />
      </div>
        <small v-if="$v.password.$error && !$v.password.required" class="error-label ms-2">Este campo es requerido</small>
        <small v-if="$v.password.$error && !$v.password.minLength < 8" class="error-label ms-2">La contraseña debe de contener mínimo 8 caracteres</small>
      <span></span>
    </div>

    <div class="form-group mb-4">
      <label for="passwordRepeatInput" class="ms-2">Repetir contraseña *</label>
      <div class="password-container">
        <i
          :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"
          @click="showPassword = !showPassword"
        ></i>
        <input
          :type="showPassword ? 'text' : 'password'"
          class="form-input"
          :class="{ 'is-invalid': $v.password.$error }"
          placeholder="Repetir contraseña"
          id="passwordRepeatInput"
          v-model="passwordRepeat"
          @keypress="validatePassword($event)"
        />
      </div>
        <small v-if="$v.password.$error && !$v.password.required" class="error-label ms-2">Este campo es requerido</small>
        <small v-if="!passwordMatch" class="error-label ms-2">La contraseñas deben de ser iguales</small>
      <span></span>
    </div>

    <div class="d-flex justify-content-between mt-5">
      <button class="btn-goback" @click="goBack()">Anterior</button>
      <button class="btn-continue" @click="goNext()">
        <span v-if="!loading">Crear cuenta</span>
        <span
          v-if="loading"
          class="spinner-border spinner-border-sm ml-3"
          role="status"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  </form>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import { validatePassword } from '@/utils/keyPressValidate'

export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
      required: true
    },
    loading: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {
      password: "",
      passwordRepeat: "",
      showPassword: false,
    }
  },
  computed: {
    passwordMatch(){
      return this.password == this.passwordRepeat
    },
    userProp: {
      get: function () {
        return this.user
      },
      set: function (newValue) {
        this.$emit('update:user', newValue)
      }
    }
  },
  validations: {
    password: {
      required,
      minLength: minLength(8),
    },
    passwordRepeat: {
      required,
      minLength: minLength(8),
    },
  },
  methods: {
    validatePassword(event){
      validatePassword(event)
    },
    validForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }
      return true;
    },
    goBack() {
      this.$emit('back')
    },
    goNext() {
      if (this.validForm() && this.passwordMatch) {
        this.userProp = {
          ...this.userProp,
          password: this.password,
        }
        this.$emit('next')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
#signUpFormPart2 {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  .form-group {
    display: flex;
    flex-direction: column;

    .chips-selector {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-bottom: 1rem;
      gap: 0.6rem;
      .chip {
        background-color: transparent;
        border: 2px solid var(--color-black-3);
        border-radius: 24px;
        color: var(--color-white-2);
        cursor: pointer;
        font-weight: var(--font-semi-bold);
        padding: 0.5rem 1rem;
        transition: var(--transition-fast);
        &.active {
          background-color: var(--color-complementary-1-dark);
          border: 2px solid var(--color-background);
          color: var(--color-black);
        }
      }
    }

    .password-container {
      display: flex;
      flex-direction: column;
      position: relative;
      i {
        position: absolute;
        top: calc(50% - 0.7rem);
        right: 1rem;
        cursor: pointer;
      }
    }
    .form-input {
      width: 100%;
      background-color: transparent;
      border: none;
      border: 2px solid var(--color-black-3);
      border-radius: 12px;
      padding: 0.5rem 1rem;
      color: var(--color-white-2);
      font-weight: var(--font-semi-bold);
      outline: none !important;
      margin-bottom: 3px;
      &::placeholder {
        color: rgb(100, 100, 100);
        opacity: 1;
      }
    }

    .is-invalid {
      border-color: var(--color-error);
    }
  }
  .form-button {
    width: 100%;
    height: fit-content;
    border-radius: 12px;
    padding: 0.5rem 1rem;
    font-size: var(--normal-font-size);
    font-weight: var(--font-bold);
    color: var(--color-white);
    background-color: var(--color-complementary-1);
    transition: var(--transition-fast);
    cursor: pointer;
    &:hover {
      background-color: var(--color-black-3);
    }
  }
  .error-label{
    color: var(--color-error);
    font-size: .8rem;
  }

  .btn-continue {
    background-color: var(--color-complementary-1);
    color: var(--color-black);
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

@media screen and (max-width: 992px) {
  #signUpFormPart2 {
    max-width: 100%;
    padding: 0 1rem;
  }
}
</style>