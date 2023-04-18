<template>
    <div class="banner-collaborators d-flex flex-column justify-content-center align-items-center">
        <h1 class="ff-secondary ts-biggest mb-4 text-contact">¿Eres profesional inmobiliario <br class="d-none d-sm-block"> y quieres ser colaborador LFM?</h1>
        <button class="button-contact" @click="toContact()">
            <span> Ponerme en contacto</span>
        </button>
    </div>
</template>

<script>
export default {
    methods:{
        toContact(){
            this.$router.push("/contacto")
        }
    }
}
</script>

<style lang="scss" scoped>
.banner-collaborators {
    width: 100%;
    height: 500px;
    background-image: url('@/assets/collab-contact-img.jpg');
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

    .text-contact {
        position: relative;
        z-index: 1;
        height: 150px;
    }
}

.button-contact {
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
</style>