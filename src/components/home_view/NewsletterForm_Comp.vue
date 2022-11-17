<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="formNewsletter"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <h1 class="modal-title fs-5" id="exampleModalLabel">Registro</h1>
            <p class="subtitle">
              Llena los siguientes datos para poder registrarte y así poder
              mantenerte informado de las novedades de Land Finder México.
            </p>
          </div>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-4">
          <form>
            <div class="row">
              <div class="col-10 mb-3">
                <label class="ms-2 mb-3">¿Qué soy?</label>
                <div class="chips-selector">
                  <div
                    class="chip"
                    v-for="chip in chips"
                    :key="chip.id"
                    :class="{ active: chip.id === selectedChip }"
                    @click="selectChip(chip.id)"
                  >
                    {{ chip.name }}
                  </div>
                </div>
              </div>
              <div class="col-6">
                <label for="bussinesNameInput" class="ms-2">Nombre de tu empresa</label>
                <input
                  type="text"
                  class="form-input"
                  placeholder="Ej. Inmobiliaria XYZ"
                  id="bussinesNameInput"
                />
              </div>
              <div class="col-6">
                <label for="emailInput" class="ms-2">Correo electrónico*</label>
                <input
                  type="email"
                  class="form-input"
                  placeholder="Ej. nombre@dominio.com"
                  id="emailInput"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn button-register">Registrarme</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chips: [
        { id: 1, name: "Desarrollador" },
        { id: 2, name: "Fondo de inversión" },
        { id: 3, name: "Inmobiliaria" },
        { id: 4, name: "Propietario" },
        { id: 5, name: "Otro" },
      ],
      selectedChip: 1,
    };
  },
  methods: {
    selectChip(id) {
      this.selectedChip = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.subtitle {
  font-size: 0.8rem;
  color: var(--color-text-light);
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

.button-cancel {
  width: fit-content;
  height: fit-content;
  border: none;
  border-radius: 12px;
  padding: 0.5rem 1rem;
  font-size: var(--small-font-size);
  font-weight: var(--font-bold);
  color: var(--color-white);
  background-color: transparent;
  transition: var(--transition-fast);
  cursor: pointer;
  &:hover {
    background-color: var(--color-black-3);
  }
}

.button-register {
  width: fit-content;
  height: fit-content;
  border: 2px solid var(--color-complementary-1);
  border-radius: 12px;
  padding: 0.5rem 1rem;
  font-size: var(--small-font-size);
  font-weight: var(--font-bold);
  color: var(--color-complementary-1);
  background-color: transparent;
  transition: var(--transition-fast);
  cursor: pointer;
  &:hover {
    background-color: var(--color-complementary-1);
    color: var(--color-white);
  }
}

.chips-selector {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  gap: 0.6rem;
  .chip {
    background-color: transparent;
    border: 1px solid var(--color-white-2);
    border-radius: 24px;
    color: var(--color-white-2);
    cursor: pointer;
    font-weight: var(--font-semi-bold);
    font-size: var(--small-font-size);
    padding: 0.2rem 0.5rem;
    transition: var(--transition-fast);
    &.active {
      background-color: var(--color-white);
      border: 1px solid var(--color-white);
      color: var(--color-black);
    }
  }
}
.modal-content {
  background-color: var(--color-background);
}
.modal-header {
  align-items: flex-start;
}
.modal-header,
.modal-footer {
  border-bottom: none;
  border-top: none;
}
</style>
