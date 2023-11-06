<template>
    <div class="container p-5 certificate-comp">
        <div class="row">
            <div class="col col-12 col-sm-4">
                <img class="certificate-img" src="@/assets/generic.png" alt="no_img">
            </div>
            <div class="col ms-5">
                <span class="tw-medium d-block mb-3">Nuestros servicios</span>
                <h1 class="ff-secondary ts-h1 mb-5">Oficina Inmobiliaria LFM</h1>
                <p class="tc-text-light mb-5">En Land Finder Mexico nos comprometemos con el desarrollo eficiente y
                    constante del sector inmobiliario por ello nuestra oficina brinda una serie de servicios relacionados al
                    desarrollo y sus procesos.
                </p>
                <ul>
                    <li class="tc-text-light mb-3"><span>Aportación de tierra a proyectos</span></li>
                    <li class="tc-text-light mb-3"><span>Factibilidad comercial</span></li>
                    <li class="tc-text-light mb-3"><span>Estructuración financiera</span></li>
                    <li class="tc-text-light mb-3"><span>Financiamiento de proyectos</span></li>
                    <li class="tc-text-light mb-4"><span>Consultoría inmobiliaria</span></li>
                </ul>
                <button class="button-begin-collab" @click="goTo()">
                    <span>Contáctanos</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goTo() {
            this.$router.push({ name: "contact" });
        }
    }
}
</script>

<style lang="scss" scoped>
.certificate-comp {
    padding: 3rem 0;

    .certificate-img {
        object-fit: contain;
    }

    ul {
        list-style: none;
        padding-left: 0;

        li {
            position: relative;

            span {
                margin-left: 3rem;
            }

            &::before {
                position: absolute;
                top: 0.1rem;
                content: url('@/assets/bullet.svg');
            }
        }
    }

    .button-begin-collab {
        height: 38px;
        background: linear-gradient(90deg, var(--color-complementary-2), #101010);
        color: var(--color-text);
        padding: 0.2rem 1.5rem;
        border-radius: 2rem;
        font-size: var(--small-font-size);
        font-weight: var(--font-bold);
        position: relative;

        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: var(--color-complementary-2);
            border-radius: 2rem;
            transition: var(--transition-normal);
            opacity: 0;
        }

        &:hover {
            &::before {
                opacity: 1;
            }
        }

        span {
            position: relative;
            z-index: 2;
        }

        i {
            display: none;
        }
    }

}
</style>