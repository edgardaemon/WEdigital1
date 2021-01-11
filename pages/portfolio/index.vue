<template>
  <div>
    <section>
      <div class="container-fluid slider">
        <slider-portfolio />
      </div>
    </section>

    <div class="done">
      <div class="container">
        <div class="row">
          <div class="offset-md-1"></div>
          <div class="col-12 col-md-10">
            <h2>Задача</h2>
          </div>
        </div>
        <div class="row">
          <div class="offset-md-1"></div>
          <div class="col-12 col-md-10">
            <p class="text1 text-left">
              We.Digital - это агентство, состоящее из специалистов в сфере
              диджитал маркетинга с 10-летним опытом работы. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <img src="@/assets/images/task.png" class="img-fluid" alt="" />
            <span>Photo by: Lorem ipsum dolor sit amet</span>
          </div>
        </div>
        <div class="row">
          <div class="offset-md-1"></div>
          <div class="col-12 col-md-10">
            <h2>Решение</h2>
            <p class="text1 text-left">
              We.Digital - это агентство, состоящее из специалистов в сфере
              диджитал маркетинга с 10-летним опытом работы. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <img src="@/assets/images/task.png" class="img-fluid" alt="" />
            <span>Photo by: Lorem ipsum dolor sit amet</span>
          </div>
        </div>
        <div class="row">
          <div class="offset-md-1"></div>
          <div class="col-12 col-md-10">
            <h2>Результаты</h2>
          </div>
          <div class="row">
            <div class="offset-md-1"></div>
            <div class="col-12 col-md-6">
              <p>
                We.Digital - это агентство, состоящее из специалистов в сфере
                диджитал маркетинга с 10-летним опытом работы.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="offset-md-1"></div>
          <div class="col-4 col-md-3">
            <h1>+6%</h1>
            <p>Amet ipsum dolor</p>
          </div>
          <div class="offset-md-1"></div>
          <div class="col-4 col-md-3">
            <h1>+7%</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div class="offset-md-1"></div>
          <div class="col-4 col-md-3">
            <h1>3x</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div class="row">
          <div class="offset-md-1"></div>
          <div class="col-12 col-md-6">
            <p>
              We.Digital - это агентство, состоящее из специалистов в сфере
              диджитал маркетинга с 10-летним опытом работы.
            </p>
          </div>
        </div>
      </div>
    </div>
    <buttons />
  </div>
</template>

<style lang="scss" scoped>
.slider {
  padding-top: 100px;
}

.done {
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 120px;
  font-family: "Montserrat";
}

p {
  margin-top: 77px;
  margin-bottom: 64px;
  font-style: normal;
  font-weight: 450;
  font-size: 22px;
  line-height: 155.9%;
  color: #ffffff;
  opacity: 0.5;
}

.done {
  h2 {
    font-style: normal;
    font-weight: 750;
    font-size: 32px;
    line-height: 39px;
    color: #ffffff;
    margin-top: 128px;
  }

  img {
    margin-top: 64px;
  }
  span {
    font-style: normal;
    font-weight: 450;
    font-size: 15px;
    line-height: 155.9%;
    color: #ffffff;
    opacity: 0.5;
  }

  h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 132px;
    line-height: 161px;
    color: #ffffff;
    opacity: 0.5;
  }
}

@media screen and (max-width: 991px) {
}
p {
  margin-top: 25px;
  margin-bottom: 10px;
  font-size: 20px;
}
.done {
  h2 {
    margin-top: 30px;
    margin-bottom: 0px;
  }

  span {
    font-size: 12px;
  }

  img {
    margin-top: 30px;
  }
  h1 {
    font-size: 100px;
  }
}
@media screen and (max-width: 767px) {
  .slider {
    padding-top: 10px;
  }

  .done img {
    margin-top: 10px;
  }

  .done h2 {
    margin-top: 30px;
  }

  p {
    font-size: 19px;
    margin-top: 10px;
  }
  .done {
    margin-top: 0px;

    h1 {
      font-size: 80px;
    }
  }
}

@media screen and (max-width: 576px) {
  .done .container h2 {
    font-size: 22px !important;
  }

  .done .container h2 svg {
    width: 35px;
  }
p {
  font-size: 11px;
}

.done {
    h1 {
    font-size: 45px;
    line-height: 50px;
  }
}
}


</style>