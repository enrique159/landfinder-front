<template>
    <div class="collab-table container my-5">
        <h1 class="ff-secondary text-center mb-5">Padrón de colaboradores Land Finder 2023</h1>

        <div class="d-flex align-items-center justify-content-center">
            <div class="search-input">
                <div class="d-flex surface-input p-relative">
                    <input type="text" placeholder="Escribe aquí un número de matrícula, nombre o empresa"
                        v-model="searchData" @keyup="search()" />
                </div>
            </div>

            <button class="button-search" @click="search">
                <span>Buscar</span>
            </button>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th class="tc-text-light" v-for="item in headers" :key="item.id" scope="col">{{ item }}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="tc-text" v-for="item in this.filterData" :key="item.attributes.folio">
                    <th class="py-4" scope="row">{{ item.attributes.folio }}</th>
                    <td class="py-4">{{ item.attributes.name }} {{ item.attributes.lastname }}</td>
                    <td class="py-4">{{ item.attributes.company }}</td>
                    <td class="py-4">{{ item.attributes.city }}</td>
                    <td class="py-4">{{ item.attributes.certificate }}</td>
                    <td class="py-4"><button class="button-more"></button></td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import CollaboratorServices from '@/services/CollaboratorServices';

export default {
    data() {
        return {
            searchData: "",
            filterData: [],
            headers: [
                'Folio',
                'Nombre',
                'Empresa',
                'Ciudad',
                'Certificacion',
                'Mas'
            ],
            collaboratorsList: [],
        };
    },
    async created() {
        this.getCollaborators();
    },
    computed: {
        query() {
            return this.searchData ? `folio=${this.searchData}?name=${this.searchData}?company=${this.searchData}` : "";
        }
    },
    methods: {
        search() {
            this.filterData = this.collaboratorsList.filter((item) => {
                const fullname = item.attributes.name + ' ' + item.attributes.lastname;
                return fullname.toLowerCase().includes(this.searchData.toLowerCase()) ||
                    item.attributes.folio.toLowerCase().includes(this.searchData.toLowerCase()) ||
                    item.attributes.company.toLowerCase().includes(this.searchData.toLowerCase())
            })
            this.filterData = this.filterData ? this.filterData : this.collaboratorsList
        },
        async getCollaborators() {
            await CollaboratorServices.getAll().then((res) => {
                if (res.status == 200) {
                    this.collaboratorsList = res.data.data
                    this.filterData = Object.assign([], this.collaboratorsList)
                } else {
                    this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')
                }
            }).catch((err) => {
                console.log(err)
                this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')
            })
        },
        // SHOW TOAST
        showToast(type, message) {
            this.$toast(message, {
                type: type,
                position: 'top-right',
                duration: 3000,
                dismissible: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: false,
                closeButton: 'button',
                icon: true,
                rtl: false,
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.collab-table {
    table {
        margin: 5rem 0;
    }

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

    .button-more {
        height: 25px;
        width: 25px;
        border-radius: 50%;
    }
}
</style>