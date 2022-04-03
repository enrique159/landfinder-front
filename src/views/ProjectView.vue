<template>
  <div id="project-details" class="container px-4 px-md-0">
    <Alerta404Comp v-if="errorStatus" :error="error" />
    <div v-if="status200">
      <ImagenesComp
        :imagenCover="project.attributes.image_cover"
        :imagenes="project.attributes.images"
      />
      <div class="row">
        <div class="col col-12 col-md-7 col-lg-8 col-xl-9">
          <!-- NAME & ADDRESS PROJECT -->
          <div class="title-project d-flex justify-content-between flex-wrap">
            <h1>{{ project.attributes.name }}</h1>
            <a class="d-none d-lg-block" href="#map_project">Ver en el mapa</a>
          </div>
          <p class="address mb-5">
            <i class="bi bi-geo-alt-fill"></i> {{ projectAddress }}
          </p>
          <!-- PROJECT DETAILS -->
          <div class="divider mb-4"></div>
          <DetallesComp :project="project.attributes" />
          <div class="divider mb-5"></div>
          <!-- COMMENTS -->
          <div class="d-flex justify-content-between align-items-end mb-2">
            <h5 class="m-0">Comentarios del desarrollador:</h5>
            <a
              class="company-link"
              :href="project.attributes.id_company.data.attributes.contact_link"
              target="_blank"
              >{{ project.attributes.id_company.data.attributes.name }}</a
            >
          </div>
          <p class="comments-project mb-5">
            {{ project.attributes.comments }}
          </p>
          <div class="divider mb-5"></div>
          <!-- MAP LOCATION -->
          <MapaComp :locationProp="projectLocation"/>
           <div class="divider my-5"></div>
        </div>
        <div class="col col-12 col-md-5 col-lg-4 col-xl-3 px-4 px-md-0 ps-md-3">
          <!-- FORMULARIO -->
          <FormularioComp />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alerta404Comp from "@/components/project_view/Alerta404_Comp.vue";
import ImagenesComp from "@/components/project_view/Imagenes_Comp.vue";
import DetallesComp from "@/components/project_view/Detalles_Comp.vue";
import MapaComp from "@/components/project_view/Mapa_Comp.vue";
import FormularioComp from "@/components/project_view/Formulario_Comp.vue";
import Project from "@/common/project_services.js";
export default {
  name: "ProjectView",
  components: {
    Alerta404Comp,
    ImagenesComp,
    DetallesComp,
    MapaComp,
    FormularioComp,
  },
  data() {
    return {
      project: {},
      errorStatus: false,
      status200: false,
      lat: 0,
      lng: 0,
      error: {
        status: "",
        message: "",
      },
    };
  },
  mounted() {
    this.getProject();
    console.log(this.projectLocation)
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
    projectLocation() {
      return {
        lat: this.lat,
        lng: this.lng,
      };
    },
  },
  methods: {
    async getProject() {
      if (this.$route.params.id) {
        const project = await Project.getById(this.$route.params.id);
        if (project) {
          if (project.status == 200) {
            this.status200 = true;
            this.project = project.data.data;
            this.lat = this.project.attributes.latitude;
            this.lng = this.project.attributes.longitude;
          } else {
            console.log(project);
            this.errorStatus = true;
            this.error.status = project.status;
            this.error.message = project.statusText;
          }
        } else {
          this.errorStatus = true;
          this.error.status = "500";
          this.error.message = "Internal Server Error";
        }
      } else {
        this.errorStatus = true;
        this.error.status = "No hay proyecto";
        this.error.message =
          "Para ver un proyecto puedes ir a la sección de Buscar.";
        console.log("No hay id");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#project-details {
  min-height: 60vh;

  .title-project {
    h1 {
      font-size: var(--h2-font-size);
      font-weight: var(--font-semi-bold);
      margin-bottom: 1rem;
    }
    a {
      height: fit-content;
      border: 1px solid var(--color-complementary-1);
      font-size: var(--small-font-size);
      font-weight: var(--font-medium);
      color: var(--color-complementary-1);
      text-decoration: none;
      padding: 0.5rem 1.5rem;
      border-radius: 12px;
      transition: 0.2s ease-in-out;
      &:hover {
        background-color: rgba($color: #0dba6a, $alpha: 0.2);
      }
    }
  }
  .address {
    color: var(--color-text-light);
  }
  .company-link {
    color: #eab60e;
    text-decoration: none;
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    transition: 0.2s ease-in-out;
    &:hover {
      color: #fecd2d;
    }
  }
  .comments-project {
    color: var(--color-text-light);
    font-size: var(--normal-font-size);
    line-height: 1.5;
  }
}
</style>