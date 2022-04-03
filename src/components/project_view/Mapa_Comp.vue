<template>
  <div id="map_project" class="mapa">
  </div>
</template>

<script>
export default {
  name: 'MapaComp',
  props: {
    locationProp: {
      type: Object,
      default: () => ({
        lat: 24.142605,
        lng: -110.312616,
      }),
    },
  },
  mounted() {
    this.initMap();
    console.log(this.locationProp);
  },
  methods: {
    initMap() {
      mapboxgl.accessToken = 'pk.eyJ1IjoibGFseWxheiIsImEiOiJja2t0MGM4cW8wcXptMnBxbW5hc3gzZXFxIn0.e2-jBMfsS1hA2_E0f4E6lA';
      const map = new mapboxgl.Map({
        container: 'map_project', 
        style: 'mapbox://styles/lalylaz/cl1dpc4s9000e14mhv30826wo',
        center: [ this.locationProp.lng, this.locationProp.lat], 
        zoom: 11, 
        geolocation: true,
      });

      map.addControl(new mapboxgl.NavigationControl());

      const marker = new mapboxgl.Marker()
        .setLngLat([ this.locationProp.lng, this.locationProp.lat])
        .addTo(map);
    },
  },
}
</script>

<style lang="scss" scoped>
.mapa {
  height: 380px;
  width: 100%;
  border-radius: 24px;
}
</style>