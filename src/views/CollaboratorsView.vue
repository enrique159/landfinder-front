<template>
  <div>
    <HeaderCollaboratorsCompVue />
    <CertificateCollaboratorsComp />
    <CollaboratorsTableComp/>
  </div>
</template>

<script>
import HeaderCollaboratorsCompVue from '@/components/collaborators/HeaderCollaboratorsComp.vue'
import CertificateCollaboratorsComp from '@/components/collaborators/CertificateCollaboratorsComp.vue';
import CollaboratorsTableComp from '@/components/collaborators/CollaboratorsTableComp.vue';

export default {
  components: {
    HeaderCollaboratorsCompVue,
    CertificateCollaboratorsComp,
    CollaboratorsTableComp
  }
}
</script>

<style></style>