<template>
  <div class="signup-view container">
    <div class="d-flex justify-content-center flex-column align-items-center">
      <h1 class="text-center">Registrarme</h1>
      <p class="text-center">Ingresa tus datos para registrarte en LFM</p>
      <form id="signUnForm" class="mb-4" @submit.prevent="signUp()">
        <div class="form-group mb-3 mt-3">
          <span class="text-form mb-2">¿Qué soy? *</span>
          <div class="chips-selector">
            <div
              class="chip"
              v-for="chip in chips"
              :key="chip.id"
              :class="{ active: chip.id === selectedChip }"
              @click="selectChip(chip.id)"
            >
              {{ chip.name }}
            </div>
          </div>
        </div>

        <div class="form-group mb-3">
          <label for="nameInput" class="ms-2">Nombre *</label>
          <input
            type="text"
            class="form-input"
            :class="{ 'is-invalid': $v.password.$error }"
            placeholder="Mi nombre"
            id="nameInput"
            v-model="name"
          />
        </div>

        <div class="form-group mb-3">
          <label for="lastnameInput" class="ms-2">Apellido *</label>
          <input
            type="text"
            class="form-input"
            :class="{ 'is-invalid': $v.password.$error }"
            placeholder="Apellido"
            id="lastnameInput"
            v-model="lastname"
          />
        </div>

        <div class="form-group mb-3">
          <label for="phoneInput" class="ms-2">Telefono *</label>
          <input
            type="text"
            class="form-input"
            :class="{ 'is-invalid': $v.phone.$error }"
            placeholder="612000000"
            id="phoneInput"
            v-model="phone"
            maxlength="10"
          />
        </div>

        <div class="form-group mb-3">
          <label for="bussinesNameInput" class="ms-2"
            >Correo electrónico *</label
          >
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
          <label for="emailInput" class="ms-2">Contraseña *</label>
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
            />
          </div>
          <span></span>
        </div>
        <button type="submit" class="form-button">
          <span v-if="!loading">Registrarme</span>
          <span
            v-if="loading"
            class="spinner-border spinner-border-sm ml-3"
            role="status"
            aria-hidden="true"
          ></span>
        </button>
      </form>
      <small class="require-label"
        >Campos obligatorios <strong>*</strong></small
      >
      <p>
        ¿Ya tienes una cuenta?
        <router-link class="link-router" to="/login"
          >Inicia sesion aqui</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import AuthServices from "@/services/AuthServices";
import maxLength from "vuelidate/lib/validators/maxLength";

export default {
  data() {
    return {
      chips: [
        { id: 1, value: "INVESTOR", name: "Desarrollador" },
        { id: 2, value: "OWNER", name: "Propietario" },
        { id: 3, value: "REALESTATE", name: "Inmobiliaria" },
      ],
      selectedChip: 1,
      name: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      showPassword: false,
      error: false,
      loading: false,
    };
  },
  validations: {
    name: {
      required,
    },
    lastname: {
      required,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
    phone: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(10),
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
    selectChip(id) {
      this.selectedChip = id;
    },
    signUp() {
      if (this.validForm()) {
        this.loading = true;

        const user = {
          username: this.name.toLowerCase().trim() + this.lastname.toLowerCase().trim(),
          email: this.email.trim(),
          password: this.password,
          name: this.name.trim(),
          lastname: this.lastname.trim(),
          usertype: this.selectedChip.value,
          phone: this.phone.trim(),
          verified: "NONE",
        };

        AuthServices.signup(user)
          .then((res) => {
            console.log(res);
            //this.setUserLogin(res.data);
            this.$router.push("/confirm-email");
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
  },
};
</script>

<style lang="scss" scoped>
.signup-view {
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

  #signUnForm {
    width: 100%;
    max-width: 400px;
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
  .signup-view {
    padding-top: 5%;
    padding-bottom: 5%;
  }
}
</style>