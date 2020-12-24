<template>
  <div class="slider_logos">
      <span>Наши партнеры</span>
      <img src="@/assets/images/gradient_left.png" class="gradient_left " alt="">
    <VueSlickCarousel class="sliders" v-bind="settings">
       <div class="wrapper">
        <img src="@/assets/images/nestle.svg"  alt="" />
      </div>
      <div class="wrapper">
        <img src="@/assets/images/maraton.svg" alt="" />
      </div>
      <div class="wrapper">
        <img src="@/assets/images/samarqand_d.svg" alt="" />
      </div>
      <div class="wrapper">
        <img src="@/assets/images/makro_logo.svg" alt="" />
      </div>
      <div class="wrapper">
        <img src="@/assets/images/mediapark.svg" alt="" />
      </div>
      <div class="wrapper">
        <img src="@/assets/images/riveira.svg" alt="" />
      </div>
      
       <div class="wrapper">
        <img src="@/assets/images/central-park.svg" alt="" />
      </div>

      
    </VueSlickCarousel>
      <img src="@/assets/images/gradient_right.png" class="gradient_right " alt="">
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
        infinite: true,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1,
        variableWidth: true,
        "focusOnSelect": true,

         "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 3,
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

body {
   pointer-events: none;
}

img {
  margin-right: 86px;
  box-sizing: border-box;
  margin-top: 5px;
   pointer-events: none;

}

.slider_logos {
  position: relative;
    padding: 30px 0;
    margin-top: 120px;
    margin-bottom: 120px;
}

.gradient_left {
      top: 66px;
      position: absolute;
      z-index: 1;
      left: -6px;
}

.gradient_right {
   position: absolute;
      z-index: 1;
      top: 64px;
    right: -89px;
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

@media screen and (max-width: 567px)  {
    .slider_logos {
      width: 90%;
      margin-left: 15px;
    }

  .wrapper {
    box-sizing: border-box;
    width: 150px;
  }


.slider_logos {
    padding: 30px 0;
    margin-top: 120px;
    margin-bottom: 0px;
}

.gradient_left {
      width: 103px;
    height: 95px;
}
.gradient_right {
      width: 103px;
    height: 95px;
}
}


</style>