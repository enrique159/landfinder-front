<template>
  <div class="formulario-contacto">
    <div class="row">
      <div class="col col-2 px-2">
        <img src="@/assets/icons/pdf.svg" alt="" />
      </div>
      <div class="col col-10 px-1">
        <h4 class="form-title m-0">Pre-análisis de Inversión.PDF</h4>
        <p class="form-file-size">Tamaño de archivo: 19mb</p>
      </div>
    </div>
    <div class="divider mb-4"></div>
    <h4 class="contenido-title">Contiene:</h4>
    <ul class="list-content">
      <li v-for="(item, index) in listContent" :key="index">
        {{ item }}
      </li>
    </ul>
    <input
      class="input-email"
      placeholder="Correo electórnico institucional"
      type="email"
      name="input_form_project"
      id="input_form_project"
    />
    <button class="button-email mb-3">Solicitar documentación</button>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        Confirmo que soy un desarrollador independiente o representante de una
        empresa que tiene la capacidad o intención de invertir en el proyecto y que
        he leído y acepto los términos y condiciones.
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormularioComp",
  data() {
    return {
      listContent: [
        "Características e información detallada del inmueble.",
        "Usos de suelo y normativa vigente con interpretación.",
        "Análisis del entorno de mercado básico (Oferta similar).",
        "Análisis del entorno de mercado básico (Demanda por nichos de mercado).",
        "Evaluación de escenario de negocio, estimaciones y proyecciones.",
        "Necesidades del proyecto.",
        "Contenido gráfico especializado.",
      ],
    };
  },
  methods: {
    // validate the email doesnt be a personal email
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
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
  .input-email {
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
}
</style>