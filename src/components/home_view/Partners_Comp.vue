<template>
  <div class="partners-container position-relative">
    <div class="first-line animate position-absolute">
      <div class="partner-card" v-for="(item,index) in partners" :key="index">
        <img :src="item.image" alt="">
        <div class="info">
          <h4 class="mb-1">{{item.name}}</h4>
          <p>{{item.description}}</p>
        </div>
      </div>
      <div class="partner-card" v-for="(item,index) in partners" :key="index">
        <img :src="item.image" alt="">
        <div class="info">
          <h4 class="mb-1">{{item.name}}</h4>
          <p>{{item.description}}</p>
        </div>
      </div>
    </div>
    <div class="first-line second-line animate-reverse position-absolute">
      <div class="partner-card" v-for="(item,index) in partners" :key="index">
        <img :src="item.image" alt="">
        <div class="info">
          <h4 class="mb-1">{{item.name}}</h4>
          <p>{{item.description}}</p>
        </div>
      </div>
      <div class="partner-card" v-for="(item,index) in partners" :key="index">
        <img :src="item.image" alt="">
        <div class="info">
          <h4 class="mb-1">{{item.name}}</h4>
          <p>{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PartnersComp',
    data() {
      return {
        partners: [
          {
            id: 0,
            name: 'Lobbi',
            image: 'https://storageapi2.fleek.co/48a94bb3-75aa-4459-8bf6-ef55a4399a78-bucket/companies/lobbi.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit amet consectetur adipisicing elit. Distinctio',
          },
          {
            id: 1,
            name: 'Microsoft',
            image: 'https://experenta.com/wp-content/uploads/2020/10/Microsoft-Logo-primer-player.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit amet consectetur adipisicing elit. Distinctio',
          },
          {
            id: 2,
            name: 'Google',
            image: 'https://thumbs.dreamstime.com/b/logo-del-vector-de-google-el-emblema-la-buena-corporación-166985688.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit amet consectetur adipisicing elit. Distinctio',
          },
          {
            id: 3,
            name: 'Facebook',
            image: 'https://holatelcel.com/wp-content/uploads/2019/11/logo-facebook-1.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit amet consectetur adipisicing elit. Distinctio',
          },
          {
            id: 4,
            name: 'Apple',
            image: 'https://i.pinimg.com/originals/95/27/4c/95274c2b1a825f651c2990052a73cbda.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit amet consectetur adipisicing elit. Distinctio',
          },
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
.partners-container {
  height: 400px;
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