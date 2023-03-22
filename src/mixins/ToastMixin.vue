<script>
  export default {
    methods: {
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