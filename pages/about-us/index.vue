<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-12 ">
            <img src="@/assets/images/about.svg" alt="">
          </div>
        </div>
      </div>
        <div class="container-fluid">
        <slider-portfolio />
      </div>
      <div class="container article">
        <div class="row">
          <div class="col-12">
          <p class="text">
            We.Digital - это агентство, состоящее из специалистов в сфере диджитал маркетинга с 10-летним опытом работы. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
             magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru
          </p>
          <div class="text-center">
          <img src="@/assets/images/article2.png"  class="img-fluid" alt="">
          </div>
          <p class="text">
            We.Digital - это агентство, состоящее из специалистов в сфере диджитал маркетинга с 10-летним опытом работы. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
             magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
               <br><br>
            We.Digital - это агентство, состоящее из специалистов в сфере диджитал маркетинга с 10-летним опытом работы. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        </div>
      </div>
       <div class="container">
    <slider-partners />
    </div>
    </div>
</template>

<script>
export default  {
}
</script>

<style scoped >
body {
   font-family: "Montserrat";
}

img{
 margin-top: 197px;
  margin-bottom: 0px;
}

.article img {
  margin-top: 64px;
  margin-bottom: 64px;
}

.article p {
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 155.9%;
color: #FFFFFF;
opacity: 0.5;
}


@media screen and (max-width: 567px)  {
    img{
        margin-top: 70px;
        margin-bottom: 0px;
    }

    .list-of-services img{
        font-size: 20px;

}
.article p {
  font-size: 1rem;
}
}

</style>