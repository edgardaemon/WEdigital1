<template>
  <div>
    <section class="home_page">
      <div class="container">
        <div class="row">
          <div class="col-12 text">
           <!-- <h1>{{$t("home")}}</h1> -->
           <h1>Делаем жизнь наших клиентов проще</h1>
           <h3>We.Digital - маркетинговое агенство, состоящее из специалистов в сфере диджитал маркетинга с 10-летним опытом работы.</h3>
          </div>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <div>
              <NuxtLink to="about-us">
                <div>
                <img src="@/assets/images/about.svg" alt="">
                </div>
              </NuxtLink>
            </div>
            <div>
              <NuxtLink to="/about-us">
                <h2 class="more">
                  Подробно&nbsp;
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.0946 16L17.6093 22.4853C17.0879 23.0067 17.0879 23.8507 17.6093 24.3707L17.7239 24.4853C18.2453 25.0067 19.0893 25.0067 19.6093 24.4853L27.1519 16.9427C27.6733 16.4213 27.6733 15.5773 27.1519 15.0573L19.6093 7.51466C19.0879 6.99332 18.2439 6.99332 17.7239 7.51466L17.6093 7.62932C17.0879 8.15066 17.0879 8.99466 17.6093 9.51466L24.0946 16Z"
                      fill="white"
                    />
                    <path
                      d="M25.3333 14.6666H5.33333C4.59733 14.6666 4 15.264 4 16C4 16.736 4.59733 17.3333 5.33333 17.3333H25.3333V14.6666Z"
                      fill="white"
                    />
                  </svg>
                </h2>
              </NuxtLink>
            </div>
          </div>
          <div class="col-12">
            <h1 class="why_us">ПОЧЕМУ МЫ?</h1>
          </div>
          <div class="col-12 col-md-6">
            <p class="text text-left">
              We.Digital - это агентство, состоящее из специалистов в сфере
              диджитал маркетинга с 10-летним опытом работы. Нам важно, с кем мы
              работаем, важно, какие у всех нас цели и принципы. Мы не просто
              делаем рекламу, мы создаем идею, которая отвечает на потребности
              бизнеса и становится частью жизни потребителей.
            </p>
          </div>
          <div class="col-md-6 text-center">
            <img
              src="@/assets/images/logo_about.png"
              class="img-fluid about_logo"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="container-fluid number_of_projects">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-3 done_projects">
              <h2 class="text-center">201</h2>
              <h6>Успешных проектов</h6>
            </div>
            <div class="col-3 done_projects">
              <h2 class="text-center">42</h2>
              <h6>Клиентов в сфере SMM</h6>
            </div>
            <div class="col-3 done_projects">
              <h2 class="text-center">10</h2>
              <h6>Лого & Брендинг</h6>
            </div>
            <div class="col-3 done_projects">
              <h2 class="text-center">24</h2>
              <h6>Сайты и порталы</h6>
            </div>
          </div>
          <div class="col-12 ">
            <div class="d-flex flex-column align-items-center">
              <h6>Мы делаем уникальные работы</h6>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
    <slider-partners />
    </div>
    <section class="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
          <div>
                <img src="@/assets/images/portfolio.svg" alt="">
                </div>
            <div>
              <NuxtLink to="/portfolio">
                <h2 class="more">
                  Все проекты&nbsp;
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.0946 16L17.6093 22.4853C17.0879 23.0067 17.0879 23.8507 17.6093 24.3707L17.7239 24.4853C18.2453 25.0067 19.0893 25.0067 19.6093 24.4853L27.1519 16.9427C27.6733 16.4213 27.6733 15.5773 27.1519 15.0573L19.6093 7.51466C19.0879 6.99332 18.2439 6.99332 17.7239 7.51466L17.6093 7.62932C17.0879 8.15066 17.0879 8.99466 17.6093 9.51466L24.0946 16Z"
                      fill="white"
                    />
                    <path
                      d="M25.3333 14.6666H5.33333C4.59733 14.6666 4 15.264 4 16C4 16.736 4.59733 17.3333 5.33333 17.3333H25.3333V14.6666Z"
                      fill="white"
                    />
                  </svg>
                </h2>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <slider-portfolio />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 text-center d-flex flex-column align-items-center">
            <h5>
              Это еще не все
             <img src="@/assets/images/hug_me.svg" alt="">
            </h5>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="services">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
           <div>
                <img src="@/assets/images/services.svg" alt="">
                </div>
            <div>
              <NuxtLink to="/services">
                <h2 class="more">
                  Все услуги&nbsp;
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.0946 16L17.6093 22.4853C17.0879 23.0067 17.0879 23.8507 17.6093 24.3707L17.7239 24.4853C18.2453 25.0067 19.0893 25.0067 19.6093 24.4853L27.1519 16.9427C27.6733 16.4213 27.6733 15.5773 27.1519 15.0573L19.6093 7.51466C19.0879 6.99332 18.2439 6.99332 17.7239 7.51466L17.6093 7.62932C17.0879 8.15066 17.0879 8.99466 17.6093 9.51466L24.0946 16Z"
                      fill="white"
                    />
                    <path
                      d="M25.3333 14.6666H5.33333C4.59733 14.6666 4 15.264 4 16C4 16.736 4.59733 17.3333 5.33333 17.3333H25.3333V14.6666Z"
                      fill="white"
                    />
                  </svg>
                </h2>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
        <div class="offset-1"></div>
        <div class="col-10">
        <services-accordion
      v-for="(course, index) in courses" v-bind:key="course.index"
      :index="index + 1"
      :title="course.name"
      :list="course.themes"
    />
      </div>
      </div>
     </div>
    </section>
    <section class="team">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <NuxtLink to="/team">
             <div>
                <img src="@/assets/images/team.svg" alt="">
                </div>
            </NuxtLink>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-md-5">
            <p class="text text-left">
              We.Digital - это агентство, состоящее из специалистов в сфере
              диджитал маркетинга с 10-летним опытом работы. Нам важно, с кем мы
              работаем, важно, какие у всех нас цели и принципы . Мы не просто
              делаем рекламу, мы создаем идею, которая отвечает на потребности
              бизнеса и становится частью жизни потребителей.
              <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              aliquet elit dignissim sit vitae commodo libero, feugiat eget.
              Malesuada convallis phasellus aliquam arcu auctor felis. Imperdiet
              feugiat facilisis dignissim justo consectetur. Erat sed in blandit
              vel. Quis risus pellentesque vel, volutpat.
            </p>
          </div>
          <div class="offset-md-1"></div>
          <div class="col-12 col-md-6 half-page-slider">
            <div class="container">
            <half-slider/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <buttons />
  </div>
