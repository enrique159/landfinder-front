<template>
  <div class="similares-comp py-3 mb-5">
    <div class="projects-list pb-3">
      <div
        class="project-card"
        v-for="(project, index) in similarProjects"
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
  </div>
</template>

<script>
export default {
  name: "SimilaresComp",
  props: ["similarProjects"],
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    openProject(id) {
      console.log('Si se presiona')
      window.open('/project/'+id, "_self")
      // this.$router.push({
      //   name: "project",
      //   params: {
      //     id: id,
      //   },
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.similares-comp {
  font-size: 2rem;

  .projects-list {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    column-gap: 1rem;
    .project-card {
      width: 240px;
      min-width: 240px;
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
  }
}
</style>