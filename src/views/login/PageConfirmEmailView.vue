<template>
  <div class="page-confirm-email">
    <div class="spacer-130"></div>
    <lottie-player src="./email-send.json" background="transparent" style="max-width: 180px;"  speed="1" loop autoplay></lottie-player>
    <h2 class="mb-5">Hemos enviado un correo de confirmacion a tu bandeja de entrada</h2>
    <p class="mb-0">
      Recuerda revisar la bandeja de Spam. Si no has recibido el correo puedes 
      <button class="btn-resend" @click="resendEmail()">reenviar el correo. <span v-if="loading" class="tc-complementary-1">(enviando..)</span></button>
    </p>
  </div>
</template>

<script>
import AuthServices from '@/services/AuthServices';
export default {
  data() {
    return {
      email: '',
      loading: false,
    }
  },
  methods: {
    async resendEmail() {
      this.email = this.$route.query.email || '';
      if (!this.email) {
        this.showToast('error', 'No se ha podido enviar el correo de confirmacion favor de comunicarse con soporte.');
        return;
      };
      this.loading = true;
      await AuthServices.sendEmailConfirmation(this.email)
       .then((res) => {
          if (res.status === 200) {
            this.showToast('success', 'Se ha enviado un correo de confirmacion a tu bandeja de entrada.');
          } else {
            this.showToast('error', 'Este correo ya ha sido confirmado.');
          }
        })
        .catch((err) => {
          console.log(err)
          this.showToast('error', 'No se ha podido enviar el correo de confirmacion favor de comunicarse con soporte.');
        });
      this.loading = false;
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
}
</script>

<style lang="scss" scoped>
.page-confirm-email {
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem;
  margin-bottom: 5rem;
  h2 {
    width: 60%;
    font-size: var(--h1-font-size);
    font-weight: var(--font-bold);
    color: var(--color-text);
    margin: 0;
    text-align: center;
  }
  p {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    color: var(--color-text);
    text-align: center;
    margin: 0;
  }

  .btn-resend {
    background: none;
    padding: 0;
    color: var(--color-complementary-1-dark);
    font-weight: var(--font-bold);
  }
}

@media screen and (max-width: 768px) {
  .page-confirm-email {
    h2 {
      width: 100%;
    }
  }
}
</style>