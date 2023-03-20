<template>
  <div class="container">
    <div class="row info-titles mb-5">
      <div class="col col-9 col-sm-8 info-titles-left">
        <p class="animate__animated">
          Encontramos el mayor y mejor uso para tu inmueble ¡Visita nuestro marketplace!
        </p>
      </div>
      <div @click="toPortfolio" class="col col-3 col-sm-4 info-titles-right">
        <img src="@/assets/icons/arrow-down-right.svg" alt="" />
        <h4>Ver portafolio completo</h4>
      </div>
    </div>
    <div v-if="isLoading" class="d-flex justify-content-center align-items-center" style="height: 300px;">
      <div class="spinner-border" style="width: 3rem; height: 3rem; color: #0DBA6A;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="top-projects" v-else>
      <div 
        class="project-card animate__animated animate__fadeInUp" 
        :style="'animation-delay: ' + (index * 0.1) + 's'"
        v-for="(project, index) in projects" 
        :key="project.id"  
        @click="openProject(project.id, convertToSlug(project.attributes.name))"
      >
        <img :src="project.attributes.image_review" alt="image_review" loading="lazy"/>
        <div class="bloc-shadow"></div>
        <h4 class="position-relative">{{ project.attributes.mod }}</h4>
        <div>
          <h2 class="position-relative">{{ project.attributes.name }}</h2>
          <p class="position-relative">
            {{ project.attributes.hood }}, {{ project.attributes.estate }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "@/common/project_services.js";
export default {
  name: "DestacadosComp",
  data() {
    return {
      projects: [],
      isLoading: false,
    };
  },
  mounted() {
    this.getTopProjects();
  },
  methods: {
    async getTopProjects() {
      this.isLoading = true;
      await Projects.getTopList()
        .then((res) => {
          if (res.status == 200) {
            this.projects = res.data.data;
          } else {
            console.log("Error al obtener los proyectos");
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    openProject(id, name) {
      this.$router.push({
        name: "project",
        params: {
          id: id,
          name: name
        },
      });
    },
    // convert spaces into - for url
    convertToSlug(text) {
      return text
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    },
    toPortfolio(){
      this.$router.push("/marketplace");
    }
  },
};
</script>

<style lang="scss" scoped>
.info-titles {
  margin-top: 4rem;
  border-bottom: 1px solid var(--color-text-dark);
  .info-titles-left {
    padding: 24px;
    border-right: 1px solid var(--color-text-dark);
    p {
      font-size: var(--h1-font-size);
      font-weight: var(--font-medium);
      color: var(--color-text);
      line-height: 2.4rem;
      margin: 0;
      text-align: right;
    }
  }
  .info-titles-right {
    height: 100%;
    min-height: 124px;
    padding: 24px 8px 24px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    transition: var(--transition-fast);
    cursor: pointer;
    h4 {
      font-size: var(--normal-font-size);
      font-weight: var(--font-semi-bold);
      transition: var(--transition-fast);
      color: var(--color-text);
      width: 100%;
      text-align: left;
      margin: 0;
    }
    img {
      width: 12px;
      transform: rotate(-90deg);
      transition: var(--transition-fast);
    }
    &:hover {
      opacity: 0.8;
      h4 {
        padding-left: 16px;
      }
      img {
        margin-right: 16px;
      }
    }
    @media screen and (max-width: 1200px) {
      min-height: 160px;
    }
    @media screen and (max-width: 992px) {
      min-height: 140px;
    }
    @media screen and (max-width: 768px) {
      min-height: 172px;
      padding: 12px;
      &:hover {
        opacity: 0.8;
        h4,
        a {
          padding: 0;
        }
      }
    }
    @media screen and (max-width: 576px) {
      min-height: 172px;
    }
  }
}

.top-projects {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .project-card {
    position: relative;
    height: 400px;
    background-color: var(--color-text-dark);
    border-radius: 18px;
    clip-path: border-box;
    padding: 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    cursor: pointer;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.2s ease-in-out;
      z-index: 0;
    }
    .bloc-shadow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 0.2s ease-in-out;
      opacity: 0.8;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.13489145658263302) 0%,
        rgba(0, 0, 0, 0.9444152661064426) 100%
      );
    }
    h4 {
      margin-left: auto;
      width: fit-content;
      border: 1px solid var(--color-white);
      font-size: var(--normal-font-size);
      font-weight: var(--font-semi-bold);
      padding: 4px 8px;
      border-radius: 10px;
    }
    h2 {
      font-size: 1.4rem;
      font-weight: var(--font-semi-bold);
      transition: 0.2s ease-in-out;
      margin: 0;
    }
    p {
      font-size: var(--small-font-size);
      font-weight: var(--font-medium);
      color: var(--color-text-light);
      transition: 0.2s ease-in-out;
      margin: 0;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
      .bloc-shadow {
        opacity: 1;
      }
      h2 {
        margin-bottom: 12px;
      }
      p {
        margin-bottom: 6px;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .info-titles {
    .info-titles-left {
      p {
        font-size: 1.6rem;
        line-height: 2rem;
      }
    }
  }
  .top-projects {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 768px) {
  .top-projects {
    grid-template-columns: 1fr;
    padding: 0 18px;
    .project-card {
      height: 580px;
    }
  }
}
</style>