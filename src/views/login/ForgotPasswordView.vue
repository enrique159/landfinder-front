<template>
  <div class="forgotpass-view container">
    <div class="d-flex justify-content-center flex-column align-items-center">
      <h1 class="text-center">Oldivé mi contraseña</h1>
      <p class="text-center mb-3">Ingresa tu correo electrónico. Se enviará un link para la recuperación de tu contraseña.
      </p>
      <form id="forgotPassForm" class="mb-4" @submit.prevent="forgotPassword()">
        <div class="form-group mb-3">
          <input type="email" class="form-input" :class="{ 'is-invalid': $v.email.$error }"
            placeholder="micorreo@mail.com" id="emailInput" v-model="email" />
          <small v-if="$v.email.$error && !$v.email.required" class="error-label ms-2">Este campo es requerido</small>
        </div>
        <button type="submit" class="form-button">
          <div class="spinner-border spinner-border-sm text-light ms-1" role="status" v-if="loading">
            <span class="visually-hidden">Loading...</span>
          </div>
          <span v-else>
            Enviar
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import AuthServices from "@/services/AuthServices";
export default {
  metaInfo: {
    title: "Land Finder México",
    titleTemplate: "%s | Olvidé mi contraseña",
  },
  data() {
    return {
      email: "",
      loading: false,
    };
  },
  validations: {
    email: {
      required,
      email,
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

    forgotPassword() {
      if (this.validForm()) {
        this.loading = true;
        AuthServices.forgotPassword(this.email)
          .then((res) => {
            if (res.status == 200) {
              this.showToast('success', 'Se ha enviado un link de recuperación de contraseña a tu bandeja de entrada.')
              this.email = ""
            } else {
              this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')

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
.forgotpass-view {
  width: 100%;
  height: 100%;
  padding-top: 10%;
  padding-bottom: 10%;

  .link-router {
    text-decoration: underline;
  }

  #forgotPassForm {
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

  .error-label {
    color: var(--color-error);
    font-size: .8rem;
  }
}

@media screen and (min-width: 768px) {
  .forgotpass-view {
    padding-top: 5%;
    padding-bottom: 5%;
  }
}
</style>
