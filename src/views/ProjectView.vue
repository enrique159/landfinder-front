<template>
  <div id="project-details" class="container px-4 px-md-0">
    <div v-if="isLoading" class="d-flex justify-content-center align-items-center" style="height: 50vh;">
      <div class="spinner-border" style="width: 3rem; height: 3rem; color: #0DBA6A;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <Alerta404Comp v-if="errorStatus" :error="error" />
    <div v-if="status200">
      <ImagenesComp :imagenCover="project.attributes.image_cover" :imagenes="project.attributes.images" />
      <div class="row">
        <div class="col col-12">
          <!-- NAME & ADDRESS PROJECT -->
          <div class="title-project d-flex justify-content-between">
            <h1 class="ff-secondary ts-biggest">{{ project.attributes.name }}</h1>
            <div v-if="logged">
              <button class="btn-copy mx-3" @click="copyPath">
                <i v-if="!copySucceeded" class="bi bi-files"></i>
                <i v-if="copySucceeded" class="bi bi-check-lg"></i>
              </button>

              <button class="btn-remove" @click="removeFavourites(project.id)" :disabled="saving"
                :class="{ 'disabled': saving }" v-if="isProjectInFavourites">
                <i class="bi bi-bookmark-fill me-1"></i>
                <span v-if="saving">Removiendo...</span>
                <span v-else>Remover de guardados</span>
              </button>

              <button v-else @click="addFavourites(project.id)" :disabled="saving" :class="{ 'disabled': saving }">
                <i class="bi bi-bookmark me-1"></i>
                <span v-if="saving">Guardando...</span>
                <span v-else>Guardar</span>
              </button>

            </div>
            <div v-else></div>
          </div>
          <div class="pb-5">
            <a class="address" target="_blank" :href="mapUrl">
              <i class="bi bi-geo-alt-fill"></i> {{ projectAddress }}
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col col-12">
          <!-- PROJECT DETAILS -->
          <div class="divider mb-5"></div>
          <DetallesComp :project="project.attributes" />
          <div class="divider my-5"></div>
        </div>
      </div>
      <div class="row">
        <div class="col col-12 col-md-7 col-lg-8 col-xl-9">
          <!-- DESCRIPTION -->
          <div class="d-flex justify-content-between align-items-end mb-4">
            <h3 class="ff-secondary">Detalles de la propiedad</h3>
            <a class="view-more-link" :href="project.attributes.id_company.data.attributes.contact_link"
              target="_blank">Ver más información</a>
          </div>
          <p class="comments-project mb-5">
            {{ project.attributes.comments }}
          </p>
          <DetailAcordionComp v-if="logged"/>
          <div class="divider mb-5"></div>
          <!-- MAP LOCATION -->
          <div class="d-flex justify-content-between align-items-end mb-5">
            <h3 class="ff-secondary">Ubicado en {{ projectShortAddress }}</h3>
            <a class="view-more-link" :href="mapUrl" target="_blank">Ver ubicación en maps</a>
          </div>
          <MapaComp :locationProp="projectLocation" />
          <div class="divider my-5"></div>
          <!-- PROYECTOS SIMILARES -->
          <!--  <div class="d-flex similar-projects">
            <img :src="
              this.project.attributes.id_company.data.attributes.logo_image
            " alt="logo-company" class="company-logo me-3" />
            <div>
              <h3>
                Otros projectos de
                {{ this.project.attributes.id_company.data.attributes.name }}
              </h3>
              <p>
                {{ this.project.attributes.id_company.data.attributes.description }}
              </p>
            </div>
          </div> -->
          <h3 class="ff-secondary mb-5">Descubre otras propiedades que <br> te podrían interesar</h3>
          <SimilaresComp :similarProjects="similarProjects" />
          <div v-if="!logged" class="divider my-5"></div>
        </div>
        <div class="col col-12 col-md-5 col-lg-4 col-xl-3 px-4 px-md-0 ps-md-3">
          <!-- FORMULARIO -->
          <FormularioComp :name_project="this.project.attributes.name" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <RegisterBannerComp class="mt-5" v-if="!logged" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alerta404Comp from "@/components/project_view/Alerta404_Comp.vue";
