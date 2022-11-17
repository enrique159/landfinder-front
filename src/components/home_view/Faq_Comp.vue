<template>
  <div class="container py-5">
    <div id="methodology" class="row info-titles mb-5">
      <div class="col col-9 col-sm-8 info-titles-right">
        <p>
          ¿Tienes dudas sobre estos temas? - Preguntas frecuentes
        </p>
      </div>
      <div class="col col-3 col-sm-4 info-titles-left">
        <a href="#">
          <h4>Haz click en las siguientes preguntas</h4>
          <img class="arrow-invert" src="@/assets/icons/arrow-down-right.svg" alt="" />
        </a>
      </div>
    </div>
    
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqList: [
        {
          title: "¿Qué es una aportación?",
          description:
            "Es la acción de poner un bien inmueble a disposición de una figura legal, ya sea fideicomiso, sociedad, asociación en participación, etc., en conjunto a una parte inversionista cuyo objeto es realizar un proyecto inmobiliario y repartir sus utilidades entre las partes. ",
        },
        {
          title:
            "¿Qué características debe tener mi inmueble para ser aportado?",
          description:
            "Para cada inmueble existe un proyecto, en LFM nos encargaremos de hacer el estudio del inmueble independientemente de sus características, uso de suelo o régimen de propiedad (ejidal o privada) y darle a conocer las mejores opciones para su desarrollo. ",
        },
        {
          title:
            "¿Cuáles son los pasos para llegar al cierre de una aportación?",
          description:
            "El procedimiento en términos generales es el siguiente: (1) Se publica el inmueble en LFM. (2) El inversionista encuentra el inmueble en nuestra plataforma, se valida su registro y solicita el preanálisis de inversión. (3) El inversionista verifica la información y hace proyecciones sobre el inmueble. (4) El inversionista presenta una propuesta de aportación a LFM. (5)LFM presenta la propuesta de inversión al propietario, una vez aceptada se realiza la figura legal y se firma por ambas partes. ",
        },
        {
          title:
            "¿Puedo publicar una propiedad en trámite de regularización y/o intestado?",
          description:
            "Sí, una vez evaluada por el equipo de investigación legal se oferta la propiedad dentro de la plataforma (LFM) señalando el tipo de trámite en proceso o por realizar. ",
        },
        {
          title:
            "¿Puedo vender mi propiedad mientras se esté ofertando en LFM?",
          description:
            "Sí, la exclusiva de LFM es flexible y permite la venta del inmueble por un tercero que no requiera plazos forzosos o bien directamente por el propietario, siempre y cuando no exista una intención de inversión por parte de un fondo o desarrollador de por medio, si este fuera el caso el propietario deberá dar aviso al vendedor tercero de estas intenciones para pausar la oferta del predio. ",
        },
        {
          title:
            "¿Qué documentación se requiere para iniciar el análisis de mi propiedad?",
          description:
            "Identificación del propietario, antecedente de propiedad (título y/o escritura), oficios y/o protocolizaciones de oficios de subdivisión y/o fusión (en caso de que se haya realizado sobre el inmueble), certificado de libertad de gravamen, manifestación de construcción (en caso de que la construcción no se encuentra descrita en la escritura), contestar el cuestionario legal de validación de Land Finder México. ",
        },
        {
          title:
            "¿Qué hace distinto a LFM de otras plataformas de comercialización de inmuebles?",
          description:
            "A través de nuestro sitio, publicamos inmuebles a los cuales previamente se les realizó un preanálisis de inversión (estudios técnicos, financieros y antecedentes legales), de forma que el inversionista tenga elementos para tomar decisiones informadas, en un corto periodo de tiempo, sobre la viabilidad de un proyecto en dichos inmuebles. ",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
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
  font-size: var(--h2-font-size);
  color: var(--color-text-ligh);
  font-weight: var(--font-medium);
}

.accordion-button:not(.collapsed) {
  color: var(--color-white-2);
}

.accordion-body {
  font-size: 1.2rem;
}

.arrow-invert {
  transform: rotate(90deg);
}

.info-titles {
  margin-top: 4rem;
  border-top: 1px solid var(--color-text-dark);
  .info-titles-left {
    height: 100%;
    min-height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-left: 1px solid var(--color-text-dark);
    padding: 24px 24px 12px;

    @media only screen and (max-width: 768px) {
      padding: 12px 12px 12px;
    }

    a {
      width: fit-content;
      text-align: left;
      height: 100%;
      h4 {
        font-size: var(--normal-font-size);
        font-weight: var(--font-semi-bold);
        transition: var(--transition-fast);
        color: var(--color-text);
        margin: 0 0 58px;
      }
      img {
        width: 12px;
        transition: var(--transition-fast);
      }
      &:hover {
        h4 {
          padding-right: 16px;
          opacity: 0.8;
        }
        img {
          margin-right: -8px;
          opacity: 0.8;
        }
      }
      @media screen and (max-width: 768px) {
        &:hover {
          h4 {
            padding-right: 4px;
          }
          img {
            margin-right: -4px;
          }
        }
      }
    }
  }
  .info-titles-right {
    padding: 12px 24px 0;
    p {
      font-size: var(--h1-font-size);
      font-weight: var(--font-medium);
      color: var(--color-text);
      line-height: 2.4rem;
      margin: 0;
    }
  }
}
</style>
