<template>
  <section class="slider_portfolio">
    <VueSlickCarousel class="main-slider" id="main-slider" v-bind="settings"  ref="carousel" @afterChange="changed">
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
    <div class="container">

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
      "breakpoint": 1200,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 1,
         "focusOnSelect": true,
   "centerMode": true,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 992,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 2,
        "infinite": true,
         "focusOnSelect": true,
   "centerMode": true,
        "dots": true
      }
    },
    {
      "breakpoint": 768,
      "settings": {
        "slidesToShow": 1.1,
        "slidesToScroll": 1,
         "focusOnSelect": true,
   "centerMode": true,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 576,
      "settings": {
        "slidesToShow": 1.1,
        "slidesToScroll": 1,
         "focusOnSelect": true,
   "centerMode": true, 
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


.non-active h2 {
  margin-left: 45px;
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
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
  opacity: 0.2;
}


.slider_portfolio{
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
  width: 100%;
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

.arrows svg {
  margin-left: 20px;
}


@media screen and (max-width: 767px) {


h2 {
  font-size: 25px !important;
}

.slider_portfolio {
  margin-top: -133px;
  margin-bottom: 0;
}

.arrows svg {
  margin-left: 10px;
  width: 22px;
  margin-top: -50px;
}


}


@media screen and (max-width: 576px) {
h2 {
  font-size: 14px !important;
  /* margin-right: 10px; */
}
}

</style>