<template>
  <div class="paguen-view">
    <img src="https://cdn.freebiesupply.com/logos/large/2x/digitalocean-2-logo-black-and-white.png" alt="">
    <h4>Suspención de instancia en servidor <i class="bi bi-hdd-network ps-2"></i></h4>
    <p>
      La instancia de Digital Ocean ha sido suspendida por falta de pago. El total del adeudo es de $2,453.02 MXN
    </p>
    <p>
      Consulta los estados de cuenta en 
      <a class="tw-bold" href="https://cloud.digitalocean.com/account/billing" target="_blank">www.digitalocean.com</a>
    </p>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.paguen-view {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgb(0, 105, 255);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 2rem;

  img {
    width: 100%;
    max-width: 256px;
    margin-bottom: 12px;
  }

  h4 {
    font-weight: 500;
    font-size: 2rem;
  }
}
</style>