<template>
        <div class="register-banner container d-flex flex-column justify-content-center">
            <h1 class="ff-secondary ts-biggest text-center mb-4">Registrate para ver más<br class="d-none d-sm-block">
                información de esta propiedad
            </h1>
            <div class="d-flex justify-content-center gap-3 mb-5">

                <button class="button-register" @click="() => { }">
                    <span> Registrarme gratis</span>
                </button>

                <button id="#buttonBackHome" class="button-back-home" ref="buttonBackHome" @click="() => { }">
                    <span>Volver al inicio</span>
                </button>

            </div>
        </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
export default {
    components: {
        Parallax
    },
    mounted() {
        const buttonBackHome = this.$refs.buttonBackHome;
        if (buttonBackHome) {
            buttonBackHome.addEventListener('mousemove', this.handleOnMouseMove);
        }
    },
    beforeUnmount() {
        const buttonBackHome = this.$refs.buttonBackHome;
        if (buttonBackHome) {
            buttonBackHome.removeEventListener('mousemove', this.handleOnMouseMove);
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
.register-banner {

    background-image: url('@/assets/register-banner-projectview.png');
    height: 350px;

    .button-back-home {
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

    .button-register {
        height: 38px;
        background: linear-gradient(90deg, var(--color-complementary-1), #101010);
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
            background: var(--color-complementary-1);
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

    .banner-collaborators {
        width: 100%;
        height: 500px;
        background-image: url('@/assets/collaborators-cover.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #1010106c;
        }

        .logo-collaborators {
            position: relative;
            z-index: 1;
            height: 150px;
        }
    }

}
</style>