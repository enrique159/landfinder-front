<template>
  <div class="signup-view">
    <div class="left-section">
      <section class="headers py-3 px-sm-5">
        <div class="lfm-icon mb-4">
          <img src="@/assets/lfm_plus.svg" alt="LFM">
        </div>
        <h3 class="ts-h2 tw-bold">Bienvenido a LFM+</h3>

        <div class="stepper pt-3">
          <div class="step" :class="{ active: currentStep == 1 }"></div>
          <div class="step" :class="{ active: currentStep == 2 }"></div>
          <div class="step" :class="{ active: currentStep == 3 }"></div>
        </div>
      </section>

      <section class="content">
        <component 
          ref="currentStep" 
          :is="currentComponent" 
          :user="user"
          :loading="loading"
          v-on:update:user="updateUser($event)" 
          v-on:next="goNext()" 
          v-on:back="goBack()"
        >
          <template #description>
            <p class="text-center ts-small tc-text-light">{{ stepInfo }}</p>
          </template>
        </component>
      </section>

      <section class="pt-5 px-5">
        <p class="text-center ts-small tc-text-light">
          ¿Ya tienes una cuenta? <router-link to="/signup"><span class="tc-complementary-1">Inicia sesión</span></router-link>
        </p>

        <p class="text-center ts-small tc-text-light">Consulta nuestros <router-link to="/terminos-y-condiciones">Términos y condiciones</router-link>
          y nuestras <router-link to="/politicas-de-privacidad">Políticas de privacidad</router-link>.
        </p>
      </section>
    </div>

    <div class="right-section">
      <div class="right-section-content">
      </div>
    </div>
  </div>
</template>

<script>
import SelectUserTypeComp from "@/components/signup_view/SelectUserTypeComp.vue";
import UserDataFormComp from "@/components/signup_view/UserDataFormComp.vue";
import UserAccountFormComp from "@/components/signup_view/UserAccountFormComp.vue";
import AuthServices from "@/services/AuthServices";

export default {
  components: {
    SelectUserTypeComp,
    UserDataFormComp,
    UserAccountFormComp,
  },
  data() {
    return {
      error: false,
      loading: false,
      currentStep: 1,
      user: {
        username: "",
        name: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        passwordRepeat: "",
        type: "OWNER",
        verified: "NONE",
      }
    };
  },
  computed: {
    passwordMatch(){
      return this.password == this.passwordRepeat
    },
    currentComponent() {
      if (this.currentStep == 1) return "SelectUserTypeComp";
      if (this.currentStep == 2) return "UserDataFormComp";
      if (this.currentStep == 3) return "UserAccountFormComp";
      return 0
    },
    stepInfo() {
      if (this.currentStep == 1) return "Selecciona la opción que represente tu perfil";
      if (this.currentStep == 2) return "Completa los siguientes campos para seguir";
      if (this.currentStep == 3) return "Crea tu contraseña y listo. Debe contener mínimo 8 caracteres";
    }
  },
  methods: {
    async signUp() {
      this.loading = true;

      this.user.username = this.user.name.toLowerCase().trim() + this.user.lastname.toLowerCase().trim() + Math.floor(Math.random() * 1000);

      await AuthServices.signup(this.user)
        .then((res) => {
          this.$router.push({ path: '/confirm-email', query: {email: this.user.email}});
        })
        .catch((err) => {
          console.log(err);
          this.error = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    updateUser(event) {
      this.user = event;
    },
    goNext() {
      if (this.currentStep == 1) {
        this.currentStep = 2;
      } else if (this.currentStep == 2) {
        this.currentStep = 3;
      } else if (this.currentStep == 3) {
        this.signUp();
      }
    },
    goBack() {
      if (this.currentStep == 2) {
        this.currentStep = 1;
      } else if (this.currentStep == 3) {
        this.currentStep = 2;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.signup-view {
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;

  .link-router {
    text-decoration: underline;
  }

  .require-label {
    color: var(--color-complementary-1);
  }

  .left-section {
    width: 40%;
    height: 100%;

    .headers {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .lfm-icon {
        width: 48px;
        aspect-ratio: 1;
        background-color: var(--color-complementary-1-dark);
        display: grid;
        place-items: center;
        border-radius: 12px;
        img {
          width: 42px;
          padding-left: 8px;
        }
      }

      .stepper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        .step {
          width: 48px;
          height: 4px;
          border-radius: 2px;
          background-color: var(--color-text-dark);
          &.active {
            background-color: var(--color-complementary-1-dark);
          }
        }
      }
    }
    .content {
      width: 100%;
      max-width: 360px;
      margin: 0 auto;

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
  }

  .right-section {
    background-image: url('~@/assets/signup_background.jpg');
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    width: 60%;
    margin: 1rem;
    border-radius: 2rem;
  }
}

@media only screen and (max-width: 992px) {
  .signup-view {
    .left-section {
      width: 100%;
    }
    .right-section {
      display: none;
    }
  }
}
</style>