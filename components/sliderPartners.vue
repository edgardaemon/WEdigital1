<template>
  <div class="slider_logos">
      <span>Наши партнеры</span>
      <img src="@/assets/images/gradient_left.png" class="gradient_left img-fluid" alt="">
    <VueSlickCarousel class="sliders" v-bind="settings">
       <div>
        <img src="@/assets/images/nestle.svg"  class="img-fluid" alt="" />
      </div>
      <div>
        <img src="@/assets/images/maraton.svg" class="img-fluid" alt="" />
      </div>
      <div>
        <img src="@/assets/images/samarqand_d.svg" class="img-fluid" alt="" />
      </div>
      <div>
        <img src="@/assets/images/makro_logo.svg" class="img-fluid" alt="" />
      </div>
      <div>
        <img src="@/assets/images/mediapark.svg" class="img-fluid" alt="" />
      </div>
      <div>
        <img src="@/assets/images/riveira.svg" class="img-fluid" alt="" />
      </div>
      
       <div>
        <img src="@/assets/images/central-park.svg" class="img-fluid" alt="" />
      </div>

      
    </VueSlickCarousel>
      <img src="@/assets/images/gradient_right.png" class="gradient_right img-fluid" alt="">
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
        slidesToScroll: 1,
        variableWidth: true,
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
        "slidesToShow": 2,
        "slidesToScroll": 1,
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
img {
  margin-right: 86px;
  box-sizing: border-box;
  margin-top: 5px;
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
.slider_logos {
    padding: 30px 0;
    margin-top: 120px;
    margin-bottom: 0px;
}

}
</style>