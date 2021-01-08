<template>
<section>
      <img src="@/assets/images/halfslider_grad_left.png" class="img-fluid gradient gd_left" alt="">
      <img src="@/assets/images/halfslider_grad_right.png" class="img-fluid gradient gd_right" alt="">

    <VueSlickCarousel ref="carousel" @afterChange="changed" class="main-slider" id="main-slider" v-bind="settings">
     <div>
        <img src="@/assets/images/halfslider1.png" class="img-fluid img-slide" alt="">
       </div>     

     <div>
        <img src="@/assets/images/halfslider1.png" class="img-fluid img-slide" alt="">

       </div>     

     <div>
        <img src="@/assets/images/halfslider1.png" class="img-fluid img-slide" alt="">

       </div>     
       <div>
        <img src="@/assets/images/halfslider1.png" class="img-fluid img-slide" alt="">

       </div>  
     
    </VueSlickCarousel>

    <div class="text-right arrows">

        <svg @click="showPrev" style="cursor: pointer" class=" slick-arrow-prev" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.500122" width="31" height="31" rx="3.5" stroke="white"/>
              <path d="M11.1967 15.6016L18.078 8.66414C18.2983 8.44382 18.6545 8.44382 18.8749 8.66414L19.803 9.59226C20.0233 9.81257 20.0233 10.1688 19.803 10.3891L14.2483 16.0001L19.803 21.611C20.0233 21.8313 20.0233 22.1876 19.803 22.4079L18.8749 23.336C18.6545 23.5563 18.2983 23.5563 18.078 23.336L11.1967 16.3985C10.9764 16.1782 10.9764 15.8219 11.1967 15.6016Z" fill="white"/>
        </svg>


        <svg @click="showNext" style="cursor: pointer" class=" slick-arrow-next" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.500122" width="31" height="31" rx="3.5" stroke="white"/>
                    <g clip-path="url(#clip0)">
                    <path d="M20.8033 16.3986L13.922 23.3361C13.7017 23.5564 13.3455 23.5564 13.1251 23.3361L12.197 22.408C11.9767 22.1877 11.9767 21.8314 12.197 21.6111L17.7517 16.0002L12.197 10.3892C11.9767 10.1689 11.9767 9.81267 12.197 9.59236L13.1251 8.66424C13.3455 8.44392 13.7017 8.44392 13.922 8.66424L20.8033 15.6017C21.0236 15.822 21.0236 16.1783 20.8033 16.3986Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="9" height="24" fill="white" transform="translate(21 28.0001) rotate(180)"/>
                    </clipPath>
                    </defs>
        </svg>
    </div>

</section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "sliderPartners",
  components: { VueSlickCarousel },
    methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
    changed(index) {
      this.currentTeacher = index + 1
    }
  },
  data() {
    return {
      settings: {
  "arrows":false,
  "infinite": true,
  "slidesToShow": 1,
  "slidesToScroll": 1,
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

.img-slide {
    width: 708px;
   pointer-events: none;
}

.slick-current div img {
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
  pointer-events: none;
}

.gd_left{
  left: 28px;
}

.gd_right {
  right: 25px;
}

.arrows {
  padding-top: 50px;
}


@media screen and (max-width: 767px) {

.arrows svg {
  width: 20px;
}

.arrows {
  padding-top: 20px;
}

.gradient{
  height: 70%;
}

}

</style>
