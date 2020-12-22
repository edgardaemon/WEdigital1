<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                     <h1 class="head_text">
                            Наши <span class="web-kit">  услуги</span>
                    </h1>
                </div>
            </div>
            <div class="row">
                <h2>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 32H56M8 16H30" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M8 48H45.5" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
</svg> &nbsp; 
Наши услуги
                </h2>
            </div>
            <div class="row list-of-services">
                <div class="col-2">
                    <img class="img-fluid" src="@/assets/images/graphic.png" alt="">
                </div>
                <div class="col-10">
                    <h1>Графический дизайн</h1>
                    <p class="text">
                        We.Digital - это агентство, состоящее из специалистов в сфере диджитал маркетинга с 10-летним опытом работы. 
                        Нам важно, с кем мы работаем, важно, какие у всех нас цели и принципы. Мы не просто делаем рекламу, мы создаем идею,
                         которая отвечает на потребности бизнеса и становится частью жизни потребителей.
                    </p>
                </div>
                  <div class="col-2">
                    <img class="img-fluid" src="@/assets/images/social.png" alt="">
                </div>
                <div class="col-10">
                    <h1>social media marketing</h1>
                    <p class="text">
                        We.Digital - это агентство, состоящее из специалистов в сфере диджитал маркетинга с 10-летним опытом работы. 
                        Нам важно, с кем мы работаем, важно, какие у всех нас цели и принципы. Мы не просто делаем рекламу, мы создаем идею,
                         которая отвечает на потребности бизнеса и становится частью жизни потребителей.
                    </p>
                </div>
                  <div class="col-2">
                    <img class="img-fluid" src="@/assets/images/production.png" alt="">
                </div>
                <div class="col-10">
                    <h1>production</h1>
                    <p class="text">
                        We.Digital - это агентство, состоящее из специалистов в сфере диджитал маркетинга с 10-летним опытом работы. 
                        Нам важно, с кем мы работаем, важно, какие у всех нас цели и принципы. Мы не просто делаем рекламу, мы создаем идею,
                         которая отвечает на потребности бизнеса и становится частью жизни потребителей.
                    </p>
                </div>
                  <div class="col-2">
                    <img class="img-fluid" src="@/assets/images/media.png" alt="">
                </div>
                <div class="col-10">
                    <h1>медиа обслуживание</h1>
                    <p class="text">
                        We.Digital - это агентство, состоящее из специалистов в сфере диджитал маркетинга с 10-летним опытом работы. 
                        Нам важно, с кем мы работаем, важно, какие у всех нас цели и принципы. Мы не просто делаем рекламу, мы создаем идею,
                         которая отвечает на потребности бизнеса и становится частью жизни потребителей.
                    </p>
                </div>
                
            </div>
        </div>
        <buttons />
         <div class="container">
    <slider-partners />
    </div>
    </div>
</template>

<style> 


body {
  background: #141311 !important;
  font-family: "Montserrat";
}

.head_text  {
 margin-top: 230px;
  margin-bottom: 120px;
  font-weight: 800;
  font-size: 96px;
  line-height: 117px;
  color: white;
   text-transform: uppercase;
}

.web-kit {
 
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white !important;
}

.web-kit:hover {
  text-decoration: none;
  -webkit-text-fill-color: white;
}

h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #FFFFFF;
}

.list-of-services h1 {
    margin-top: 65px;
    margin-bottom: 16px;
    margin-left: -105px;
    font-style: normal;
    font-weight: 800;
    font-size: 66px;
    line-height: 80px;
    color: #FFFFFF;
    text-shadow: 0px 4px 34px rgba(0, 0, 0, 0.65);
    text-transform: uppercase;
}

.list-of-services p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 155.9%;
    text-align: justify;
    color: #FFFFFF;
    opacity: 0.5;
}

@media screen and (max-width: 991px) {
   .head_text  {
  font-size: 80px;
}

.list-of-services h1 {
    font-size: 60px;
}
}

@media screen and (max-width: 767px) {

    
 h2 {
     font-size: 25px!important;
 }   

   .head_text  {
  font-size: 60px;
}

.list-of-services img {
    display: none;
}

.list-of-services h1 {
    margin-left: -50px;
    font-size: 30px;
    margin-top: 0;
}
}

@media screen and (max-width: 567px)  {
    .head_text {
        margin-top: 70px;
        margin-bottom: 70px;
        font-size: 35px;
    }

    .list-of-services h1 {
        font-size: 20px;
    }
}

</style>