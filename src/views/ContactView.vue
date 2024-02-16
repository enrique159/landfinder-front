<template>
  <div class="contact-view container">
    <div class="row">
      <!-- CONTACT FORM -->
      <div class="col col-12 col-md-5">
        <h1 class="mb-5">
          Contacta <br />
          nuestro equipo
        </h1>

        <form class="contact-form" v-on:submit.prevent="sendEmail">
          <div class="row">
            <div class="col col-12 col-sm-8">
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
            </div>

            <div class="col col-12 col-sm-6">
              <label for="name_contact_form" class="ms-2">Nombre</label>
              <input
                type="text"
                class="contact-form__input"
                name="name_contact_form"
                id="name_contact_form"
                placeholder="Ej. Juan"
                v-model="name"
              />
            </div>

            <div class="col col-12 col-sm-6">
              <label for="lastname_contact_form" class="ms-2">Apellidos</label>
              <input
                type="text"
                class="contact-form__input"
                name="lastname_contact_form"
                id="lastname_contact_form"
                placeholder="Ej. Pérez"
                v-model="lastname"
              />
            </div>

            <div class="col col-12">
              <label for="name_company_contact_form" class="ms-2">Nombre de empresa</label>
              <input
                type="text"
                class="contact-form__input"
                name="name_company_contact_form"
                id="name_company_contact_form"
                placeholder="Ej. Inmobiliaria XYZ"
                v-model="nameCompany"
              />
            </div>

            <div class="col col-12"> 
              <label for="email_contact_form" class="ms-2">Correo electrónico *</label>
              <input
                type="email"
                class="contact-form__input"
                name="email_contact_form"
                id="email_contact_form"
                placeholder="Ej. juanperez@mail.com"
                v-model="email"
              />
            </div>     

            <div class="col col-12"> 
              <label for="text_contact_form" class="ms-2">Mensaje</label>
              <textarea
                name="text_contact_form"
                id="text_contact_form"
                class="contact-form__input"
                rows="3"
                placeholder="Mensaje"
                v-model="message"
              ></textarea>
            </div>        
          </div>
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

      <div class="col col-1">
        <div class="spacer-120"></div>
      </div>

      <!-- CONTACT INFO -->
      <div class="col col-12 col-md-6">
        <MapaComp :locationProp="location" class="mb-4" />

        <section class="section-container">
          <i class="ti ti-location"></i>
          <div class="divider"></div>
          <p class="mb-0">Isabel La Católica 1260, Guerrero, CP 23020 <br> La Paz, Baja California Sur, México.</p>
        </section>

        <div class="row">
          <div class="col col-6">
            <section class="section-container">
              <i class="ti ti-phone"></i>
              <div class="divider"></div>
              <p class="mb-0">
                <a href="tel:+526121251580">+52 612 120 2215</a>
              </p>
            </section>
          </div>
          <div class="col col-6">
            <section class="section-container">
              <i class="ti ti-mail"></i>
              <div class="divider"></div>
              <p class="mb-0">
                <a href="mailto:hola@landfindermexico.com">hola@landfindermexico.com</a>
              </p>
            </section>
          </div>
        </div>

        <div class="social mb-5">
            <a href="https://www.facebook.com/landfinderm" target="_blank" class="me-3"><i class="bi bi-facebook"></i> /landfinderm</a>
            <a href="https://www.linkedin.com/company/landfindermexico/" target="_blank" class="me-3"><i class="bi bi-linkedin"></i>/landfindermexico</a>
            <a href="https://www.twitter.com/LandFinderMx" target="_blank" class="me-3"><i class="bi bi-twitter"></i>@LandFinderMx</a>
        </div>

        <section class="py-5">
          <h3>Preguntas frecuentes</h3>
          <div class="faq-comp">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item" v-for="(item, index) in faqList" :key="index">
                <h2 class="accordion-header" :id="`heading${index}`">
                  <button
                    class="accordion-button"
                    :class="{'collapsed': index !== 0}"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse${index}`"
                    aria-expanded="true"
                    :aria-controls="`collapse${index}`"
                  >
                    {{ item.title }}
                  </button>
                </h2>
                <div
                  :id="`collapse${index}`"
                  class="accordion-collapse collapse"
                  :class="{ show: index === 0 }"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body ps-5">
                    {{ item.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
import MapaComp from '@/components/ContactMap/ContactMapComp.vue'
import { faq } from '@/common/mockData'
import emailjs from "@emailjs/browser";
import { emptyString } from "@/utils/emptyString";
import { emailValid } from "@/utils/emailValid";
export default {
  name: 'ContactView',
  components: {
    MapaComp,
  },
  metaInfo: {
    title: "Land Finder México",
    titleTemplate: "%s | Contacto",
  },
  data() {
    return {
      faqList: faq,
      location: {
        lat: 24.1553252,
        lng:  -110.3023063,
      },
      chips: [
        { id: 1, name: "Desarrollador", },
        { id: 2, name: "Fondo de inversión", },
        { id: 3, name: "Inmobiliaria", },
        { id: 4, name: "Propietario", },
        { id: 5, name: "Otro", }
      ],
      selectedChip: 1,
      name: "",
      nameCompany: "",
      email: "",
      message: "",
      error: "",
    }
  },
  mounted() {
    window.scrollTo(0, 0);
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
  }
};
</script>

<style lang="scss" scoped>
.section-container {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  .divider {
    width: 2px;
    height: 42px;
    background-color: #2f2f2f;
    margin: 0 1rem;
  }
}

.faq-comp {
  padding: 1rem 0;
  margin: 0 auto;
}

.accordion-item {
  border: none;
  border-radius: 0;
  background-color: transparent;
  box-shadow: none;
  color: var(--color-white-2);
}

.accordion-button {
  background-color: transparent;
  box-shadow: none;
}

.accordion-button {
  background-color: transparent;
  box-shadow: none;
  font-size: var(--h3-font-size);
  color: var(--color-text-ligh);
  font-weight: var(--font-medium);
}

.accordion-button:not(.collapsed) {
  color: var(--color-white-2);
}

.accordion-body {
  font-size: 1rem;
}

.arrow-invert {
  transform: rotate(90deg);
}

.contact-form {
  display: flex;
  flex-direction: column;
  &__input {
    width: 100%;
    background-color: transparent;
    border: 2px solid var(--color-black-3);
    border-radius: 12px;
    padding: 0.5rem 1rem;
    color: var(--color-white-2);
    font-weight: var(--font-semi-bold);
    outline: none !important;
    margin-bottom: 1rem;
    &::placeholder {
      color: rgb(100, 100, 100);
      opacity: 1;
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

  .text-form {
    font-weight: var(--font-semi-bold);
    color: var(--color-text);
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
}
</style>
