<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <h2 class="title">Espacios en aportación</h2>
      </div>
      <div class="col-12 col-md-6">
        <div class="metros-aportaciones">
          <div class="row">
            <div class="col-12 col-xxl-7 mb-3 mb-xxl-0">
              <div class="d-flex justify-content-between justify-content-xxl-start align-items-center w-100">
                <span>+ 1,322,718.32 m²</span>
                <h4>En aportación</h4>
              </div>
            </div>
            <div class="col-12 col-xxl-5">
              <div class="d-flex justify-content-between justify-content-xxl-end align-items-center w-100">
                <span>+ 2,006.00 m²</span>
                <h4>Aportado</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="methodology" class="row info-titles mb-5">
      <div class="col col-3 col-sm-4 info-titles-left">
        <a href="#contacto">
          <h4>Contacta con nosotros</h4>
          <img src="@/assets/icons/arrow-down-right.svg" alt="" />
        </a>
      </div>
      <div class="col col-9 col-sm-8 info-titles-right">
        <p>
          Trabajamos día a día por crear mejores oportunidades de negocio,
          viendo siempre por el mejor uso de la tierra.
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
export default {
  name: "AportacionComp",
  data() {
    return {
      metodologias: metodologias,
    };
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