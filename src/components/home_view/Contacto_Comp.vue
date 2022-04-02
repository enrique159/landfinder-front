<template>
  <div class="container contacto-section py-5 px-5 px-md-0">
    <div class="row contacto-form px-3 px-md-5 py-4 py-md-5 justify-content-between">
      <div class="col col-12 col-md-6 mb-4 mb-md-0">
        <h2>¿Listo para empezar a desarrollar En Baja California Sur?</h2>
        <p class="mb-4">
          Déjanos un mensaje a nuestro correo electrónico y en breve uno de
          nuestros asesores se pondrá en contacto contigo.
        </p>
        <a href="#">Volver al portafolio <img src="@/assets/icons/arrow-down-right.svg" alt="" /></a>
      </div>
      <div class="col col-12 col-md-4 d-flex flex-column">
        <input type="email" name="email_contact_form" id="email_contact_form" placeholder="E-mail">
        <textarea name="text_contact_form" id="text_contact_form" rows="3" placeholder="Mensaje"></textarea>
        <button id="submit_contact_form" type="submit">Enviar mensaje</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactoComp",
};
</script>

<style lang="scss" scoped>
.contacto-section {
  border-top: 1px solid var(--color-text-dark);

  .contacto-form {
    background-color: var(--color-complementary-1);
    border-radius: 24px;
    a{
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
    #email_contact_form, #text_contact_form {
      background-color: transparent;
      border: none;
      border-bottom: 2px solid var(--color-black-3);
      color: var(--color-black-3);
      font-weight: var(--font-semi-bold);
      margin-bottom: 1rem;
      &::placeholder {
        color: var(--color-black-3);
        opacity: 0.8;
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
    }
  }
}
</style>