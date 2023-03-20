<template>
  <div class="projects-view container">
    <h2 class="main-title ps-2 text-center text-sm-start"> Marketplace </h2>
    <div class="row">
      <div class="col col-12 col-md-4 col-lg-3 mb-4 px-5 px-sm-0">
        <SearchBarComp />

        <!-- UPLOAD YOUR PROPERTY -->
        <div class="upload-property-banner">
          <div class="upload-property-banner__content">
            <h3>¿Quieres vender tu propiedad?</h3>
            <p>
              Publica tu propiedad en nuestro marketplace y comienza a recibir
              ofertas.
            </p>
            <router-link to="/signup" class="button-upload">
              Registrarme
            </router-link>
          </div>
        </div>
      </div>

      <!-- LIST OF PROJECTS -->
      <div class="col col-12 col-md-8 col-lg-9 ps-md-5 ps-0">
        <div v-if="isLoading" class="d-flex justify-content-center align-items-center" style="height: 50vh;">
          <div class="spinner-border" style="width: 3rem; height: 3rem; color: #0DBA6A;" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <div class="projects-list" v-else>
          <div
            class="project-card animate__animated animate__fadeInUp"
            :style="'animation-delay: ' + (index * 0.1) + 's'"
            v-for="(project, index) in filteredProjects"
            :key="index"
            @click="openProject(project.id, convertToSlug(project.attributes.name))"
          >
            <img
              :src="project.attributes.image_review"
              alt="image_review"
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

        <div v-if="filteredProjects.length == 0 && !isLoading">
          <div class="d-flex flex-column justify-content-center align-items-center" style="height: 50vh;">
            <lottie-player src="./search-not-found.json" background="transparent" style="max-width: 320px;"  speed="1" loop autoplay></lottie-player>
            <h2 class="text-center ts-h3">No hay proyectos que coincidan con tu búsqueda</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Projects from "@/common/project_services.js";
import SearchBarComp from "@/components/projects_view/SearchBarComp.vue";
export default {
  components: {
    SearchBarComp,
  },
  data() {
    return {
      projects: [],
      isLoading: false,
      errorEmpty: false,
    }
  },
  metaInfo: {
    title: 'Land Finder México',
    titleTemplate: '%s | Marketplace'
  },
  mounted() {
    this.getProjects();
    // scroll to top page
    window.scrollTo(0, 0);
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
              if (this.parameters.class == 'Todos') {
                return project.attributes.land_area >= this.parameters.minLand
              } else {
                return project.attributes.land_area >= this.parameters.minLand &&
                  project.attributes.class === this.parameters.class
              }
            } else {
              if (this.parameters.class == 'Todos') {
                return project.attributes.land_area >= this.parameters.minLand &&
                project.attributes.city === this.parameters.location.value
              } else {
                return project.attributes.land_area >= this.parameters.minLand &&
                project.attributes.city === this.parameters.location.value &&
                project.attributes.class === this.parameters.class
              }
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
      this.isLoading = true;
      this.errorEmpty = false;
      await Projects.getAll().then((response) => {
        this.projects = response.data.data;
        if (this.projects.length == 0) {
          this.errorEmpty = true;
        }
        this.isLoading = false;
      }).catch((error) => {
        console.log(error);
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
    
    // reset parameters
    resetParameters() {
      this.$store.commit('resetParameters');
    },

    // convert spaces into - for url
    convertToSlug(text) {
      return text
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
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
    font-size: var(--h2-font-size);
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
      flex-wrap: wrap;
      gap: 1rem;
      .option {
        border: 1px solid var(--color-black-3);
        font-size: var(--small-font-size);
        font-weight: var(--font-bold);
        color: var(--color-text-light);
        border-radius: 12px;
        padding: 0.5rem 1.5rem 0.4rem;
        transition: 0.2s ease-in-out;
        display: flex;
        align-items: flex-start;
        justify-content: center;
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
        display: flex;
        &:hover {
          background-color: var(--color-black-3);
          color: var(--color-white);
        }
      }
    }
    .button-search {
      display: flex;
      background-color: transparent;
      font-size: var(--normal-font-size);
      font-weight: var(--font-medium);
      color: var(--color-white-2);
      border-radius: 12px;
      padding: 0.5rem 1rem 0.4rem;
      transition: 0.2s ease-in-out;
      border: 1px solid var(--color-black-3);
      max-height: 40px;
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

  .upload-property-banner {
    // give me a gradian background between green and yellow
    background: linear-gradient(
      180deg,
      rgba(33, 231, 128, 0.684) 0%,
      rgba(24, 213, 255, 0.944) 100%
    );
    border-radius: 18px;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
    .text {
      h2 {
        font-size: var(--h2-font-size);
        font-weight: var(--font-medium);
        color: var(--color-white);
        margin: 0;
      }
      p {
        font-size: var(--small-font-size);
        font-weight: var(--font-medium);
        color: var(--color-white);
        margin: 0;
      }
    }
    .button-upload {
      background-color: var(--color-white);
      font-size: var(--normal-font-size);
      font-weight: var(--font-medium);
      color: var(--color-complementary-1);
      border-radius: 12px;
      padding: 0.5rem 1.5rem 0.4rem;
      transition: 0.2s ease-in-out;
      border: none;
      &:hover {
        background-color: var(--color-complementary-1);
        color: var(--color-white);
      }
    }
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
}
</style>