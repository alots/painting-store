<template>
<div class="contacts-container">
	<div id="mapContainer" class="basemap"></div>
  <div class="contacts">
    <div class="contacts__item">
      <img class="contacts__logo" :src="'/img/phone.png'" />
      <p class="contacts__phone">+7 (495) 555-55-55</p>
    </div>
    <div class="contacts__item">
      <img class="contacts__logo" :src="'/img/adress.png'" />
      <p class="contacts__adress"> г. Москва, ул. Расплетина, 24 </p>
    </div>
    <div class="contacts__item">
      <img class="contacts__logo" :src="'/img/mail.png'" />
      <p class="contacts__adress"> mail@example.com </p>
    </div>
    <div class="contacts__item-void">
    </div>
    <div class="contacts__links">
      <a href="https://github.com/alots">
      <img class="contacts__logo_m" :src="'/img/github.png'" border="0"/>
      </a>
    </div>
  </div>
</div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "About",
  data() {
    return {
      accessToken: "pk.eyJ1IjoiYWxvdHMiLCJhIjoiY2ttYXpzYnc2MXdrajJ2bXRhamxsa252OSJ9.k-fPiRf4Q1W9bXOBPHdswg",
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [103.811279, 1.345399],
      zoom: 12,
      maxBounds: [
        [103.6, 1.1704753],
        [104.1, 1.4754753],
      ],
    });
  },
};
</script>

<style lang="scss">
.basemap {
  width: 100%;
  height: 500px;
}
.contacts-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.contacts {
  max-width: 300px;


  &__item {
    display: flex;
    flex-direction: row;
    max-height: 80px;
    margin-top: 20px;
    margin-left: 20px;
  }

  &__item-void {
    max-height: 10px;
    max-width: 280px;
    margin-top: 20px;
    margin-left: 20px;

    border-bottom: 1px solid #b5b5b5;
  }

  &__logo {
    max-width: 14px;
    max-height: 14px;
    padding: 0 10px;

    &__m {
      max-width: 32px;
      max-height: 32px;
      padding: 10px;
    }
  }

  

  &__links {
    display: flex;
    flex-direction: row;
    max-height: 80px;
    align-items: center;
    justify-content: center;

    & a {
      max-width: 32px;
      max-height: 32px;
    }
  }
}


.mapboxgl-ctrl-attrib.mapboxgl-compact > {
  display: none;
}
</style>
