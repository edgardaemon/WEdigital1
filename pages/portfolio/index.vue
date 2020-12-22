<template>
    <div>
        <section>
        <div class="container">
          <div class="row">
                <div class="col-12 text-center">
                     <h1 class="head_text">
                            Наше <span class="web-kit">  портфолио</span>
                    </h1>
                </div>
            </div>
            </div>
               <div class="container-fluid slider">
        <slider-portfolio />
      </div>
            </section>

            <div class="done">    
            <div class="container">
                <div class="row">
                    <div class="col-12">

                    <h2><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 32H56M8 16H30" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M8 48H45.5" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
                        </svg>&nbsp;  Выполненные задачи
                    </h2>
                    </div>
                </div>
                <div class="row">

                <div class="offset-1">
                </div>
                <div class="col-10">
                    <p class="text">
                        We.Digital - это агентство, состоящее из специалистов в сфере диджитал маркетинга с 10-летним опытом работы. Lorem ipsum dolor sit amet,
                         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                </div>
            </div>
            </div>
            <buttons/>
    </div>
</template>

<style scoped>
.slider {
    margin-top: -220px;
}



section h1 {
    margin-top: 220px;
    margin-bottom: 180px;
}

.done {
    background-image: url(~assets/images/golden.png);
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 120px;
}

p {
    margin-top: 77px;
    margin-bottom: 64px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 155.9%;
    text-align: justify;
    color: #FFFFFF;
    opacity: 0.8;
}

 .done {
    margin-top: 50px;
}

@media screen and (max-width: 991px) {



  section h1 {
    font-size: 63px;
  }

  .text {
    font-size: 15px !important;
  }
}


.done {
    margin-top: 150px;
}
@media screen and (max-width: 767px) {

  .section h1 {
    margin-top: 140px;
  }

 section h1 {
    margin-top: 100px;
    font-size: 43px;
  }

  p {
    font-size: 19px;
  }
  .done {
    margin-top: 150px;
}
}

@media screen and (max-width: 576px) {
  
section h1 {
    font-size: 35px;
    margin-top: 100px;
  }

    

}
</style>