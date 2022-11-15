<template>
  <div class="formulario-contacto">
    <div class="row">
      <div class="col col-2 px-2">
        <img src="@/assets/icons/pdf.svg" alt="" />
      </div>
      <div class="col col-10 px-1">
        <h4 class="form-title m-0">Pre-análisis de Inversión.PDF</h4>
        <p class="form-file-size">Tamaño de archivo aprox: 20mb</p>
      </div>
    </div>
    <div class="divider mb-4"></div>
    <h4 class="contenido-title">Contiene:</h4>
    <ul class="list-content">
      <li v-for="(item, index) in listContent" :key="index">
        {{ item }}
      </li>
    </ul>
    <vue-phone-number-input 
      v-model="phone" 
      class="mb-2 input-phone"
      darkColor="var(--color-background)"
      valid-color="#0DBA6A"
      no-example
      default-country-code="MX"
      :preferred-countries="['MX', 'US']"
      :translations="{
        countrySelectorLabel: 'Código País',
        countrySelectorError: 'Error código',
        phoneNumberLabel: 'Número de teléfono',
        example: 'Ejemplo :'
      }"
      dark
      @update="onUpdate"
    />
    <input
      class="input-form"
      :class="{ 'valid': getEmailValid }"
      placeholder="Correo electrónico organizacional"
      type="email"
      name="input_form_project"
      id="input_form_project"
      v-model="email"
    />
    <button class="button-email mb-3" @click="validateForm()">
      {{ solicitudText }}
      <div class="spinner-border spinner-border-sm text-light ms-1" role="status" v-if="loading">
        <span class="visually-hidden">Loading...</span>
      </div>
    </button>
    <p v-if="error" class="email-novalid">*{{ errorMessage }}</p>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" v-model="checked" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        Confirmo que he leído y acepto los <router-link target="_blank" class="form-check-terms-link" to="/terminos-y-condiciones">Términos y condiciones</router-link>.
      </label>
    </div>
  </div>
</template>

