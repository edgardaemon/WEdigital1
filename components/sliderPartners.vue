<template>
  <div class="slider_logos">
      <span>Наши партнеры</span>
      <img src="@/assets/images/gradient_left.png" class=" gradient_left " alt="">
    <VueSlickCarousel class="sliders" v-bind="settings" ref="carousel" @afterChange="changed">
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
      <img src="@/assets/images/gradient_right.png" class="  gradient_right " alt="">
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
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "sliderPartners",
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
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows:false,
        infinite: true,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1,
        variableWidth: true,
        "focusOnSelect": true,

         "responsive": [
    {
      "breakpoint": 992,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 768,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 576,
      "settings": {
        "slidesToShow": 4,
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
      width: 103px !important;
    height: 95px !important;
}
.gradient_right {
      width: 103px !important;
    height: 95px !important;
}
}


</style>