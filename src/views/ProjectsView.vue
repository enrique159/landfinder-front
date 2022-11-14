<template>
  <div class="projects-view container">
    <h2 class="main-title">
      <img src="@/assets/icons/back.svg" alt="" />Resultados de búsqueda:
    </h2>
    <div class="parameters">
      <div class="parameters-options">
        <div class="option option-class">
          <span>
            {{ parameters.class }} 
          </span>
        </div>
        <div class="option">
          <i class="bi bi-geo-alt-fill"></i>
          {{ parameters.location.name }}
        </div>
        <div class="option">
          {{ parameters.minLand }} M²
        </div>
       <!--  <div class="option">
          {{ parameters.minValue }} MXN
        </div> -->
        <button class="button-delete-filters" @click="resetParameters">
          <i class="bi bi-x"></i>Borrar filtros
        </button>
      </div>
      <button class="button-search" @click="goBack">
        Búsqueda <i class="bi bi-search ms-2"></i>
      </button>
    </div>

    <div class="projects-list mt-5">
      <div
        class="project-card animate__animated animate__fadeInUp"
        :style="'animation-delay: ' + (index * 0.1) + 's'"
        v-for="(project, index) in filteredProjects"
        :key="index"
        @click="openProject(project.id)"
      >
        <img
          :src="project.attributes.image_review"
          alt="image_review"
          loading="lazy"
        />
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
    <div v-if="isProjectsEmpty">
      No hay proyectos con esos parámetros de búsqueda
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Projects from "@/common/project_services.js";
export default {
  data() {
    return {
      projects: [],
    }
  },
  metaInfo: {
    title: 'Land Finder México',
    titleTemplate: '%s | Proyectos'
  },
  mounted() {
    this.getProjects();
  },
  computed: {
    ...mapGetters({
      parameters: 'getParameters'
    }),
    // filter by type, place and price
    filteredProjects() {
      return this.projects.filter(
        (project) => {
          if(this.parameters.active) {
            if(this.parameters.location.value == 'Anywere') {
              return project.attributes.project_value >= this.parameters.minValue &&
                project.attributes.land_area >= this.parameters.minLand &&
                project.attributes.class === this.parameters.class
            } else {
              return project.attributes.project_value >= this.parameters.minValue &&
              project.attributes.land_area >= this.parameters.minLand &&
              project.attributes.city === this.parameters.location.value &&
              project.attributes.class === this.parameters.class
            }
          } else {
            return project
          }  
        }
      );
    },
    // check if filtered projects is empty
    isProjectsEmpty() {
      return this.filteredProjects.length == 0;
    }
  },
  methods: {
    async getProjects() {
      const projects = await Projects.getAll();
      console.log(projects);
      if (projects.status == 200) {
        this.projects = projects.data.data;
      } else {
        console.log("Error al obtener los proyectos");
      }
    },
    openProject(id) {
      this.$router.push({
        name: "project",
        params: {
          id: id,
        },
      });
    },
    
    // reset parameters
    resetParameters() {
      this.$store.commit('resetParameters');
    },

    goBack() {
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.projects-view {
  height: fit-content;
  min-height: 80vh;

  .main-title {
    font-size: var(--h1-font-size);
    font-weight: var(--font-medium);
    color: var(--color-white-2);
    img {
      width: 24px;
      transform: translateY(-4px);
      margin-right: 16px;
    }
  }

  .parameters {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .parameters-options {
      display: flex;
      column-gap: 1rem;
      .option {
        border: 1px solid var(--color-black-3);
        font-size: var(--small-font-size);
        font-weight: var(--font-bold);
        color: var(--color-text-light);
        border-radius: 12px;
        padding: 0.5rem 1.5rem 0.4rem;
        transition: 0.2s ease-in-out;
      }
      .option-class {
        border: none;
        background-color: var(--color-complementary-1);
        padding: 0.6rem 1.5rem 0.4rem;
        color: var(--color-white);
      }
      .button-delete-filters{
        background-color: transparent;
        font-size: var(--normal-font-size);
        font-weight: var(--font-medium);
        color: var(--color-white-2);
        border-radius: 12px;
        padding: 0.5rem 1.5rem 0.4rem;
        transition: 0.2s ease-in-out;
        border: none;
        &:hover {
          background-color: var(--color-black-3);
          color: var(--color-white);
        }
      }
    }
    .button-search {
      background-color: transparent;
      font-size: var(--normal-font-size);
      font-weight: var(--font-medium);
      color: var(--color-white-2);
      border-radius: 12px;
      padding: 0.5rem 2rem 0.4rem;
      transition: 0.2s ease-in-out;
      border: 1px solid var(--color-black-3);
      &:hover {
        background-color: var(--color-black-3);
        color: var(--color-white);
      }
    }
  }
  .projects-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    .project-card {
      aspect-ratio: 3/4;
      background-color: var(--color-black-3);
      position: relative;
      background-color: var(--color-text-dark);
      border-radius: 18px;
      clip-path: border-box;
      padding: 24px;
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
        border-radius: 18px;
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
    @media only screen and (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 0 24px;
    }
  }
}
</style>