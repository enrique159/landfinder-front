<template>
  <div class="saved-projects-view container">
    <div class="px-2 px-sm-5">
      <h1>Mis guardados</h1>
      <p class="tc-text-light">Aquí puedes ver las propiedades que hayas guardado para poder acceder a su información más rápido.</p>
    </div>

    <div v-if="isLoading || projectsLoaded" class="d-flex justify-content-center align-items-center" style="height: 50vh;">
      <div class="spinner-border" style="width: 3rem; height: 3rem; color: #0DBA6A;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="saved-projects px-2 px-sm-5">
      <div 
        class="project-card  animate__animated animate__fadeInUp" 
        :style="'animation-delay: ' + (index * 0.1) + 's'"
        v-for="(project, index) in savedProjects"
        :key="index"
      >
        <img
          :src="project.attributes.image_review"
          alt="image_review"
        />
        <div class="bloc-shadow" @click.self="openProject(project.id, convertToSlug(project.attributes.name))"></div>
        <button class="position-relative" @click="removeFavourite(project.id)">
          <i class="bi bi-bookmark-fill tc-complementary-1"></i>
        </button>
        <div>
          <h2 class="position-relative" @click="openProject(project.id, convertToSlug(project.attributes.name))">{{ project.attributes.name }}</h2>
          <p class="position-relative">
            {{ project.attributes.hood }}, {{ project.attributes.estate }}
          </p>
        </div>
      </div>
    </div>

    <div v-if="savedProjects.length == 0 && !isLoading && !projectsLoaded">
      <div class="d-flex flex-column justify-content-center align-items-center" style="height: 50vh;">
        <lottie-player src="./search-not-found.json" background="transparent" style="max-width: 320px;"  speed="1" loop autoplay></lottie-player>
        <h2 class="text-center ts-h3">Parece que no tienes propiedades guardadas</h2>
      </div>
    </div>
  </div>
</template>

<script>
import UserServices from '@/services/UserServices';
import Projects from "@/common/project_services.js";
import { setUser } from "@/auth";
import store from "@/store";
import ToastMixin from "@/mixins/ToastMixin";
export default {
  data() {
    return {
      isLoading: false,
      projectsLoaded: false,
      projects: [],
    }
  },
  mixins: [ToastMixin],
  created() {
    this.getMe();
    this.getProjects();
  },
  computed: {
    savedProjects() {
      const saved = this.projects.filter((project) => {
        return store.getters.getSavedProjects.includes(project.id);
      })
      return saved || [];
    }
  },
  methods: {
    async getMe() {
      this.isLoading = true;
      try {
        const response = await UserServices.me();
        if (response.status === 200) {
          setUser(response.data);
        } else {
          console.log(response);
          this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')
          this.isLoading = false;
        }
      } catch (error) {
        console.log(error);
        this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')
        this.isLoading = false; 
      }
      this.isLoading = false;
    },
    async getProjects() {
      this.isLoading = true;
      this.projectsLoaded = true;
      await Projects.getAll().then((response) => {
        this.projects = response.data.data;
      }).catch((error) => {
        console.log(error);
        this.showToast('error', 'Oh no! No pudimos obtener las propiedades.')
      }).finally(() => {
        this.isLoading = false;
        this.projectsLoaded = false;
      });
    },

    async removeFavourite(idProject) {
      this.isLoading = true;
      try {
        const favourites = store.getters.getSavedProjects.filter((project) => {
          return project !== idProject;
        })
        const response = await UserServices.updateUser(store.getters.getUser.id, { favourites: [...favourites]})
        if (response.status === 200) {
          setUser(response.data);
          this.showToast('success', 'Propiedad removida de tus guardados.')
        } else {
          console.log(response);
          this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')
          this.isLoading = false;
        }
      } catch (error) {
        console.log(error);
        this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')
        this.isLoading = false; 
      }
      this.isLoading = false;
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
  },
}
</script>

<style lang="scss" scoped>
.saved-projects-view {
  height: 100vh;

  .saved-projects {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-top: 2rem;

    .project-card {
      aspect-ratio: 4/3;
      background-color: var(--color-black-3);
      position: relative;
      background-color: var(--color-text-dark);
      border-radius: 18px;
      clip-path: border-box;
      padding: 12px 12px 24px 24px;
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
      button {
        margin-left: auto;
        min-width: 32px;
        min-height: 32px;
        border: none;
        background-color: rgba(0, 0, 0, 0.184);
        font-size: var(--normal-font-size);
        font-weight: var(--font-semi-bold);
        display: grid;
        place-items: center;
        border-radius: 50%;
        transition: var(--transition-fast);
        &:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
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