<template>
  <div class="container padding-container" id="team">
    <div class="row py-5 border-line">
      <div class="col col-12 col-md-3">
        <h2 class="ff-secondary">Partners</h2>
      </div>
      <div class="col col-12 col-md-9">
        <p>
          Gracias a las más de 7 marcas que colaboran con Land Finder México
          podemos seguir ofreciendo certeza y agilidad en la consolidación de
          nuevos proyectos inmobiliarios.
        </p>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/landfindermexico/"
          >Conocer más
          <img src="@/assets/icons/arrow-down-right.svg" class="ms-2"
        /></a>
      </div>
    </div>
    <div class="partners-grid">
      <div class="partner-card" v-for="item in partners" :key="item.id">
        <img :src="require('@/assets/partners/' + item.image)">
        <div class="info">
          <h4 class="mb-1">{{item.name}}</h4>
          <p>{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { partners_up_part1 } from "@/common/mockData.js";
export default {
  name: "ConoceComp",
  data() {
    return {
      partners: partners_up_part1,
    }
  },
};
</script>

<style lang="scss" scoped>
#team {
  scroll-margin-top: 160px;
}

h2 {
  font-size: var(--biggest-font-size);
  font-weight: var(--font-medium);
  color: var(--color-white);
}

p {
  color: var(--color-text-light);
  margin: 0 0 24px;
}

a {
  color: var(--color-white);
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

.partners-grid {
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  // // center the partners cards in the grid
  // justify-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  .partner-card {
    width: 100%;
    max-width: 300px;
    height: 100px;
    padding: 12px;
    background-color: #131313;
    border-radius: 16px;
    border: 2px solid transparent;
    display: flex;
    column-gap: 1rem;
    position: relative;
    cursor: default;
    transition: var(--transition-normal);
    img {
      height: 100%;
      object-fit: contain;
      border-radius: 12px;
    }
    h4 {
      font-family: var(--font-secondary);
      font-size: 1.1rem;
      color: var(--color-white-2);
    }
    p {
      font-size: var(--smaller-font-size);
      color: var(--color-white-2);
      line-height: 0.83rem;
    }

    &:hover {
      // glow border effect
      transform: scale(1.02);
      box-shadow: 0 0 18px rgba($color: #0DBA6A, $alpha: 0.6);
      border: 2px solid var(--color-complementary-1);
    }
  }
}
</style>
