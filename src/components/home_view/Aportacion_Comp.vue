<template>
  <div class="container">
    <div id="methodology" class="row info-titles mb-5">
      <div class="col col-3 col-sm-4 info-titles-left">
        <a href="#contacto">
          <h4>Contacta con nosotros</h4>
          <img src="@/assets/icons/arrow-down-right.svg" alt="" />
        </a>
      </div>
      <div class="col col-9 col-sm-8 info-titles-right">
        <p>
          Conectamos inmuebles, propietarios e inversionistas para crear nuevas
          oportunidades de negocio.
        </p>
      </div>
    </div>
    <div class="contenedor">
      <div class="metodologia">
        <h4>Metodología</h4>
        <div v-for="item in metodologias" :key="item.id">
          <p class="text-id">{{ item.id }}</p>
          <h3 class="text-name">{{ item.name }}</h3>
          <p class="text-detail">{{ item.detail }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { metodologiasMockData as metodologias } from "@/common/mockData.js";
import Variables from "@/common/variable_services.js";
export default {
  name: "AportacionComp",
  data() {
    return {
      metodologias: metodologias,
      variables: [],
    };
  },
  computed: {
    aportado() {
      return this.variables.length > 0
        ? this.variables.filter(
            (variable) => variable.attributes.name === "aportado"
          )[0].attributes.value
        : 0;
    },
    enAportacion() {
      return this.variables.length > 0
        ? this.variables.filter(
            (variable) => variable.attributes.name === "aportacion"
          )[0].attributes.value
        : 0;
    },
  },
  methods: {
    async getVariables() {
      await Variables.getAll().then((res) => {
        this.variables = res.data.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: var(--biggest-font-size);
  font-weight: var(--font-medium);
}
.metros-aportaciones {
  width: 100%;
  border: 2px solid var(--color-text-dark);
  padding: 8px;
  padding-left: 0;
  border-radius: 12px;
  margin-bottom: 12px;
  span {
    margin: 0 21px;
  }
  h4 {
    border: 2px solid var(--color-complementary-1);
    font-size: var(--normal-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--color-complementary-1);
    padding: 4px 10px;
    border-radius: 8px;
    margin: 0;
  }
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
    align-items: flex-end;
    border-right: 1px solid var(--color-text-dark);
    padding: 24px 24px 12px;

    a {
      width: fit-content;
      text-align: right;
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
.contenedor {
  width: 100%;
  height: fit-content;
  background-image: url("@/assets/aportacion-bg.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 24px 48px;
  border-radius: 24px;
  .metodologia {
    background-color: var(--color-background);
    width: fit-content;
    max-width: 420px;
    margin-left: auto;
    padding: 1rem;
    h4 {
      font-size: var(--normal-font-size);
      font-weight: var(--font-semi-bold);
      color: var(--color-text);
      margin: 0 0 48px;
    }
    .text-id {
      font-size: var(--small-font-size);
      font-weight: var(--font-bold);
      color: var(--color-text);
      margin: 0;
    }
    .text-name {
      font-size: 1.4rem;
      font-weight: var(--font-semi-bold);
      color: var(--color-text);
      margin: 0;
    }
    .text-detail {
      font-size: var(--small-font-size);
      font-weight: var(--font-medium);
      color: var(--color-text-light);
      padding-bottom: 12px;
      margin: 0 0 12px;
      border-bottom: 1px solid var(--color-text-dark);
    }
  }
  .metodologia > div:last-child {
    .text-detail {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
}

@media screen and (max-width: 992px) {
  .info-titles {
    .info-titles-right {
      p {
        font-size: 1.6rem;
        line-height: 2rem;
      }
    }
  }
}
</style>