<script>
const freeEmailDomains = require('free-email-domains')
import { emailValid } from '@/utils/emailValid';
import emailjs from '@emailjs/browser';
export default {
  name: "FormularioComp",
  props: ['name_project'],
  data() {
    return {
      checked: false,
      loading: false,
      results: {
        isValid: false
      },
      phone: '',
      email: '',
      error: false,
      solicitudText: 'Solicitar documentación',
      listContent: [
        "Características e información detallada del inmueble.",
        "Usos de suelo y normativa vigente con interpretación.",
        "Análisis del entorno de mercado básico (Oferta similar).",
        "Análisis del entorno de mercado básico (Demanda por nichos de mercado).",
        "Evaluación de escenario de negocio, estimaciones y proyecciones.",
        "Necesidades del proyecto.",
        "Contenido gráfico especializado.",
        "Análisis legal."
      ],
    };
  },
  computed: {
    getEmailValid() {
      if (emailValid(this.email)) {
        const domain = this.email.split('@')[1];
        if (!this.checkFreeEmailDomain(domain)) {
          return true;
        } else return false
      } else return false;
    }
  },
  methods: {
    checkFreeEmailDomain(domain) {
      return freeEmailDomains.includes(domain);
    },

    onUpdate (payload) {
      this.results = payload
    },

    validateForm() {
      this.error = false;
      // Guards
      if (!emailValid(this.email)) {
        this.error = true;
        this.errorMessage = 'Favor de escribir un correo válido.';
      }
      if (this.checkFreeEmailDomain(this.email.split('@')[1])) {
        this.error = true;
        this.errorMessage = 'Necesitas un correo organizacional.';
      }
      if (!this.checked) {
        this.error = true;
        this.errorMessage = 'Favor de aceptar los terminos del siguiente párrafo.';
      }
      if (!this.results.isValid) {
        this.error = true;
        this.errorMessage = 'Favor de escribir un número de teléfono válido.';
      }
      if (this.error) return;
      // this.sendEmail()
      console.log("Okay")
    },

    // VALIDATE EMAIL
    validateEmail() {
      this.emailInvalid = false;
      this.emailDomainInvalid = false;
      this.checkedForm = false;
      if(this.checked) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(this.email).toLowerCase())) {
          const domain = this.email.split('@')[1];
          if(!this.checkFreeEmailDomain(domain)) {
            this.sendEmail();
          } else {
            this.emailDomainInvalid = true;
          }
        } else {
          this.emailInvalid = true;
        }
      } else {
        this.checkedForm = true;
      }
    },

    // SEND EMAIL
    sendEmail() {
      this.loading = true;
      this.solicitudText = 'Enviando ';
      emailjs.send(
        "service_gmail",
        "lfm_project_request",
        {
          name_project: this.name_project,
          email: this.email,
        },
        "-DIkcxuZ3ssPqzst2",
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          this.loading = false;
          this.solicitudText = 'Solicitud de documento enviada.';
        },
        (error) => {
          this.loading = false;
          this.solicitudText = 'Solicitud de documento fallida.';
          console.log("FAILED...", error);
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.formulario-contacto {
  width: 100%;
  height: fit-content;
  border: 1px solid var(--color-black-3);
  border-radius: 24px;
  padding: 18px;
  padding-bottom: 8px;
  .form-title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-black);
  }
  .form-file-size {
    font-size: var(--smaller-font-size);
    font-weight: var(--font-medium);
  }
  .divider {
    width: 100%;
    height: 1px;
    background-color: var(--color-black-3);
  }
  .contenido-title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-semi-bold);
    margin-bottom: 1rem;
  }
  .list-content {
    list-style-type: "- ";
    color: var(--color-text-light);
    padding: 0 12px;
    margin-bottom: 24px;
    li {
      font-size: var(--small-font-size);
      font-weight: var(--font-medium);
      margin-bottom: 1rem;
    }
  }
  .input-form {
    width: 100%;
    height: fit-content;
    border: 1px solid var(--color-black-3);
    border-radius: 12px;
    padding: 0.5rem 1rem;
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
    color: var(--color-white);
    background-color: transparent;
    margin-bottom: 12px;
    &::placeholder {
      opacity: 1;
      color: var(--color-text-light);
    }
  }

  .valid {
    border: 1px solid var(--color-complementary-1);
  }
  .button-email {
    width: 100%;
    height: fit-content;
    border: 1px solid var(--color-black-3);
    border-radius: 12px;
    padding: 0.5rem 1rem;
    font-size: var(--small-font-size);
    font-weight: var(--font-bold);
    color: var(--color-white);
    background-color: var(--color-complementary-1);
    transition: var(--transition-fast);
    cursor: pointer;
    &:hover {
      background-color: var(--color-complementary-1-dark);
    }
  }
  .form-check-input {
    background-color: var(--color-black-3);
    &:checked {
      border: 1px solid var(--color-complementary-1);
    }
    &:focus {
      border: 1px solid var(--color-complementary-1);
      outline: none;
      box-shadow: none;
    }
  }

  .form-check-label {
    font-size: var(--smaller-font-size);
    font-weight: var(--font-regular);
    color: var(--color-text-light);
    line-height: 0.8rem;
    margin-bottom: 1rem;
  }
  .form-check-terms-link{
    color: var(--color-complementary-1);
    &:hover{
      text-decoration: underline;
    }
  }
  .email-novalid {
    font-size: var(--smaller-font-size);
    font-weight: var(--font-regular);
    color: #e97a30;
    margin-bottom: 1rem;
  }
}

::v-deep .input-phone {
  .input-tel, .input-tel__label, .country-selector__label {
    font-family: var(--font-primary) !important;
  }

  .input-tel__input {
    border-top-right-radius: 12px !important;
    border-bottom-right-radius: 12px !important;
    border: 1px solid var(--color-black-3);
    font-size: var(--small-font-size) !important;
    ::placeholder {
      font: var(--font-primary) !important;
    }
  }

  .country-selector__input {
    border-top-left-radius: 12px !important;
    border-bottom-left-radius: 12px !important;
    border: 1px solid var(--color-black-3);
  }
}
</style>