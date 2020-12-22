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
  "autoplay": true,
  "speed": 10000,
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
        "slidesToScroll": 1
      }
    }
  ]



      },
    };
  },
};
// const sliderCards = document.getElementsByClassName('wrapper')
// const switchSlides = (index) => () => {
//     const sliderCards = document.getElementsByClassName('wrapper')
//     for (let i = 0; i < sliderCards.length; i++) {
//         sliderCards[i].classList.remove('active')
//     }
//     sliderCards[index].classList.add('non-active')
// }

// for (let i = 0; i < sliderCards.length; i++) {
//     sliderCards[i].addEventListener('click', switchSlides(i))
// }


</script>

<style scoped>

.gradient {
  position: absolute;
  z-index: 19;
  width: 99%;
}

.non-active h2 {
  margin-left: -70px;
}

.non-active {
  justify-content: center;
  align-items: center;
   margin-right: 67px;
}

.non-active h2 {
  display: none !important;
}

.non-active img{
  width: 419px;
  height: 298px;
    margin-left: 67px;
}

.non-active {
  margin-top: 110px;
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
</style>