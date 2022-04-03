<template>
  <div id="project-details" class="container">
    <Alerta404Comp v-if="errorStatus" :error="error"/>
    <div v-if="status200">
      <ImagenesComp :imagenCover="project.attributes.image_cover" :imagenes="project.attributes.images"/>
      <h1>{{ project.attributes.name }}</h1>
    </div>
  </div>
</template>

<script>
import Alerta404Comp from '@/components/project_view/Alerta404_Comp.vue'
import ImagenesComp from '@/components/project_view/Imagenes_Comp.vue'
import Project from '@/common/project_services.js';
export default {
  name: "ProjectView",
  components: {
    Alerta404Comp,
    ImagenesComp
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
}
</style>