</template>

<script>
export default {
 data: () => ({
    courses: [
      {
        name: "Маркетинг в социальных сетях",
        index: "1",
        themes: [
          "Simmetriya va asimmetriya",
          "O‘lchovlar",
          "Hoshiya",
          "Lerarxiya",
          "Panjara",
          "Barchasi birda"
        ]
      },
      {
        name: "Разработка рекламных компаниий",
        index: "2",
        themes: ["Simmetriya va asimmetriya", "O‘lchovlar", "Barchasi birda"]
      }, {
        name: "Маркетинговые исследования",
        index: "3",
        themes: ["Simmetriya va asimmetriya", "O‘lchovlar", "Barchasi birda"]
      }, {
        name: "Брендинг и дизайн",
        index: "4",
        themes: ["Simmetriya va asimmetriya", "O‘lchovlar", "Barchasi birda"]
      }, {
        name: "Influence marketing",
        index: "5",
        themes: ["Simmetriya va asimmetriya", "O‘lchovlar", "Barchasi birda"]
      }, {
        name: "Production",
        index: "6",
        themes: ["Simmetriya va asimmetriya", "O‘lchovlar", "Barchasi birda"]
      }, {
        name: "Медиаобслуживание",
        index: "7",
        themes: ["Simmetriya va asimmetriya", "O‘lchovlar", "Barchasi birda"]
      }, {
        name: "Координация работы маркетинга на аутсорс",
        index: "8",
        themes: ["Simmetriya va asimmetriya", "O‘lchovlar", "Barchasi birda"]
      }
    ]
  })
  }
import buttons from "~/components/buttons";
import sliderPartners from "~/components/sliderPartners";
import sliderPortfolio from '@/components/sliderPortfolio';
import servicesAccordion from '@/components/servicesAccordion';
import halfSlider from '@/components/halfSlider';



</script>
  
};


<style>
body {
  color: white;
  background: #141414 !important;
  font-family: "Montserrat";
  
}



.home_page h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 66px;
  line-height: 150% !important;
  color: #FFFFFF;
  margin-top:361px;
  margin-bottom: 100px;
  }

  .home_page h3 {
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 150%;
color: #FFFFFF;
opacity: 0.8;
  }


.half-page-slider {
  width: 150%;
}

.home_page {
  height: 100vh;
  background-image: url(~assets/images/home.png);
  background-repeat: no-repeat;
  background-size: cover;
}

