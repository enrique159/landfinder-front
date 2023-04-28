<template>
  <div>
    <HeaderCollaboratorsCompVue />
    <CertificateCollaboratorsComp />
    <CollaboratorsTableComp/>
    <ContactBanner/>
  </div>
</template>

<script>
import HeaderCollaboratorsCompVue from '@/components/collaborators/HeaderCollaboratorsComp.vue'
import CertificateCollaboratorsComp from '@/components/collaborators/CertificateCollaboratorsComp.vue';
import CollaboratorsTableComp from '@/components/collaborators/CollaboratorsTableComp.vue';
import ContactBanner from '@/components/collaborators/ContactBannerComp.vue';
export default {
  components: {
    HeaderCollaboratorsCompVue,
    CertificateCollaboratorsComp,
    CollaboratorsTableComp,
    ContactBanner
  },
  metaInfo: {
    title: "Land Finder México",
    titleTemplate: "%s | Colaboradores",
  },
  mounted() {
    window.scrollTo(0, 0);
  },
}
</script>

<style></style>