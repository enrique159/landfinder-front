<template>
  <div id="map_contact" class="mapa">
  </div>
</template>

<script>
export default {
  props: {
    locationProp: {
      type: Object,
      default: () => ({
        lat: 24.1553252,
        lng: -110.3023063,
      }),
    },
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      mapboxgl.accessToken = 'pk.eyJ1IjoibGFseWxheiIsImEiOiJja2t0MGM4cW8wcXptMnBxbW5hc3gzZXFxIn0.e2-jBMfsS1hA2_E0f4E6lA';
      const map = new mapboxgl.Map({
        container: 'map_contact', 
        style: 'mapbox://styles/lalylaz/cl1dpc4s9000e14mhv30826wo',
        center: [ this.locationProp.lng, this.locationProp.lat], 
        zoom: 15, 
        geolocation: true,
        attributionControl: false
      });
      
      map.scrollZoom.disable();
      map.addControl(new mapboxgl.NavigationControl());

      const marker = new mapboxgl.Marker()
        .setLngLat([ this.locationProp.lng, this.locationProp.lat])
        .addTo(map);
    },
  },
}
</script>

<style lang="scss">
.mapa {
  height: 200px;
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  clip-path: border-box;

  .mapboxgl-marker {
    background-image: url('@/assets/icons/marker2.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 200px;
    aspect-ratio: 1;
    cursor: pointer;
    svg {
      display: none;
    }
  }
}

.mapboxgl-ctrl-top-right {
  .mapboxgl-ctrl-group {
    background: none;
    box-shadow: none;
    padding: 12px 12px 0 0;
    button {
      background-color: rgb(78, 78, 78);
      border-radius: 8px;
      margin-bottom: 8px;
      border-top: none;
      width: 34px;
      height: 34px;
      transition: var(--transition-fast);
      &:focus {
        border-radius: 8px;
        background-color: rgb(123, 123, 123);
      }
    }
    .mapboxgl-ctrl-zoom-in {
      span { background-image: url(@/assets/icons/zoom-in.svg); }
    }
    .mapboxgl-ctrl-zoom-out {
      span { background-image: url(@/assets/icons/zoom-out.svg); }
    }
    .mapboxgl-ctrl-compass {
      span { background-image: url(@/assets/icons/compass.svg); }
    }
  }
}

.mapboxgl-ctrl-bottom-left{
  padding: 0 0 12px 12px;
}
</style>