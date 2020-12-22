<template>
<section>
    <img src="@/assets/images/linear-gr.png" class="gradient" alt="">

    <VueSlickCarousel class="main-slider" id="main-slider" v-bind="settings">
      
          
        <img src="@/assets/images/halfslider2.png" class="img-fluid" alt="">

          
     
      
          
        <img src="@/assets/images/halfslider1.png" class="img-fluid" alt="">

          
      
      
          
        <img src="@/assets/images/halfslider3.png" class="img-fluid" alt="">

          
        <img src="@/assets/images/halfslider3.png" class="img-fluid" alt="">
     
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
  "infinite": true,
  "slidesToShow": 3,
  "slidesToScroll": 1,
  "autoplay": false,
//   "speed": 10000,

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
.images {
    margin-left: 24;
}

.gradient {
  position: absolute;
  z-index: 19;
  width: 90%;
}

</style>
