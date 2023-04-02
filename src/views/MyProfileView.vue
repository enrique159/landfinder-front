<template>
  <div class="my-profile-view">
    <div class="container padding-container">
      <form @submit.prevent="() => {}">
        <div class="row">
          <div class="col-12 mb-4">
            <h1>Mi perfil</h1>
          </div>
  
          <div class="col-12">
            <p class="ts-h3 tc-text-light">Datos personales</p>

            <div class="row">
              <div class="col-3">
                <div class="form-group mb-3">
                  <label for="nameInput" class="ms-2">Nombre</label>
                  <input
                    type="text"
                    class="form-input"
                    :class="{ 'is-invalid': $v.name.$error, 'disabled': !editable }"
                    :disabled="!editable"
                    id="nameInput"
                    v-model="name"
                  />
                    <small v-if="$v.name.$error && !$v.name.required" class="error-label ms-2">Este campo es requerido</small>
                </div>
              </div>

              <div class="col-3">
                <div class="form-group mb-3">
                  <label for="lastnameInput" class="ms-2">Apellidos</label>
                  <input
                    type="text"
                    class="form-input"
                    :class="{ 'is-invalid': $v.lastname.$error, 'disabled': !editable }"
                    :disabled="!editable"
                    id="lastnameInput"
                    v-model="lastname"
                  />
                    <small v-if="$v.lastname.$error && !$v.lastname.required" class="error-label ms-2">Este campo es requerido</small>
                </div>
              </div>
            </div>
          </div>
          
          <!-- DIVIDER -->
          <div class="divider mb-3"></div>

          <div class="col-12">
            <p class="ts-h3 tc-text-light">Datos de cuenta</p>

            <div class="row">
              <div class="col-4">
                <div class="form-group mb-3">
                  <label for="emailInput" class="ms-2">Email</label>
                  <input
                    type="text"
                    class="form-input"
                    :class="{ 'is-invalid': $v.email.$error, 'disabled': !editable }"
                    :disabled="!editable"
                    id="emailInput"
                    v-model="email"
                  />
                    <small v-if="$v.email.$error && !$v.email.required" class="error-label ms-2">Este campo es requerido</small>
                </div>
              </div>

              <div class="col-3">
                <div class="form-group mb-3">
                  <label for="lastnameInput" class="ms-2">Apellidos</label>
                  <input
                    type="text"
                    class="form-input"
                    :class="{ 'is-invalid': $v.lastname.$error, 'disabled': !editable }"
                    :disabled="!editable"
                    id="lastnameInput"
                    v-model="lastname"
                  />
                    <small v-if="$v.lastname.$error && !$v.lastname.required" class="error-label ms-2">Este campo es requerido</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength, email } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: '',
      lastname: '',
      phone: '',
      email: '',
      // config
      editable: false,
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
    ...mapGetters({
      user: "getUser",
    }),
  },
  created() {
    this.name = this.user.name;
    this.lastname = this.user.lastname;
    this.phone = this.user.phone;
    this.email = this.user.email;
  },
}
</script>

<style lang="scss" scoped>
.my-profile-view {
  height: 60vh;

  .form-group {
    display: flex;
    flex-direction: column;

    label {
      color: var(--color-text-light);
      font-weight: var(--font-semi-bold);
      font-size: var(--small-font-size);
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
      border: 2px solid var(--color-black-3);
      border-radius: 12px;
      padding: 0.5rem 1rem;
      color: var(--color-white-2);
      font-weight: var(--font-semi-bold);
      outline: none !important;
      margin-bottom: 3px;
    }

    .disabled {
      border: none;
      padding: 0.2rem 0.5rem;
    }

    .is-invalid {
      border-color: var(--color-error);
    }
  }
}
</style>