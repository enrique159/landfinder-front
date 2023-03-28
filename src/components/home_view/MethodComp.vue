<template>
    <div class="container">
        <div id="methodology" class="method-comp">
            <h1 class="ff-secondary ts-biggest text-center my-5">Gracias a nuestra metodología <br> ¡puedes empezar a
                desarrollar hoy!</h1>
            <p class="tc-text-light text-center mb-5">¿Cómo funciona Land Finder México?</p>
            <div class="row g-4 g-sm-5">
                <div v-for="item in methodologies" :key="item.id" class="col col-12 col-sm-4">
                    <div class="method-card px-5 d-flex flex-column justify-content-center gap-1 text-center">
                        <img :src="item.image" alt="no_img" class="mb-3">
                        <h2 class="ff-secondary text-center ts-h2">{{ item.title }}</h2>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImgMethod1 from "@/assets/lfm_method_1.svg"
import ImgMethod2 from "@/assets/lfm_method_2.svg"
import ImgMethod3 from "@/assets/lfm_method_3.svg"
import ImgMethod4 from "@/assets/lfm_method_4.svg"
import ImgMethod5 from "@/assets/lfm_method_5.svg"

export default {
    data() {
        return {
            methodologies: [
                {
                    image: ImgMethod1,
                    title: "1. Scouting de la tierra",
                    description: "Buscamos tierra, edificios o proyectos en méxico con alto potencial de desarrollo."
                },
                {
                    image: ImgMethod2,
                    title: "2. Evaluación del caso",
                    description: "Contactamos con los propietarios y solicitamos documentación para evaluar la tierra."
                },
                {
                    image: ImgMethod3,
                    title: "3. Análisis del negocio",
                    description: "Aportamos valor a la tierra con un análisis comercial, legal, técnico y financiero."
                },
                {
                    image: ImgMethod4,
                    title: "4. Expediente del predio",
                    description: "Creamos una serie de documentos y recursos multimedia para publicitar la propiedad."
                },
                {
                    image: ImgMethod5,
                    title: "5. Alta en LFM+",
                    description: "La propiedad se publica junto con el análisis en el sitio para ser elegible a recibir inversión."
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.method-card {
    height: 280px;
    border-radius: 28px;
    background-color: var(--color-black);
    img {
        height: 64px;
    }
}
</style>