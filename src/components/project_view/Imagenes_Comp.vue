<template>
  <div class="image-container mb-4">
    <LightGallery
      :images="allImages"
      :index="index"
      :disable-scroll="true"
      @close="index = null"
    />
    <div class="row">
      <div class="col-9 p-0">
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
      <div class="col-3 px-0 ps-3">
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
    overflow: hidden;
    border-radius: 24px;
    .imageCover {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 24px;
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
    align-items: center;
    row-gap: 2%;
    .image-right {
      width: 48%;
      height: 48%;
      border-radius: 14px;
      overflow: hidden;
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
          transform: scale(1.03);
          opacity: 0.8;
        }
      }
    }
  }
}
</style>