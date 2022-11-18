<template>
  <div id="contacto" class="container contacto-section py-5 px-5 px-md-0">
    <div
      class="row contacto-form px-3 px-md-5 py-4 py-md-5 justify-content-between"
    >
      <div class="col col-12 col-md-6 mb-4 mb-md-0">
        <h2>¿Listo para empezar a crear grandes proyectos juntos?</h2>
        <p class="mb-4 text-subtext">
          Déjanos un mensaje a nuestro correo electrónico y en breve nos pondremos en contacto contigo.
        </p>
        <a href="#"
          >Volver al portafolio
          <img src="@/assets/icons/arrow-down-right.svg" alt=""
        /></a>
      </div>
      <div class="col col-12 col-md-4 d-flex flex-column">
        <form class="contact-form" v-on:submit.prevent="sendEmail">
          <span class="text-form mb-2">¿Qué soy?</span>
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
          <input
            type="text"
            class="contact-form__input"
            name="name_contact_form"
            id="name_contact_form"
            placeholder="Nombre"
            v-model="name"
          />
          <input
            type="text"
            class="contact-form__input"
            name="name_company_contact_form"
            id="name_company_contact_form"
            placeholder="Nombre de empresa"
            v-model="nameCompany"
          />
          <input
            type="email"
            class="contact-form__input"
            name="email_contact_form"
            id="email_contact_form"
            placeholder="Correo electrónico*"
            v-model="email"
          />
          <textarea
            name="text_contact_form"
            id="text_contact_form"
            class="contact-form__input"
            rows="3"
            placeholder="Mensaje"
            v-model="message"
          ></textarea>
          <div class="d-flex">
            <input
              id="submit_contact_form"
              type="submit"
              value="Enviar mensaje"
            />
            <span class="px-2 py-1 text-message">{{ error }}</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import { emptyString } from "@/utils/emptyString";
import { emailValid } from "@/utils/emailValid";
export default {
  name: "ContactoComp",
  data() {
    return {
      name: "",
      nameCompany: "",
      email: "",
      message: "",
      error: "",
      chips: [
        { id: 1, name: "Desarrollador", },
        { id: 2, name: "Fondo de inversión", },
        { id: 3, name: "Inmobiliaria", },
        { id: 4, name: "Propietario", },
        { id: 5, name: "Otro", }
      ],
      selectedChip: 1,
    };
  },
  methods: {
    selectChip(id) {
      this.selectedChip = id;
    },
    validarForm() {
      if (emptyString(this.email))
        return "El correo electrónico es requerido";
      if (!emailValid(this.email))
        return "El correo electrónico no es válido";
      return true;
    },
    sendEmail(e) {
      if (this.validarForm() == true) {
        this.error = "Enviando...🤓";
        emailjs
          .send(
            "service_dx3z2na",
            "template_4sgd35g",
            {
              type: this.chips[this.selectedChip - 1].name,
              name: this.name,
              business_name: this.nameCompany,
              email: this.email,
              message: this.message,
            },
            "-DIkcxuZ3ssPqzst2"
          )
          .then(
            (result) => {
              this.error = "Mensaje enviado correctamente";
              console.log("SUCCESS!", result.status, result.text);
              this.email = "";
              this.message = "";
            },
            (error) => {
              this.error = "Algo salio mal, intenta de nuevo";
              console.log("FAILED...", error);
            }
          );
      } else {
        this.error = this.validarForm();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contacto-section {
  border-top: 1px solid var(--color-text-dark);
  scroll-margin-top: 120px;

  .contacto-form {
    background-color: var(--color-complementary-1);
    border-radius: 24px;
    a {
      color: var(--color-white);
      font-weight: var(--font-semi-bold);
      text-decoration: none;
      img {
        width: 12px;
        transform: rotate(-90deg);
        transition: var(--transition-fast);
      }
      &:hover {
        opacity: 0.8;
        color: var(--color-white);
        img {
          margin-left: 16px !important;
        }
      }
    }

    .text-subtext {
      font-weight: var(--font-semi-bold);
      font-size: 1.2rem;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      &__input {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid var(--color-black-3);
        color: var(--color-black-3);
        font-weight: var(--font-semi-bold);
        margin-bottom: 1rem;
        outline: none !important;
        &::placeholder {
          color: var(--color-black-3);
          opacity: 0.8;
        }
      }

      .text-form {
        font-weight: var(--font-semi-bold);
        color: var(--color-black-3);
        opacity: 0.8;
      }

      .text-message {
        font-weight: var(--font-semi-bold);
        color: var(--color-black);
        font-size: var(--small-font-size);
      }

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
          color: var(--color-black-3);
          cursor: pointer;
          font-weight: var(--font-semi-bold);
          padding: 0.5rem 1rem;
          transition: var(--transition-fast);
          &.active {
            background-color: var(--color-black);
            color: var(--color-white);
          }
        }
      }
    }
    #submit_contact_form {
      width: fit-content;
      height: 40px;
      background: var(--color-white);
      padding: 6px 18px;
      border-radius: 12px;
      font-size: var(--small-font-size);
      font-weight: var(--font-bold);
      color: var(--color-black-3);
      transition: var(--transition-fast);
      &:hover {
        background: var(--color-white-1);
      }
    }
  }
}
</style>