a h2 {
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 39px;
  color: #ffffff;
  transition: all 0.4s;

}

a h2:hover {
  text-decoration: none;
  color: #811b7f;
}

a h2:hover svg path {
  fill: #811b7f;
  transition: all 0.4s;

}

a h2:hover svg path {
  fill: #811b7f;
  stroke: #811b7f;
  
}

a:hover {
  text-decoration: none;
  
}

.about {
  color: #ffffff;
  padding-top: 64px;
}

.portfolio {
  padding-top: 64px;
  transition: all 0.4s;
}

.services {
  padding-top: 64px;
}

.services .more {
  margin-bottom: 87px;
}

.team {
  padding-top: 126px;
}

h1 {
  font-style: normal;
  font-weight: 800;
  font-size: 96px;
  line-height: 117px;
  margin-top: 134px;
  margin-bottom: 64px;
}

.about p {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 155.9%;
  text-align: justify;
  color: #ffffff;
  opacity: 0.5;
  margin-bottom: 64px;
}

.about img {
  margin-top: 26px;
}

.number_of_projects {
  background: #1d1d1d;
  padding-top: 64px;
  padding-bottom: 64px;
}

.number_of_projects h2 {
  font-style: normal;
  font-weight: 800;
  font-size: 66px;
  line-height: 80px;
  color: #ffffff;
  text-shadow: 0px 4px 34px rgba(0, 0, 0, 0.65);
}

.number_of_projects h6 {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 155.9%;
  text-align: center;
  color: #ffffff;
  opacity: 0.8;
  margin-bottom: 64px;
}


.more {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  color: #ffffff;
  margin-top: 25px;
}

.line {
  width: 180px;
  height: 6px;
  background: #811b7f;
  border-radius: 4px;
}

.team p {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 155.9%;
  text-align: justify;
  color: #ffffff;
  opacity: 0.5;
  margin-top: 76px;
}

@media screen and (max-width: 1200px) {
 .home_page {
   height: 80vh;
 }
 
 .home_page h1 {
  font-size: 56px;
  margin-top: 20%;
  margin-bottom: 22px;
  }

  .home_page h3 {
font-size: 20px;
  }

  .number_of_projects h6 {
    font-size: 20px;
  }

}

@media screen and (max-width: 991px) {

.why_us {
  font-size: 60px!important;
}

.home_page {
   height: 70vh;
 }

 .home_page h1 {
  font-size: 46px;
  margin-top: 22%;
  margin-bottom: 35px;
  }

  .home_page h3 {
  font-size: 18px;
  }

  .more {
    margin-top: 15px;
  }


  .number_of_projects h6 {
    font-size: 16px;
  }

  .about h1 {
    font-size: 75px;
  }

  .about img {
    margin-top: 50px;
  }

  .text {
    font-size: 15px !important;
  }
}

@media screen and (max-width: 767px) {

.why_us {
  font-size: 45px!important;
}

.home_page {
  height: 50vh;
}
 .home_page h1 {
  font-size: 40px;
  margin-top: 23%;
  margin-bottom: 20px;
  }

  .home_page h3 {
  font-size: 14px;
  }

  .more {
    margin-top: 15px;
  }



  .number_of_projects h6 {
    font-size: 16px;
  }
  .about h1 {
    margin-top: 20px;
    font-size: 65px;
  }

  .about img {
    margin-top: 20px;
  }

  p {
    font-size: 19px;
  }
}

@media screen and (max-width: 576px) {
.why_us {
  font-size: 25px!important;
}

  .home_page h1 {
  font-size: 28px;
  line-height: 35px;
  margin-top: 250px;
  margin-bottom: 10px;
  }

  .home_page h3 {
  font-size: 9px;
  }

  .home_page {
    height: 40vh;
  }

  .about h1 {
    font-size: 40px !important;
  }

  .about_logo {
    display: none !important;
  }

  .number_of_projects h2 {
    font-size: 40px;
  }

   .number_of_projects h6 {
    font-size: 10px;
    margin-top: -30px;
  }

   .home_page .simple {
    font-size: 30px !important;
  }
  .home_page h1 {
    margin-top: 70px;
  }
  .more {
    display: none;
  }

  .about h2  {
    font-size: 25px;
  }

  .portfolio h2 {
    font-size: 9px;
  }

  svg {
    width: 44px;
    height: 44px;
  }

  .home_page .typewriter a  {
    font-size: 30px;
    margin-right: -50px;
  }

  
}
</style>