import ImagenesComp from "@/components/project_view/Imagenes_Comp.vue";
import DetallesComp from "@/components/project_view/Detalles_Comp.vue";
import DetailAcordionComp from '@/components/project_view/DetailAcordionComp.vue'
import MapaComp from "@/components/project_view/Mapa_Comp.vue";
import SimilaresComp from "@/components/project_view/Similares_Comp.vue";
import FormularioComp from "@/components/project_view/Formulario_Comp.vue";
import RegisterBannerComp from "@/components/project_view/RegisterBannerComp.vue";
import Project from "@/common/project_services.js";
import UserServices from "@/services/UserServices";
import ToastMixin from "@/mixins/ToastMixin.vue";
import store from "@/store";
import { isLoggedIn, setUser } from "@/auth";
export default {
  name: "ProjectView",
  components: {
    Alerta404Comp,
    ImagenesComp,
    DetallesComp,
    DetailAcordionComp,
    MapaComp,
    SimilaresComp,
    FormularioComp,
    RegisterBannerComp
  },
  mixins: [ToastMixin],
  data() {
    return {
      project: {},
      similarProjects: [],
      errorStatus: false,
      status200: false,
      copySucceeded: false,
      lat: 0,
      lng: 0,
      error: {
        status: "",
        message: "",
      },
      isLoading: false,
      saving: false,
    };
  },
  metaInfo: {
    title: 'Land Finder México',
    titleTemplate: `%s | Propiedad`
  },
  mounted() {
    this.getProject();
    window.scrollTo(0, 0);
  },
  created() {
    //console.log(this.$router.currentRoute.fullPath)
  },
  computed: {
    projectAddress() {
      return (
        this.project.attributes.street_num +
        ", " +
        this.project.attributes.hood +
        ", " +
        this.project.attributes.city +
        ", " +
        this.project.attributes.estate +
        ", " +
        this.project.attributes.country
      );
    },
    projectShortAddress() {
      return (
        this.project.attributes.hood +
        ", " +
        this.project.attributes.city +
        ", " +
        this.project.attributes.estate +
        ", " +
        this.project.attributes.country
      );
    },
    projectName() {
      return this.project.attributes.name || "";
    },
    projectLocation() {
      return {
        lat: this.lat,
        lng: this.lng,
      };
    },
    isProjectInFavourites() {
      return store.getters.getSavedProjects.includes(this.project.id);
    },
    mapUrl() {
      return `https://www.google.com/maps/?q=${this.lat},${this.lng}`
      //return `https://www.google.com.mx/maps/place/24%C2%B008'24.8%22N+110%C2%B018'49.6%22W/@${this.lat},${this.lng},17z/`
    },
    logged() {
      return isLoggedIn();
    }
  },
  methods: {
    async getProject() {
      if (this.$route.params.id) {
        this.isLoading = true;
        const project = await Project.getById(this.$route.params.id);
        if (project) {
          if (project.status == 200) {
            this.status200 = true;
            this.project = project.data.data;
            this.lat = this.project.attributes.latitude;
            this.lng = this.project.attributes.longitude;
            this.getSimilarProjects(this.project.attributes.id_company.data.id);
          } else {
            this.errorStatus = true;
            this.error.status = project.status;
            this.error.message = project.statusText;
          }
        } else {
          this.errorStatus = true;
          this.error.status = "500";
          this.error.message = "Internal Server Error";
        }
        this.isLoading = false;
      } else {
        this.errorStatus = true;
        this.error.status = "No hay proyecto";
        this.error.message =
          "Para ver un proyecto puedes ir a la sección de Buscar.";
        console.log("No hay id");
      }
    },
    async getSimilarProjects(idCompany) {
      const projects = await Project.getByCompany(idCompany);
      if (projects.status == 200) {
        this.similarProjects = projects.data.data;
        this.similarProjects.splice(
          this.similarProjects.map((item) => item.id).indexOf(this.project.id),
          1
        );
      } else {
        console.log("Error al obtener los proyectos similares");
      }
    },
    async addFavourites(idProject) {
      if (this.logged) {
        this.saving = true;
        await UserServices.updateUser(store.getters.getUser.id, { favourites: [...store.getters.getSavedProjects, idProject], })
          .then((res) => {
            if (res.status == 200) {
              setUser(res.data);
            } else {
              this.showToast('error', 'Error al agregar a guardados')
            }
          })
          .catch((err) => {
            console.log(err)
            this.showToast('error', 'Error al agregar a guardados')
          })
          .finally(() => {
            this.saving = false;
          });
      } else {
        this.showToast('info', 'Para agregar a guardados debes iniciar sesión')
      }
    },
    async removeFavourites(idProject) {
      if (this.logged) {
        this.saving = true;
        const favourites = store.getters.getSavedProjects.filter((project) => {
          return project !== idProject;
        })
        await UserServices.updateUser(store.getters.getUser.id, { favourites: [...favourites] })
          .then((res) => {
            if (res.status == 200) {
              setUser(res.data);
            } else {
              this.showToast('error', 'Error al eliminar de guardados')
            }
          })
          .catch((err) => {
            console.log(err)
            this.showToast('error', 'Error al eliminar de guardados')
          })
          .finally(() => {
            this.saving = false;
          });
      } else {
        this.showToast('info', 'Para eliminar de guardados debes iniciar sesión')
      }
    },
    copyPath() {
      var base_url = window.location.origin;
      this.$copyText(base_url + this.$router.currentRoute.fullPath).then((e) => {
        this.copySucceeded = true;
      }, (e) => {
        this.copySucceeded = false;
      })
    }
  },
};
</script>

