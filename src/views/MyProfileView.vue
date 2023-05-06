<template>
  <div class="my-profile-view">
    <div v-if="isLoading" class="d-flex justify-content-center align-items-center" style="height: 50vh;">
      <div class="spinner-border" style="width: 3rem; height: 3rem; color: #0DBA6A;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="container padding-container">
      <div class="row">
        <div class="col-12 col-md-7 pe-md-5 mb-5 animate__animated animate__fadeInLeft">
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
                <div class="col-12">
                  <p class="ts-h3 tc-text-light mb-0">Datos de cuenta</p>
                  <p class="info-text ts-smaller">
                    Para modificar tu correo o tipo de usuario escríbenos a
                    <a href="mailto:hola@landfindermexico.com">hola@landfindermexico.com</a>
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="form-group mb-3">
                    <label for="emailInput" class="ms-2">Email</label>
                    <input type="text" class="form-input disabled" :disabled="true" id="emailInput" v-model="email" />
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form-group mb-3">
                    <label for="usertypeInput" class="ms-2">Tipo de usuario</label>
                    <div class="usertype-info">
                      <img :src="require(`@/assets/lfm_type_${getTypeImage}.png`)" alt="Img" style="width: 24px">
                      <span class="ts-b3 tw-bold ms-2">{{ getUserType.toString().toUpperCase() }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group mb-3">
                    <!-- <label for="emailInput" class="ms-2">Contraseña</label> -->
                    <router-link to="/reset-password" class="btn button-base bc-text-dark">
                      Cambiar mi contraseña
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-5 animate__animated animate__fadeInRight">
          <div class="row">
            <div class="col-12 mb-1">
              <h1 class="ff-secondary">Verificación</h1>
            </div>

            <!-- **************** VERIFICACION ***************** -->
            <div class="col-12">
              <p class="ts-small tc-text-light">
                La verificación es el proceso con el cuál validamos tu cuenta para que puedas
                acceder a información técnica de las propiedades que tenemos para ti.
              </p>
            </div>

            <div class="col-12">
              <p>
                Estado: 
                <span 
                  class="badge"
                  :class="{
                    'text-bg-secondary': user.verified === VerifiedType.NONE,
                    'text-bg-primary': user.verified === VerifiedType.APPLIED,
                    'text-bg-info': user.verified === VerifiedType.INPROGRESS,
                    'text-bg-warning': user.verified === VerifiedType.ONHOLD,
                    'text-bg-success': user.verified === VerifiedType.VERIFIED,
                  }"
                >
                  {{ getStatus }}
                </span>
              </p>
            </div>

            <div class="col-12">
              <div v-if="user.verified === VerifiedType.NONE">
                <button class="button-gradiant" @click="goTo()">
                  <span>Iniciar proceso de verificación</span>
                  <i class="bi bi-arrow-up-right-square ms-2"></i>
                </button>
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
// TYPES
import { UserType } from "@/types/UserType.type";
import { VerifiedType } from "@/types/VerifiedType.type";

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
      isLoading: false,
      loading: false,
      VerifiedType: VerifiedType,
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
    getUserType() {
      if (this.user.usertype === UserType.INVESTOR) return "Inversionista";
      if (this.user.usertype === UserType.OWNER) return "Propietario";
      if (this.user.usertype === UserType.BROKER) return "Broker Inmobiliario";
      return "Sin tipo de usuario";
    },
    getStatus() {
      if (this.user.verified === VerifiedType.NONE) return "No verificado";
      if (this.user.verified === VerifiedType.APPLIED) return "Solicitud enviada";
      if (this.user.verified === VerifiedType.INPROGRESS) return "En proceso";
      if (this.user.verified === VerifiedType.ONHOLD) return "Detenido";
      if (this.user.verified === VerifiedType.VERIFIED) return "Verificado";
      return "Sin estado";
    },
    getTypeImage() {
      return this.user.usertype == 'OWNER' ? 1 : this.user.usertype == 'INVESTOR' ? 2 : 3
    }
  },
  created() {
    this.getMe();
    this.setValues();
  },
  mounted() {
    window.scrollTo(0, 0);
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
    goTo() {
      this.$router.push({ name: "verify-account" });
    },

    async getMe() {
      this.isLoading = true;
      try {
        const response = await UserServices.me();
        if (response.status === 200) {
          setUser(response.data);
        } else {
          console.log(response);
          this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')
          this.isLoading = false;
        }
      } catch (error) {
        console.log(error);
        this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')
        this.isLoading = false; 
      }
      this.isLoading = false;
    },

    async updateUser() {
      this.loading = true;
      const data = {
        name: this.name.trim(),
        lastname: this.lastname.trim(),
        phone: this.phone.trim(),
      };
      await UserServices.updateUser(store.getters.getUser.id, data)
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
          this.editName = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.my-profile-view {
  height: fit-content;
  min-height: 50vh;

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

    .usertype-info {
      padding: 0.5rem;
      display: flex;
      align-items: center;
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
