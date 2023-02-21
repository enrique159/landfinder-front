<template>
  <div class="login-view container">
    <div class="d-flex justify-content-center flex-column align-items-center">
      <h1 class="text-center">Inicia sesión</h1>
      <p class="text-center">Ingresa tus datos para iniciar sesión</p>
      <form id="signInForm" class="mb-4" @submit.prevent="signIn()">
        <div class="form-group mb-3">
          <label for="bussinesNameInput" class="ms-2">Correo electrónico</label>
          <input
            type="email"
            class="form-input"
            :class="{ 'is-invalid': $v.email.$error }"
            placeholder="micorreo@mail.com"
            id="emailInput"
            v-model="email"
          />
        </div>
        <div class="form-group mb-4">
          <label for="emailInput" class="ms-2">Contraseña</label>
          <div class="password-container">
            <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'" @click="showPassword = !showPassword"></i>
            <input
              :type="showPassword ? 'text' : 'password'"
              class="form-input"
              :class="{ 'is-invalid': $v.password.$error }"
              placeholder="Mi contraseña"
              id="passwordInput"
              v-model="password"
            />
          </div>
          <span></span>
        </div>
        <button type="submit" class="form-button">
          <div class="spinner-border spinner-border-sm text-light ms-1" role="status" v-if="loading">
            <span class="visually-hidden">Loading...</span>
          </div>
          <span v-else>
            Ingresar
          </span> 
        </button>
      </form>
      <router-link class="link-router" to="/forgot-password" >Olvidé mi contraseña</router-link >
      <p>
        ¿No tienes una cuenta?
        <router-link class="link-router" to="/register">Regístrate aquí</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import { setAuthToken, setUser, isLoggedIn } from "@/auth";
import AuthServices from "@/services/AuthServices";
export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      loading: false,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
  methods: {
    validForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }
      return true;
    },

    signIn() {
      if (this.validForm()) {
        this.loading = true;
        AuthServices.login(this.email, this.password)
          .then((res) => {
            if (res.status == 200) {
              this.setUserLogin(res.data);
              this.$router.push({ name: "home" });
            } else {
              if (res.status == 400) {
                this.showToast('error', 'Usuario o contraseña incorrectos')
              } else {
                this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')
              }
            }
          })
          .catch((err) => {
            console.log(err)
            this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')
          }).finally(() => {
            this.loading = false;
          });
      }
    },

    // Método para setear los valores
    setUserLogin(data) {
      setAuthToken(data.jwt);
      setUser(data.user);
    },

    // SHOW TOAST
    showToast(type, message) {
      this.$toast(message, {
        type: type,
        position: 'top-right',
        duration: 3000,
        dismissible: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: 'button',
        icon: true,
        rtl: false,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.login-view {
  width: 100%;
  height: 100%;
  padding-top: 10%;
  padding-bottom: 10%;

  .link-router {
    text-decoration: underline;
  }

  #signInForm {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
    .form-group {
      display: flex;
      flex-direction: column;

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
        background-color: transparent;
        border: none;
        border: 2px solid var(--color-black-3);
        border-radius: 12px;
        padding: 0.5rem 1rem;
        color: var(--color-white-2);
        font-weight: var(--font-semi-bold);
        outline: none !important;
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
  }
}

@media screen and (min-width: 768px) {
  .login-view {
    padding-top: 5%;
    padding-bottom: 5%;
  }
}
</style>
