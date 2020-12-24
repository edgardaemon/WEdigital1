<template>
  <div class="slider_services">

    <VueSlickCarousel class="sliders" v-bind="settings">
      <div class="d-flex flex-column justify-content-center align-items-center wrapper">
          <h4>Дизайн</h4>
        <img src="@/assets/images/services1.png" class="img-fluid" alt="" />
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center wrapper">
          <h4>production</h4>
        <img src="@/assets/images/services2.png" class="img-fluid" alt="" />
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center wrapper">
          <h4>SMM <br>
            Продвижение</h4>
        <img src="@/assets/images/services3.png" class="img-fluid" alt="" />
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center wrapper">
          <h4>медиа <br>
            обслуживание</h4>
        <img src="@/assets/images/services4.png" class="img-fluid" alt="" />
      </div>
    
    </VueSlickCarousel>
  
  </div>
  
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "sliderPartners",
  components: { VueSlickCarousel },
  data() {
    return {
     settings: {
  "arrows": false,
  "infinite": true,
  "slidesToShow": 3.5,
  "slidesToScroll": 1,
  "autoplay": false,
  "focusOnSelect": true,

//   "speed": 10000,
//   "cssEase": "linear",

  "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "infinite": true,
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 1
      }
    }
  ]



      },
    };
  },
};
</script>

<style scoped>


.gradient {
  position: absolute;
  z-index: 19;
  width: 99%;
}

button.slick-prev:before, button.slick-next:before {
      display: none !important;
}
.sliders {
    align-items: center;
}

.wrapper:hover {
    filter: saturate(10);
}


h4 {
    margin-left: -60px;
    position: absolute;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 39px;
    text-transform: uppercase;
    color: #FFFFFF;
    text-shadow: 0px 4px 34px rgba(0, 0, 0, 0.65);
}

img {
  margin-right: 86px;
  box-sizing: border-box;
  margin-top: 5px;
   pointer-events: none;
}

.slider_services {
    padding: 30px 0;
    padding-top: 120px;
    margin-bottom: 120px;
}

@media screen and (max-width: 767px) {

  img {
  margin-right: 130px;
}

img {
  width: 100% !important;
  height: auto !important;
}

h4 {
  font-size: 18px;
  margin-left: 150px;
  line-height: 25px;
}
}

@media screen and (max-width: 500px) {

  img {
  margin-right: 200px;
}
}

</style>