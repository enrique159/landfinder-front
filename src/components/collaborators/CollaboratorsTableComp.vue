<template>
    <div class="container my-5">
        <h1 class="ff-secondary text-center mb-5">Padrón de colaboradores Land Finder 2023</h1>

        <div class="d-flex align-items-center justify-content-center">
            <div class="search-input">
                <div class="d-flex surface-input p-relative">
                    <input type="text" placeholder="Escribe aquí un número de matrícula, nombre o empresa"
                        v-model="minLand" />
                </div>
            </div>

            <button class="button-search" @click="() => { }">
                <span>Buscar</span>
            </button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            Headers: [
                'Folio',
                'Nombre',
                'Empresa',
                'Ciudad',
                'Certificacion',
                'Mas'
            ],
            collaboratorsList: [
                {
                    folio: "WH-12613-19302",
                    name: "Juan",
                    company: "Welcome Home Baja",
                    city: "La Paz",
                    certificate: "CCLFM2023",
                }
            ]
        };
    },
}
</script>

<style lang="scss" scoped>
.search-input {
    text-align: left;
    padding: 0 1.5rem;
    width: 80%;
    input {
        width: 100%;
        background-color: #efefef;
        color: var(--color-text-dark);
        font-weight: var(--font-medium);
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
        align-items: center;
        padding: .8rem 1rem;

        &::placeholder {
            color: var(--color-text-light);
        }

        &:focus {
            outline: none;
        }
    }

    span {
        color: var(--color-text-dark);
        font-weight: var(--font-semi-bold);
    }

    h3 {
        font-size: var(--big-font-size);
        font-weight: var(--font-semi-bold);
        color: var(--color-text-dark);
        margin: 0 0 6px;
        padding-left: 4px;
    }
}


.button-search {
    height: 42px;
    background: linear-gradient(90deg, var(--color-complementary-1), #101010);
    color: var(--color-text);
    padding: 0.2rem 2.5rem;
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