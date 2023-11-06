<template>
    <div class="verify-view container">
        <div class="d-flex justify-content-center flex-column align-items-center">
            <h1 class="text-center">Verifica tu cuenta</h1>
            <p class="text-center">Ingresa los datos necesarios para verificar tu cuenta y asi tengas acceso a más
                información</p>
            <form id="verifyForm" class="mb-4" @submit.prevent="sendEmail()">

                <div class="form-group mb-3">
                    <label for="rfcInput" class="ms-2">RFC</label>
                    <input type="text" class="form-input" :class="{ 'is-invalid': $v.rfc.$error }"
                        placeholder="Ej. ABC680524P76" id="rfcInput" v-model="rfc" />
                </div>

                <div class="form-group mb-3">
                    <label for="companyTypeInput" class="ms-2">Tipo de compañia</label>
                    <Select @change="changeCompanyType($event)" name="companyTypes" class="form-input"
                        :class="{ 'is-invalid': $v.companyType.$error }" id="companyTypeInput" v-model="companyType">
                        <option v-for="compT in companyTypes" :key="compT.id" :value="compT.value">{{ compT.value }}</option>
                        <!-- <option value="INMOBILIARIA" selected>INMOBILIARIA</option>
                        <option value="DESARROLLADOR">DESARROLLADOR</option>
                        <option value="OTRA">OTRA</option> -->
                    </Select>
                </div>

                <div class="form-group mb-3">
                    <label for="bussinesNameInput" class="ms-2">Nombre de mi empresa</label>
                    <input type="text" class="form-input" :class="{ 'is-invalid': $v.companyName.$error }"
                        placeholder="Ej. Mi empresa" id="bussinesNameInput" v-model="companyName" />
                </div>

                <div class="form-group mb-3">
                    <label for="descriptionInput" class="ms-2">Descripción</label>
                    <input type="text" class="form-input" :class="{ 'is-invalid': $v.description.$error }"
                        placeholder="Breve descripción de mi empresa" id="descriptionInput" v-model="description" />
                </div>

                <div class="form-group mb-3">
                    <label for="phoneOfficeInput" class="ms-2">Teléfono de oficina</label>
                    <input type="text" class="form-input" :class="{ 'is-invalid': $v.phoneOffice.$error }"
                        placeholder="Ej. 6120000000" id="phoneOfficeInput" v-model="phoneOffice" />
                </div>

                <div class="form-group mb-3">
                    <label for="phoneOfficeExtInput" class="ms-2">Ext.</label>
                    <input type="text" class="form-input" :class="{ 'is-invalid': $v.phoneOfficeExt.$error }"
                        placeholder="Ej. 100" id="phoneOfficeExtInput" v-model="phoneOfficeExt" />
                </div>

                <div class="form-group mb-3">
                    <label for="employeesNumberInput" class="ms-2">Número de empleados</label>
                    <input type="text" class="form-input" :class="{ 'is-invalid': $v.employeesNumber.$error }"
                        placeholder="Ej. 10" id="employeesNumberInput" v-model="employeesNumber" />
                </div>

                <div class="form-group mb-3">
                    <label for="websiteInput" class="ms-2">Link de contacto</label>
                    <input type="text" class="form-input" :class="{ 'is-invalid': $v.website.$error }"
                        placeholder="Ej. www.minmobiliaria.mx" id="websiteInput" v-model="website" />
                </div>

                <div class="form-group mb-3">
                    <label for="emailCompanyInput" class="ms-2">Email institucional</label>
                    <input type="text" class="form-input" :class="{ 'is-invalid': $v.emailCompany.$error }"
                        placeholder="Ej. contacto@minmobiliaria.mx" id="emailCompanyInput" v-model="emailCompany" />
                </div>

                <!-- ADDRESS -->
                <div class="form-group mb-3">
                    <label for="streetAndNumInput" class="ms-2">Calle y número</label>
                    <input type="text" class="form-input" :class="{ 'is-invalid': $v.streetAndNum.$error }"
                        placeholder="Ej. Los Cardones #124" id="streetAndNumInput" v-model="streetAndNum" />
                </div>

                <div class="form-group mb-3">
                    <label for="hoodInput" class="ms-2">Colonia</label>
                    <input type="text" class="form-input" :class="{ 'is-invalid': $v.hood.$error }"
                        placeholder="Ej. Paraíso del Sol" id="hoodInput" v-model="hood" />
                </div>

                <div class="form-group mb-3">
                    <label for="cityInput" class="ms-2">Ciudad</label>
                    <input type="text" class="form-input" :class="{ 'is-invalid': $v.city.$error }" placeholder="Ej. La Paz"
                        id="cityInput" v-model="city" />
                </div>

                <div class="form-group mb-3">
                    <label for="stateInput" class="ms-2">Estado</label>
                    <input type="text" class="form-input" :class="{ 'is-invalid': $v.state.$error }"
                        placeholder="Ej. Baja California Sur" id="stateInput" v-model="state" />
                </div>

                <div class="form-group mb-3">
                    <label for="countryInput" class="ms-2">País</label>
                    <input type="text" class="form-input" :class="{ 'is-invalid': $v.country.$error }"
                        placeholder="Ej. México" id="countryInput" v-model="country" />
                </div>

                <div class="form-group mb-3">
                    <label for="zipCodeInput" class="ms-2">Código postal</label>
                    <input type="text" class="form-input" :class="{ 'is-invalid': $v.zipCode.$error }"
                        placeholder="Ej. 23000" id="zipCodeInput" v-model="zipCode" />
                </div>

                <button type="submit" class="form-button">
                    <div class="spinner-border spinner-border-sm text-light ms-1" role="status" v-if="loading">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <span v-else>
                        Enviar
                    </span>
                </button>
            </form>
        </div>
    </div>
