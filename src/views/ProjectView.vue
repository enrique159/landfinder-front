<template>
  <div id="project-details" class="container">
    <Alerta404Comp v-if="errorStatus" :error="error"/>
    <div v-if="status200">
      <ImagenesComp :imagenCover="project.attributes.image_cover" :imagenes="project.attributes.images"/>
      <div class="row">
        <div class="col col-9">
          <div class="title-project d-flex justify-content-between flex-wrap">
            <h1>{{ project.attributes.name }}</h1>
            <a href="">Ver en el mapa</a>
          </div>
          <p class="address"><i class="bi bi-geo-alt-fill"></i> {{ projectAddress}}</p>
        </div>
        <div class="col col-3 px-0 ps-3">
          <!-- FORMULARIO -->
          <FormularioComp />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alerta404Comp from '@/components/project_view/Alerta404_Comp.vue'
import ImagenesComp from '@/components/project_view/Imagenes_Comp.vue'
import FormularioComp from '@/components/project_view/Formulario_Comp.vue'
import Project from '@/common/project_services.js';
export default {
  name: "ProjectView",
  components: {
    Alerta404Comp,
    ImagenesComp,
    FormularioComp
  },
  data() {
    return {
      project: {},
      errorStatus: false,
      status200: false,
      error: {
        status: '',
        message: '',
      },
    }
  },
  mounted() {
    this.getProject();
  },
  computed: {
    projectAddress() {
      return this.project.attributes.street_num + ', ' + this.project.attributes.hood + ', ' + this.project.attributes.city + ', ' + this.project.attributes.estate + ', ' + this.project.attributes.country;
    }
  },
  methods: {
    async getProject() {
      if(this.$route.params.id) {
        const project = await Project.getById(this.$route.params.id);
        if(project) {
          if (project.status == 200) {
            this.status200 = true;
            this.project = project.data.data;
          } else {
            console.log(project);
            this.errorStatus = true;
            this.error.status = project.status;
            this.error.message = project.statusText;
          }
        } else {
          this.errorStatus = true;
          this.error.status = '500';
          this.error.message = 'Internal Server Error';
        }
      } else {
        this.errorStatus = true;
        this.error.status = 'No hay proyecto';
        this.error.message = 'Para ver un proyecto puedes ir a la sección de Buscar.';
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
        background-color: rgba($color: #0DBA6A, $alpha: 0.2);
      }
    }
  }
  .address {
    color: var(--color-text-light);
  }
}
</style>