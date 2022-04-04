<template>
  <div class="image-container mb-4">
    <LightGallery
      :images="allImages"
      :index="index"
      :disable-scroll="false"
      @close="index = null"
    />
    <div class="row">
      <div class="col col-12 col-md-7 col-lg-8 col-xl-9 pb-2 px-0">
        <div class="image-cover">
          <img
            :src="imagenCover"
            class="imageCover"
            alt="Imagen Cover"
            loading="lazy"
            @click="index = 0"
          />
        </div>
      </div>
      <div class="col col-12 col-md-5 col-lg-4 col-xl-3 ps-md-3 px-0">
        <div class="images">
          <div
            class="image-right"
            v-for="(img, ImgIndex) in imagenes.slice(0, 4)"
            :key="ImgIndex"
            @click="index = ImgIndex + 1"
          >
            <img class="imageRight" :src="img" />
            <div class="more-image" v-if="ImgIndex == 3 && imagenes.length > 4">
              Ver {{ imagenes.length - 4 }} más
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LightGallery } from "vue-light-gallery";
export default {
  name: "ImagenesComp",
  props: ["imagenCover", "imagenes"],
  components: {
    LightGallery,
  },
  data() {
    return {
      index: null,
    };
  },
  computed: {
    allImages() {
      return [this.imagenCover, ...this.imagenes];
    },
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  width: 100%;
  .image-cover {
    width: 100%;
    height: 480px;
    border-radius: 24px;
    clip-path: border-box;
    overflow: hidden;
    .imageCover {
      width: 100%;
      height: 100%;
      object-fit: cover;
      //border-radius: 24px;
      transition: 0.2s ease-in-out;
      cursor: pointer;
    }
    &:hover {
      .imageCover {
        transform: scale(1.03);
        opacity: 0.8;
      }
    }
  }
  .images {
    width: 100%;
    height: 480px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 2%;
    .image-right {
      width: 48%;
      height: 48%;
      border-radius: 14px;
      overflow: hidden;
      clip-path: border-box;
      position: relative;
      cursor: pointer;
      .imageRight {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 14px;
        transition: 0.2s ease-in-out;
        position: relative;
      }
      .more-image {
        width: 100%;
        height: 100%;
        border-radius: 14px;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.161) 0%,
          rgba(0, 0, 0, 0.867) 100%
        );
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.2s ease-in-out;
        display: grid;
        place-items: center;
        font-weight: var(--font-semi-bold);
      }
      &:hover {
        .imageRight {
          transform: scale(1.02);
          opacity: 0.8;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .image-container {
    .image-cover {
      height: 240px;
      border-radius: 12px;

    }
    .images {
      height: 160px;
      .image-right {
        width: 49%;
      }
    }
  }
}
</style>