</template>
  
<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import emailjs from "@emailjs/browser";
import store from '@/store'
import { mapGetters } from 'vuex'
import { setAuthToken, setUser, isLoggedIn } from "@/auth";
export default {
    metaInfo: {
        title: "Land Finder México",
        titleTemplate: "%s | Verificar mi cuenta",
    },
    data: () => ({

        companyTypes: [
            { id: 1, value: "INMOBILIARIA" },
            { id: 2, value: "DESARROLLADOR" },
            { id: 3, value: "OTRO" }
        ],
        rfc: "",
        companyType: "INMOBILIAIRIA",
        companyName: "",
        description: "",
        phoneOffice: "",
        phoneOfficeExt: "",
        employeesNumber: "",
        website: "",
        emailCompany: "",
        streetAndNum: "",
        hood: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
        showPassword: false,
        loading: false,

    }),
    validations: {
        rfc: {
            required,
        },
        companyType: {
            required
        },
        companyName: {
            required,
        },
        description: {
            required,
        },
        phoneOffice: {
            required,
        },
        phoneOfficeExt: {
            required,
        },
        employeesNumber: {
            required
        },
        website: {
            required
        },
        emailCompany: {
            required
        },
        streetAndNum: {
            required
        },
        hood: {
            required
        },
        city: {
            required
        },
        state: {
            required
        },
        country: {
            required
        },
        zipCode: {
            required
        }
    },

    computed: {
        ...mapGetters(['getUser']),
        message() {
            return `DATOS DE EMPRESA -- RFC: [ ${this.rfc} ] -- Tipo de compañia: [ ${this.companyType} ]
            -- Nombre de mi empresa: [ ${this.companyName} ] -- Descripción de mi empresa: [ ${this.description} ]
            -- Telefono de oficina: [ ${this.phoneOffice} ] -- Extension: [ ${this.phoneOfficeExt} ]
            -- Numero de empleados: [ ${this.employeesNumber} ] -- Link de contacto: [ ${this.website} ]
            -- Email institucional: [ ${this.emailCompany} ] -- Calle y numero: [ ${this.streetAndNum} ]
            -- Colonia: [ ${this.hood} ] -- Ciudad: [ ${this.city} ] -- Estado: [ ${this.state} ] -- Pais: [ ${this.country} ]
            -- Codigo postal: [ ${this.zipCode} ]`;
        },
        getUser() {
            return store.getters['getUser']
        },
    },
    methods: {
        validForm() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return false;
            }
            return true;
        },

        changeCompanyType(e) {
            this.companyType = e.target.value
        },

        sendEmail(e) {
            console.log(this.message)
            if (this.validForm()) {
                this.loading = true;
                emailjs
                    .send(
                        "service_dx3z2na",
                        "template_4sgd35g",
                        {
                            type: "SOLICITUD DE VERIFICACIÓN DE CUENTA",
                            name: this.getUser.email,
                            business_name: this.nameCompany,
                            email: this.emailCompany,
                            message: this.message,
                        },
                        "-DIkcxuZ3ssPqzst2"
                    ).then(
                        (result) => {
                            this.$router.push({ name: "profile" });
                            console.log("SUCCESS!", result.status, result.text);
                        },
                        (error) => {
                            this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')
                            console.log("FAILED...", error);
                        }
                    )
                    .catch((err) => {
                        console.log(err)
                        this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')
                    }).finally(() => {
                        this.loading = false;
                    });
            } else {
                this.showToast('error', 'Oh no! Algo salió mal, intenta de nuevo.')
            }
        },

        // Método para setear los valores
        setUserLogin(data) {
            setAuthToken(data.jwt);
            setUser(data.user);
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
    },
};
</script>
  
<style lang="scss" scoped>
.verify-view {
    width: 100%;
    height: 100%;
    padding-top: 10%;
    padding-bottom: 10%;

    .link-router {
        text-decoration: underline;
    }

    #verifyForm {
        width: 100%;
        max-width: 320px;
        margin: 0 auto;

        .form-group {
            display: flex;
            flex-direction: column;

            .password-container {
                display: flex;
                flex-direction: column;
                position: relative;

                i {
                    position: absolute;
                    top: calc(50% - 0.7rem);
                    right: 1rem;
                    cursor: pointer;
                }
            }

            .form-input {
                background-color: transparent;
                border: none;
                border: 2px solid var(--color-black-3);
                border-radius: 12px;
                padding: 0.5rem 1rem;
                color: var(--color-white-2);
                font-weight: var(--font-semi-bold);
                outline: none !important;

                &::placeholder {
                    color: rgb(100, 100, 100);
                    opacity: 1;
                }
            }

            .is-invalid {
                border-color: var(--color-error);
            }
        }

        .form-button {
            width: 100%;
            height: fit-content;
            border-radius: 12px;
            padding: 0.5rem 1rem;
            font-size: var(--normal-font-size);
            font-weight: var(--font-bold);
            color: var(--color-white);
            background-color: var(--color-complementary-1);
            transition: var(--transition-fast);
            cursor: pointer;

            &:hover {
                background-color: var(--color-black-3);
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .verify-view {
        padding-top: 5%;
        padding-bottom: 5%;
    }
}
</style>
  