<style lang="scss" scoped>
#project-details {
  min-height: 60vh;

  .title-project {
    button {
      height: fit-content;
      border: 1px solid var(--color-white-2);
      background-color: transparent;
      font-size: var(--small-font-size);
      font-weight: var(--font-medium);
      color: var(--color-white-2);
      text-decoration: none;
      padding: 0.5rem 1.5rem;
      border-radius: 2rem;
      transition: 0.2s ease-in-out;

      &:hover {
        background-color: rgba($color: #0dba6a, $alpha: 0.2);
        color: var(--color-complementary-1);
        border: 1px solid var(--color-complementary-1);

      }
    }

    .btn-copy {
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%;
      padding: 0;
    }

    .btn-remove {
      border: none;
      background-color: transparent;
      color: var(--color-white-2);
      border: 1px solid var(--color-white-2);
    }

    .disabled {
      opacity: 0.5;
    }
  }

  .address {
    color: var(--color-white-2);

    &:hover {
      color: var(--color-text);
    }
  }

  .view-more-link {
    color: var(--color-complementary-1);
    text-decoration: underline;
    font-size: var(--smaller-font-size);
    font-weight: var(--font-medium);
    font-style: italic;
    transition: 0.2s ease-in-out;

    &:hover {
      color: var(--color-complementary-1-dark);
    }
  }

  .comments-project {
    color: var(--color-text-light);
    font-size: var(--normal-font-size);
    line-height: 1.5;
  }

  .similar-projects {
    .company-logo {
      width: 76px;
      height: 76px;
      border-radius: 12px;
      object-fit: cover;
    }

    h3 {
      font-size: var(--h3-font-size);
      font-weight: var(--font-semi-bold);
    }

    p {
      font-size: var(--small-font-size);
      font-weight: var(--font-regular);
      color: var(--color-text-light);
    }
  }
}
</style>