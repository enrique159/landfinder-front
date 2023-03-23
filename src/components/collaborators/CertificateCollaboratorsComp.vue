<template>
    <div class="container certificate-comp">
        <div class="row">
            <div class="col col-12 col-sm-4">
                <img class="certificate-img" src="@/assets/certificado.png" alt="no_img">
            </div>
            <div class="col ms-5">
                <p class="mb-5 mt-4 ts-normal">Certificado vigente</p>
                <h1 class="ff-secondary ts-biggest mb-5">CCLFM 2023</h1>
                <p class="tc-text-light mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu.
                </p>
                <ul>
                    <li class="tc-text-light mb-4"><span>Empresas de corretaje en México</span></li>
                    <li class="tc-text-light mb-4"><span>Asesores inmobiliarios independientres</span></li>
                    <li class="tc-text-light mb-5"><span>Profesionales de la industria</span></li>
                </ul>
                <button class="button-begin-collab" @click="() => { }">
                    <span>Empezar a colaborar hoy</span>
                    <i class="bi bi-person-plus-fill"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.certificate-comp {
    padding: 5rem 0;

    ul {
        list-style: none;
        padding-left: 0;

        li {
            position: relative;

            span{
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