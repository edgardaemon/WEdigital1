<template>
<section>

    <VueSlickCarousel class="main-slider" id="main-slider" v-bind="settings">
    

     <div>
        <img src="@/assets/images/halfslider1.png" class="img-fluid" alt="">
       </div>     

     <div>
        <img src="@/assets/images/halfslider1.png" class="img-fluid" alt="">

       </div>     

     <div>
        <img src="@/assets/images/halfslider1.png" class="img-fluid" alt="">

       </div>     
       <div>
        <img src="@/assets/images/halfslider1.png" class="img-fluid" alt="">

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
  "infinite": true,
  "slidesToShow": 1,
  "slidesToScroll": 1,
  "autoplay": false,
  "focusOnSelect": true,
  "centerMode": true,
  "initialSlide": 2,
      },
    };
  },
};


</script>

<style scoped>
.images {
    margin-left: 24;
    
}

img {
    width: 708px;
    height: 335px;
   pointer-events: none;
   opacity: 0.5;
  transition: 1s all;


}

.slick-current div img {
  transform: scale(1.1);
  opacity: 1 !important;
}


section .slick-track {
    position: relative;
    width: 100%;
    padding-top: 56.25%
}

.slick-track  {
   position:  absolute;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
}



.gradient {
  position: absolute;
  z-index: 19;
  width: 90%;
}

@media screen and (max-width: 767px) {

img {
  width: 100% !important;
  height: auto !important;
}}

</style>
