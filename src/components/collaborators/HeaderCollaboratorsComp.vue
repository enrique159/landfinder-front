<template>
    <div>
        <div class="container py-5">
            <h1 class="ff-secondary ts-biggest text-center mb-4">Colaboramos para hacer <br class="d-none d-sm-block"> más y
                mejores negocios
            </h1>
            <p class="text-center tc-text-light ts-normal mb-5">El programa
                <span class="tw-bold" style="font-style: italic;">Colaboradores Land Finder </span> capacita y certifica el
                conocimiento <br class="d-none d-sm-block"> en materia de desarrollo inmobiliario y aportaciones de los
                profesionales inobiliarios.
            </p>
            <div class="d-flex justify-content-center gap-3 mb-5">
                <button id="#buttonCertificate" class="button-certificate" ref="buttonCertificate" @click="() => { }">
                    <span>Certificarme</span>
                    <i class="bi bi-box-arrow-in-right"></i>
                </button>

                <button class="button-verifyCert" @click="goTo('/signup', true)">
                    <span>Verificar matricula</span>
                    <i class="bi bi-person-plus-fill"></i>
                </button>
            </div>
        </div>

        <div class="banner-collaborators d-flex justify-content-center align-items-center">
            <img class="logo-collaborators" src="@/assets/logo-colaboradores.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {

    mounted() {
        const buttonCertificate = this.$refs.buttonCertificate;
        if (buttonCertificate) {
            buttonCertificate.addEventListener('mousemove', this.handleOnMouseMove);
        }
    },
    beforeUnmount() {
        const buttonCertificate = this.$refs.buttonCertificate;
        if (buttonCertificate) {
            buttonCertificate.removeEventListener('mousemove', this.handleOnMouseMove);
        }
    },
    methods: {
        handleOnMouseMove(event) {
            const { currentTarget: target } = event;
            const rect = target.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;

            target.style.setProperty('--mouse-x', `${x}px`);
            target.style.setProperty('--mouse-y', `${y}px`);
        }
    }
}
</script>

<style lang="scss" scoped>
.button-certificate {
    height: 38px;
    border: 2px solid #969696;
    background: transparent;
    color: var(--color-text);
    padding: 0.3rem 1rem;
    border-radius: 2rem;
    position: relative;

    span {
        font-size: var(--small-font-size);
        font-weight: var(--font-bold);
    }

    &::before {
        background: radial-gradient(200px circle at var(--mouse-x) var(--mouse-y),
                rgba(255, 255, 255, 0.2),
                transparent 40%);
        border-radius: inherit;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.3s;
        top: 0;
        left: 0;
        content: '';
        z-index: 2;
    }

    &:hover::before {
        opacity: 1;
    }

    i {
        display: none;
    }
}

.button-verifyCert {
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

.banner-collaborators{
    width: 100%;
    height: 500px;
    background-image: url('@/assets/collaborators-cover.jpg');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #1010106c;
    }
    .logo-collaborators{
        position: relative; 
        z-index: 1;
        height: 150px;
    }
}
</style>