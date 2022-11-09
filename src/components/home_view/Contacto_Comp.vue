<template>
  <div id="contacto" class="container contacto-section py-5 px-5 px-md-0">
    <div
      class="row contacto-form px-3 px-md-5 py-4 py-md-5 justify-content-between"
    >
      <div class="col col-12 col-md-6 mb-4 mb-md-0">
        <h2>¿Listo para empezar a desarrollar En Baja California Sur?</h2>
        <p class="mb-4">
          Déjanos un mensaje a nuestro correo electrónico y en breve uno de
          nuestros asesores se pondrá en contacto contigo.
        </p>
        <a href="#"
          >Volver al portafolio
          <img src="@/assets/icons/arrow-down-right.svg" alt=""
        /></a>
      </div>
      <div class="col col-12 col-md-4 d-flex flex-column">
        <form class="contact-form" v-on:submit.prevent="sendEmail">
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
            placeholder="E-mail"
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
            <span class="px-2 py-1">{{ error }}</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import { emptyString } from "@/utils/emptyString";
export default {
  name: "ContactoComp",
  data() {
    return {
      name: "",
      nameCompany: "",
      email: "",
      message: "",
      error: "",
    };
  },
  methods: {
    // sendEmail() {
    //   NodeMailer.sendEmail(this.email, this.text)
    // }
    validarForm() {
      if (!emptyString(this.email))
        return "El campo de correo electrónico no puede estar vacío";
      if (!emptyString(this.message))
        return "El campo de mensaje no puede estar vacío";
      return true;
    },
    sendEmail(e) {
      if (this.validarForm() == true) {
        this.error = "Enviando...🤓";
        emailjs
          .send(
            "service_gmail",
            "lfm_contact_form",
            {
              email: this.email,
              message: this.message,
            },
            "-DIkcxuZ3ssPqzst2"
          )
          .then(
            (result) => {
              this.error = "Mensaje Enviado!! 🥳";
              console.log("SUCCESS!", result.status, result.text);
              this.email = "";
              this.message = "";
            },
            (error) => {
              this.error = "Algo salio mal 😫";
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
    }
    #submit_contact_form {
      width: fit-content;
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
