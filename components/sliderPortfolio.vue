<template>
  <section class="slider_portfolio">
    <VueSlickCarousel class="main-slider" id="main-slider" v-bind="settings">
      <div class="d-flex flex-column justify-content-center wrapper non-active">
        <img src="@/assets/images/golden-slider.png" alt="">
        <h2>GOLDEN HOUSE</h2>
      </div>
      <div class="d-flex flex-column justify-content-center wrapper non-active">
        <img src="@/assets/images/golden-slider.png" alt="">
        <h2>GOLDEN HOUSE</h2>
      </div>
      <div class="d-flex flex-column justify-content-center wrapper non-active">
        <img src="@/assets/images/golden-slider.png" alt="">
        <h2>GOLDEN HOUSE</h2>
      </div>
      <div class="d-flex flex-column justify-content-center wrapper non-active">
        <img src="@/assets/images/golden-slider.png" alt="">
          <h2>GOLDEN HOUSE</h2>
      </div>
    </VueSlickCarousel>
  </section>
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
  "slidesToShow": 3,
  "slidesToScroll": 1,
  "autoplay": false,
  "focusOnSelect": true,
   "centerMode": true,
  "cssEase": "linear",

  "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        infinite: true
      }
    }
  ]



      },
    };
  },
};


</script>

<style scoped>

section {
  height: 100%;
}

.slick-track.slick-center[data-v-e4caeaf8] {
  display: flex !important;
  align-items: center !important;
}

.non-active h2 {
  margin-left: 45px;
  font-style: normal;
  font-weight: 800;
  font-size: 55px;
  line-height: 117px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
}

.non-active {
  justify-content: center;
  align-items: center;
   margin-right: 67px;
}

.non-active img{
  width: 419px;
  height: 298px;
    margin-left: 67px;
}

.non-active {
  margin-top: 110px;
  opacity: 0.5;
}


.slider_portfolio{
  padding-top: 78px;
  margin-bottom: 120px;
}

h2 {
  text-align: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  font-style: normal;
  font-weight: 800;
  font-size: 96px;
  line-height: 117px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  text-shadow: 0px 4px 34px rgba(0, 0, 0, 0.65);
}

img {
  box-sizing: border-box;
}

.slider_logos {
    padding: 30px 0;
    margin-top: 120px;
    margin-bottom: 120px;
}

.slider_portfolio .wrapper{
  transition: all 0.5s;
  pointer-events: none;
}

.slider_portfolio h2{
  transition: all 0.3s;
  opacity: 0;
  pointer-events: none;
}

.slick-current .wrapper {
  transform: scale(1.6);
  width: 695px;
  height: 495px;
  opacity: 1;
}

.slick-current h2 {
  opacity: 1;
}

span {
    margin-top: 64px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 155.9%;
    text-align: justify;
    color: #FFFFFF;
    opacity: 0.8;
}


@media screen and (max-width: 767px) {

img {
  width: 100% !important;
  height: auto !important;
}

h2 {
  font-size: 22px !important;
}

}
</style>