<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="formNewsletter"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <h1 class="modal-title fs-5" id="exampleModalLabel">Obten información sobre LFM</h1>
            <p class="subtitle">
              Llena los siguientes datos para poder registrarte y así poder
              mantenerte informado de las novedades de Land Finder México.
            </p>
          </div>
          <button
            id="closeModalNewsletter"
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-4">
          <form>
            <div class="row">
              <div class="col-10 mb-3">
                <label class="ms-2 mb-3">¿Qué soy?</label>
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
              <div class="col-6">
                <label for="bussinesNameInput" class="ms-2">Nombre de tu empresa</label>
                <input
                  type="text"
                  class="form-input"
                  placeholder="Ej. Inmobiliaria XYZ"
                  id="bussinesNameInput"
                  v-model="businessName"
                />
              </div>
              <div class="col-6">
                <label for="emailInput" class="ms-2">Correo electrónico*</label>
                <input
                  type="email"
                  class="form-input"
                  placeholder="Ej. nombre@dominio.com"
                  id="emailInput"
                  v-model="email"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn button-register" @click="validForm()">
            <div class="spinner-border spinner-border-sm text-light ms-1" role="status" v-if="loading">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span v-else>
              Registrarme
            </span> 
          </button>
        </div>
        <div class="d-flex justify-content-end px-3 pb-2" v-if="error !== ''">
          <p class="error-text mb-0">{{error}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emailValid } from '@/utils/emailValid';
import emailjs from '@emailjs/browser';
export default {
  data() {
    return {
      chips: [
        { id: 1, name: "Desarrollador" },
        { id: 2, name: "Fondo de inversión" },
        { id: 3, name: "Inmobiliaria" },
        { id: 4, name: "Propietario" },
        { id: 5, name: "Otro" },
      ],
      selectedChip: 1,
      loading: false,
      businessName: '',
      email: '',
      error: '',
    };
  },
  methods: {
    selectChip(id) {
      this.selectedChip = id;
    },

    validForm() {
      this.error = '';
      if (this.email === '') {
        this.error = 'Por favor, ingresa tu correo electrónico';
        return;
      }
      if (!emailValid(this.email)) {
        this.error = 'Por favor, ingresa un correo electrónico válido';
        return false;
      }
      this.sendEmail()
    },

    // SEND EMAIL
    sendEmail() {
      this.loading = true;
      emailjs.send(
        "service_dx3z2na",
        "template_owe413r",
        {
          type: this.chips[this.selectedChip - 1].name,
          email: this.email,
          business_name: this.businessName,
        },
        "-DIkcxuZ3ssPqzst2",
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          this.loading = false;
          this.businessName = '';
          this.email = '';
          this.error = '';
          this.selectedChip = 1;
          this.closeModal();
          this.showToast('success', 'Registro exitoso', 'Te hemos enviado un correo de confirmación');
        },
        (error) => {
          this.loading = false;
          this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')
          console.log("FAILED...", error);
        }
      );
    },

    // CLOSE MODAL
    closeModal() {
      document.getElementById('closeModalNewsletter').click();
    },

    // SHOW TOAST
    showToast(type, message) {
      this.$toast(message, {
        type: type,
        position: 'top-right',
        duration: 3000,
        dismissible: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: 'button',
        icon: true,
        rtl: false,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.subtitle {
  font-size: 0.8rem;
  color: var(--color-text-light);
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

.error-text {
  color: var(--color-error);
  font-size: 0.8rem;
  font-weight: var(--font-semi-bold);
}

.button-cancel {
  width: fit-content;
  height: fit-content;
  border: none;
  border-radius: 12px;
  padding: 0.5rem 1rem;
  font-size: var(--small-font-size);
  font-weight: var(--font-bold);
  color: var(--color-white);
  background-color: transparent;
  transition: var(--transition-fast);
  cursor: pointer;
  &:hover {
    background-color: var(--color-black-3);
  }
}

.button-register {
  width: fit-content;
  min-width: 30px;
  height: fit-content;
  border: 2px solid var(--color-complementary-1);
  border-radius: 12px;
  padding: 0.5rem 1rem;
  font-size: var(--small-font-size);
  font-weight: var(--font-bold);
  color: var(--color-complementary-1);
  background-color: transparent;
  transition: var(--transition-fast);
  cursor: pointer;
  &:hover {
    background-color: var(--color-complementary-1);
    color: var(--color-white);
  }
}

.chips-selector {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  gap: 0.6rem;
  .chip {
    background-color: transparent;
    border: 1px solid var(--color-white-2);
    border-radius: 24px;
    color: var(--color-white-2);
    cursor: pointer;
    font-weight: var(--font-semi-bold);
    font-size: var(--small-font-size);
    padding: 0.2rem 0.5rem;
    transition: var(--transition-fast);
    &.active {
      background-color: var(--color-white);
      border: 1px solid var(--color-white);
      color: var(--color-black);
    }
  }
}
.modal-content {
  background-color: var(--color-background);
}
.modal-header {
  align-items: flex-start;
}
.modal-header,
.modal-footer {
  border-bottom: none;
  border-top: none;
}
</style>
