<template>
  <div class="my-profile-view">
    <div class="container padding-container">
      <div class="row">
        <div class="col-12 col-md-7">
          <div class="row">
            <div class="col-12 mb-4">
              <h1 class="ff-secondary">Mi perfil</h1>
            </div>

            <!-- **************** DATOS PERSONALES ***************** -->
            <div class="col-12">
              <div class="row">
                <div class="col-6">
                  <p class="ts-h3 tc-text-light">Datos personales</p>
                </div>
                <div class="col-6">
                  <div v-if="!editName" class="d-flex justify-content-end">
                    <button class="btn button-simple" @click="toggleEditName()">
                      Editar
                    </button>
                  </div>

                  <div v-else class="d-flex justify-content-end gap-2">
                    <button class="btn button-simple" @click="cancelEditName()">
                      Cancelar
                    </button>

                    <button class="btn button-outline" @click="savePersonalData()">
                      <span v-if="!loading">Guardar</span>
                      <span
                        v-if="loading"
                        class="spinner-border spinner-border-sm ml-3"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-6">
                  <div class="form-group mb-3">
                    <label for="nameInput" class="ms-2">Nombre</label>
                    <input type="text" class="form-input" :class="{
                        'is-invalid': $v.name.$error,
                        disabled: !editName,
                      }" :disabled="!editName" id="nameInput" v-model="name" />
                    <small v-if="$v.name.$error && !$v.name.required" class="error-label ms-2">Este campo es
                      requerido</small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-group mb-3">
                    <label for="lastnameInput" class="ms-2">Apellidos</label>
                    <input type="text" class="form-input" :class="{
                        'is-invalid': $v.lastname.$error,
                        disabled: !editName,
                      }" :disabled="!editName" id="lastnameInput" v-model="lastname" />
                    <small v-if="$v.lastname.$error && !$v.lastname.required" class="error-label ms-2">Este campo es
                      requerido</small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-group mb-3">
                    <label for="phoneInput" class="ms-2">Teléfono</label>
                    <input id="phoneInput" v-model="phone" type="text" class="form-input" :class="{
                        'is-invalid': $v.phone.$error,
                        disabled: !editName,
                      }" :disabled="!editName" maxlength="10" @keypress="validatePhone($event)" />
                    <small v-if="!$v.phone.required" class="error-label ms-2">Este campo es requerido</small>
                    <small v-if="$v.phone.$error" class="error-label ms-2">Este campo debe contener 10 dígitos</small>
                  </div>
                </div>
              </div>
            </div>

            <!-- DIVIDER -->
            <div class="divider mb-3"></div>

            <!-- **************** DATOS DE CUENTA ***************** -->
            <div class="col-12">
              <div class="row">
                <div class="col-6">
                  <p class="ts-h3 tc-text-light">Datos de cuenta</p>
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <div class="form-group mb-3">
                    <label for="emailInput" class="ms-2">Email</label>
                    <input type="text" class="form-input disabled" :disabled="true" id="emailInput" v-model="email" />
                    <p class="info-text ts-smaller mb-0">
                      Para modificar tu correo escríbenos a
                      <a href="mailto:hola@landfindermexico.com">hola@landfindermexico.com</a>
                    </p>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group mb-3">
                    <label for="emailInput" class="ms-2">Contraseña</label>
                    <router-link to="/reset-password" class="btn button-base bc-text-dark">
                      Cambiar mi contraseña
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";
import { validateNumber } from "@/utils/keyPressValidate";
import UserServices from "@/services/UserServices";
import { mapGetters } from "vuex";
import ToastMixin from "@/mixins/ToastMixin.vue";
import { setUser } from "@/auth";
import store from "@/store";

export default {
  metaInfo: {
    title: "Land Finder México",
    titleTemplate: "%s | Mi Perfil",
  },
  mixins: [ToastMixin],
  data() {
    return {
      name: "",
      lastname: "",
      phone: "",
      email: "",
      // config
      editName: false,
      editable: false,
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
    this.setValues();
  },
  methods: {
    setValues() {
      this.name = this.user.name;
      this.lastname = this.user.lastname;
      this.phone = this.user.phone;
      this.email = this.user.email;
    },
    validatePhone(event) {
      validateNumber(event);
    },
    toggleEditName() {
      this.editName = !this.editName;
    },
    cancelEditName() {
      this.setValues();
      this.editName = false;
    },
    savePersonalData() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.updateUser();
    },
    updateUser() {
      this.loading = true;
      const data = {
        name: this.name,
        lastname: this.lastname,
        phone: this.phone,
      };
      UserServices.updateUser(store.getters.getUser.id, data)
        .then((res) => {
          if (res.status == 200) {
            setUser(res.data);
            this.showToast("success", "Datos actualizados correctamente");
          } else {
            this.showToast("error", "Error al agregar a guardados");
          }
        })
        .catch((err) => {
          console.log(err);
          this.showToast("error", "Error al agregar a guardados");
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.my-profile-view {
  height: fit-content;
  min-height: 80vh;

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

.info-text {
  color: #707070;

  &::before {
    content: url("@/assets/info-icon.svg");
    margin-right: 0.3rem;
  }
}
</style>
