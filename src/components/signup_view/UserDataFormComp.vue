<template>
  <form id="signUpFormPart1" class="mb-4" @submit.prevent="() => {}">
    <slot name="description" />
    <div class="row">
      <div class="col-6">
        <div class="form-group mb-3">
          <label for="nameInput" class="ms-2">Nombre</label>
          <input
            type="text"
            class="form-input"
            :class="{ 'is-invalid': $v.name.$error }"
            placeholder="Ej. Juan"
            id="nameInput"
            v-model="name"
          />
          <small v-if="$v.name.$error && !$v.name.required" class="error-label ms-2">Este campo es requerido</small>
        </div>
      </div>

      <div class="col-6">
        <div class="form-group mb-3">
          <label for="lastnameInput" class="ms-2">Apellido</label>
          <input
            type="text"
            class="form-input"
            :class="{ 'is-invalid': $v.lastname.$error }"
            placeholder="Ej. Martinez"
            id="lastnameInput"
            v-model="lastname"
          />
            <small v-if="$v.lastname.$error && !$v.lastname.required" class="error-label ms-2">Este campo es requerido</small>
        </div>
      </div>
    </div>

    <div class="form-group mb-3">
      <label for="phoneInput" class="ms-2">Telefono</label>
      <input
        type="text"
        class="form-input"
        :class="{ 'is-invalid': $v.phone.$error }"
        placeholder="Ej. 5512345678"
        id="phoneInput"
        v-model="phone"
        maxlength="10"
        @keypress="validatePhone($event)"
      />
        <small v-if="$v.phone.$error && !$v.phone.required" class="error-label ms-2">Este campo es requerido</small>
    </div>

    <div class="form-group mb-3">
      <label for="bussinesNameInput" class="ms-2"
        >Correo electrónico</label
      >
      <input
        type="email"
        class="form-input"
        :class="{ 'is-invalid': $v.email.$error }"
        placeholder="Ej. micorreo@mail.com"
        id="emailInput"
        v-model="email"
        @keypress="validateEmail($event)"
      />
        <small v-if="$v.email.$error && !$v.email.required" class="error-label ms-2">Este campo es requerido</small>
    </div>

    <div class="d-flex justify-content-between mt-5">
      <button class="btn-goback" @click="goBack()">Anterior</button>
      <button class="btn-continue" @click="goNext()">
        Continuar
        <img src="@/assets/icons/arrow-down-right.svg" alt="">
      </button>
    </div>
  </form>
</template>

<script>
import { required, minLength, maxLength, email } from "vuelidate/lib/validators";
import { validateNumber, validateEmail } from '@/utils/keyPressValidate'

export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      phone: "",
    }
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
    phone: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(10),
    },
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
  created() {
    this.name = this.user.name
    this.lastname = this.user.lastname
    this.email = this.user.email
    this.phone = this.user.phone
  },
  methods: {
    validatePhone(event){
      validateNumber(event)
    },
    validateEmail(event){
      validateEmail(event)
    },
    validForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }
      return true;
    },
    goBack() {
      this.userProp = {
        ...this.userProp,
        name: this.name.trim(),
        lastname: this.lastname.trim(),
        email: this.email.trim(),
        phone: this.phone.trim(),
      }
      this.$emit('back')
    },
    goNext() {
      if (this.validForm()) {
        this.userProp = {
          ...this.userProp,
          name: this.name.trim(),
          lastname: this.lastname.trim(),
          email: this.email.trim(),
          phone: this.phone.trim(),
        }
        this.$emit('next')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
#signUpFormPart1 {
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

@media screen and (max-width: 992px) {
  #signUpFormPart1 {
    max-width: 100%;
    padding: 0 1rem;
  }
}
</style>