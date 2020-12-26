<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
      <h1>
        О <span class="web-kit">НАС</span>
      </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h2>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 32H56M8 16H30" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M8 48H45.5" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>&nbsp; 
Наша деятельность в изображениях
            </h2>
          </div>
        </div>
      </div>
        <div class="container-fluid">
        <slider-portfolio />
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

h1 {
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

@media screen and (max-width: 567px)  {
    h1 {
      font-size: 65px !important;
        margin-top: 70px;
        margin-bottom: 70px;
    }

    .list-of-services h1 {
        font-size: 20px;
    }
    h2 {
    font-size: 18px !important;
    margin-bottom: -200px;
    line-height: 18px;
    }

    h2 svg {
      width: 30px;
    }

}

</style>