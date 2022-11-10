<template>
  <div class="partners-container position-relative">
    <div class="first-line animate position-absolute">
      <div class="partner-card" v-for="item in partnersUp1" :key="item.id">
        <img :src="require('@/assets/partners/' + item.image)">
        <div class="info">
          <h4 class="mb-1">{{item.name}}</h4>
          <p>{{item.description}}</p>
        </div>
      </div>
      <div class="partner-card" v-for="item in partnersUp2" :key="item.id">
        <img :src="require('@/assets/partners/' + item.image)">
        <div class="info">
          <h4 class="mb-1">{{item.name}}</h4>
          <p>{{item.description}}</p>
        </div>
      </div>
    </div>
    <!-- <div class="first-line second-line animate-reverse position-absolute">
      <div class="partner-card" v-for="item in partnersDown1" :key="item.id">
        <img :src="require('@/assets/partners/' + item.image)">
        <div class="info">
          <h4 class="mb-1">{{item.name}}</h4>
          <p>{{item.description}}</p>
        </div>
      </div>
      <div class="partner-card" v-for="item in partnersDown2" :key="item.id">
        <img :src="require('@/assets/partners/' + item.image)">
        <div class="info">
          <h4 class="mb-1">{{item.name}}</h4>
          <p>{{item.description}}</p>
        </div>
      </div> 
    </div> -->
  </div>
</template>

<script>
import { partners_up_part1, partners_up_part2, partners_down_part1, partners_down_part2 } from "@/common/mockData.js";
  export default {
    name: 'PartnersComp',
    data() {
      return {
        partnersUp1: partners_up_part1,
        partnersUp2: partners_up_part2,
        partnersDown1: partners_down_part1,
        partnersDown2: partners_down_part2, 
      }
    },
  }
</script>

<style lang="scss" scoped>
.partners-container {
  height: 140px;
  width: 100%;
  overflow-x: hidden;
  .first-line {
    display: flex;
    column-gap: 1rem;
    .partner-card {
      width: 320px;
      min-width: 320px;
      height: 100px;
      padding: 12px;
      background-color: var(--color-black-3);
      border-radius: 8px;
      box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
      display: flex;
      column-gap: 1rem;
      img {
        height: 70%;
        object-fit: contain;
        border-radius: 12px;
      }
      h4 {
        font-size: 1.1rem;
        color: var(--color-white-2);
      }
      p {
        font-size: var(--smaller-font-size);
        color: var(--color-white-2);
        line-height: 0.83rem;
      }
    }
  }
  .second-line {
    top: 120px;
  }
}

@keyframes goleft {
	0% {
		left: 0;
	}
	100% {
		left: -120%;
	}
}

@keyframes goright {
	0% {
		right: 0;
	}
	100% {
		right: -120%;
	}
}
.animate {
	width: 240%;
	animation: goleft 30s linear infinite;
}

.animate-reverse {
	width: 240%;
	animation: goright 30s linear infinite;
}

.animate:hover, .animate-reverse:hover {
	animation-play-state: paused;
}
</style>