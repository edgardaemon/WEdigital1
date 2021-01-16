<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 services">
                    <img src="@/assets/images/services.svg"  alt="">
                </div>
            </div>
           
            <div class="row list-of-services">
                <div class="col-2">
                    <img class="img-fluid" src="@/assets/images/services1.png" alt="">
                </div>
                <div class="col-10">
                    <h1>{{$t("SMM")}}</h1>
                    <p class="text">
                      {{$t("text_services1")}}
                    </p>
                </div>
                  <div class="col-2">
                    <img class="img-fluid" src="@/assets/images/services2.png" alt="">
                </div>
                <div class="col-10">
                    <h1>{{$t("ad_companies")}}</h1>
                    <p class="text">
                      {{$t("text_services2")}}
                    </p>
                </div>
                  <div class="col-2">
                    <img class="img-fluid" src="@/assets/images/services3.png" alt="">
                </div>
                <div class="col-10">
                    <h1>{{$t("marketing_research")}}</h1>
                    <p class="text">
                      {{$t("text_services3")}}
                    </p>
                </div>
                  <div class="col-2">
                    <img class="img-fluid" src="@/assets/images/services4.png" alt="">
                </div>
                <div class="col-10">
                    <h1>{{$t("branding_and_design")}}</h1>
                    <p class="text">
                      {{$t("text_services4")}}
                    </p>
                </div>
                <div class="col-2">
                    <img class="img-fluid" src="@/assets/images/services5.png" alt="">
                </div>
                <div class="col-10">
                    <h1>{{$t("influince_marketing")}}</h1>
                    <p class="text">
                      {{$t("text_services5")}}
                    </p>
                </div>
                <div class="col-2">
                    <img class="img-fluid" src="@/assets/images/services6.png" alt="">
                </div>
                <div class="col-10">
                    <h1>{{$t("production")}}</h1>
                    <p class="text">
                      {{$t("text_services6")}}
                    </p>
                </div>
                <div class="col-2">
                    <img class="img-fluid" src="@/assets/images/services7.png" alt="">
                </div>
                <div class="col-10">
                    <h1>{{$t("media_service")}}</h1>
                    <p class="text">
                      {{$t("text_services7")}}
                    </p>
                </div>
                <div class="col-2">
                    <img class="img-fluid" src="@/assets/images/services8.png" alt="">
                </div>
                <div class="col-10">
                    <h1>{{$t("coordination_of_work")}}</h1>
                    <p class="text">
                      {{$t("text_services8")}}
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
<script>
export default {
  scrollToTop: true,
    
}
</script>
<style> 


body {
  background: #141414;
  font-family: "Montserrat";
}

.services {
    padding-top: 230px !important;
    padding-bottom: 64px;
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

.services {
    padding-top: 150px;
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