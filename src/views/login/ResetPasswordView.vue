<template>
  <div class="resetpassword-view container">
    <div class="d-flex justify-content-center flex-column align-items-center">
      <h1 class="text-center">Nueva contraseña</h1>
      <p class="text-center">Reestablece tu contraseña</p>
      <form id="resetPasswordForm" class="mb-4" @submit.prevent="resetPassword()">

        <div class="form-group mb-3" v-if="getIsLoggedIn">
          <label for="currentPasswordInput" class="ms-2">Contraseña actual *</label>
          <div class="password-container">
            <i :class="showCurrentPassword ? 'bi bi-eye-slash' : 'bi bi-eye'" @click="showCurrentPassword = !showCurrentPassword"></i>
            <input :type="showCurrentPassword ? 'text' : 'password'" class="form-input"
              :class="{ 'is-invalid': $v.currentPassword.$error }" placeholder="Mi contraseña actual" id="currentPasswordInput"
              v-model="currentPassword" @keypress="validatePassword($event)" />
          </div>
          <small v-if="$v.currentPassword.$error && !$v.currentPassword.required" class="error-label ms-2">Este campo es
            requerido</small>
          <span></span>
        </div>

        <div class="form-group mb-3">
          <label for="passwordInput" class="ms-2">Nueva contraseña *</label>
          <div class="password-container">
            <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'" @click="showPassword = !showPassword"></i>
            <input :type="showPassword ? 'text' : 'password'" class="form-input"
              :class="{ 'is-invalid': $v.password.$error }" placeholder="Nueva contraseña" id="passwordInput"
              v-model="password" @keypress="validatePassword($event)" />
          </div>
          <small v-if="$v.password.$error && !$v.password.required" class="error-label ms-2">Este campo es
            requerido</small>
          <small v-if="$v.password.$error && !$v.password.minLength < 8" class="error-label ms-2">La contraseña debe de
            contener mínimo 8 caracteres</small>
          <span></span>
        </div>

        <div class="form-group mb-4">
          <label for="passwordRepeatInput" class="ms-2">Repetir contraseña *</label>
          <div class="password-container">
            <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'" @click="showPassword = !showPassword"></i>
            <input :type="showPassword ? 'text' : 'password'" class="form-input"
              :class="{ 'is-invalid': $v.passwordRepeat.$error }" placeholder="Repetir nueva contraseña" id="passwordRepeatInput"
              v-model="passwordRepeat" @keypress="validatePassword($event)" />
          </div>
          <small v-if="$v.passwordRepeat.$error && !$v.passwordRepeat.required" class="error-label ms-2">Este campo es
            requerido</small>
          <small v-if="!passwordMatch" class="error-label ms-2">La contraseñas deben de ser iguales</small>
          <span></span>
        </div>
        <button type="submit" class="form-button">
          <span v-if="!loading">Cambiar contraseña</span>
          <span v-if="loading" class="spinner-border spinner-border-sm ml-3" role="status" aria-hidden="true"></span>
        </button>
      </form>
    </div>
  </div>
</template>
  
<script>
import { required, minLength } from "vuelidate/lib/validators";
import { setAuthToken, setUser } from "@/auth";
import { validatePassword } from '@/utils/keyPressValidate'
import AuthServices from "@/services/AuthServices";
import { isLoggedIn } from "@/auth";
import { mapGetters } from "vuex";

export default {
  metaInfo: {
    title: "Land Finder México",
    titleTemplate: "%s | Nueva contraseña",
  },
  data() {
    return {
      currentPassword: "",
      password: "",
      passwordRepeat: "",
      showPassword: false,
      showCurrentPassword: false,
      error: false,
      loading: false,
    };
  },
  validations: {
    currentPassword: {
      required,
      minLength: minLength(8),
    },
    password: {
      required,
      minLength: minLength(8),
    },
    passwordRepeat: {
      required,
      minLength: minLength(8),
    },
  },
  computed: {
    ...mapGetters(["getIsLoggedIn"]),
    passwordMatch() {
      return this.password == this.passwordRepeat
    }
  },
  methods: {
    validForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }
      return true;
    },
    validatePassword(event) {
      validatePassword(event)
    },
    resetPassword() {
      if (this.validForm() && this.passwordMatch) {
        this.loading = true;

        if (isLoggedIn()) {
          this.resetPasswordAuth();
          return;
        }

        const payload = {
          code: this.$route.query.code,
          password: this.password,
          passwordConfirmation: this.passwordRepeat.trim(),
        };

        AuthServices.resetPassword(payload)
          .then((res) => {
            if (res.status == 200) {
              this.setUserLogin(res.data);
              this.$router.push({ name: "home" });
            } else {
              this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')
            }

          })
          .catch((err) => {
            console.log(err);
            this.error = true;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },

    // Fetch if user is logged
    resetPasswordAuth() {
      const payload = {
        currentPassword: this.currentPassword,
        password: this.password,
        passwordConfirmation: this.passwordRepeat.trim(),
      };

      AuthServices.changePassword(payload)
        .then((res) => {
          if (res.status == 200) {
            this.setUserLogin(res.data);
            this.$router.push({ name: "profile" });
          } else {
            console.log(res);
            if (res.data.error.message == "The provided current password is invalid") {
              this.showToast('error', 'La contraseña actual es incorrecta.')
            } else {
              this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')
            }
          }

        })
        .catch((err) => {
          console.log(err);
          this.error = true;
        })
        .finally(() => {
          this.loading = false;
        });
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
.resetpassword-view {
  width: 100%;
  height: 100%;
  padding-top: 10%;
  padding-bottom: 10%;

  .link-router {
    text-decoration: underline;
  }

  .require-label {
    color: var(--color-complementary-1);
  }

  #resetPasswordForm {
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

    .error-label {
      color: var(--color-error);
      font-size: .8rem;
    }
  }
}

@media screen and (min-width: 768px) {
  .resetpassword-view {
    padding-top: 5%;
    padding-bottom: 5%;

    #resetPasswordForm {
      min-width: 400px;
    }
  }
}
</style>