<template>
<div class="container">
          <div class="row">
          <div class="col-12 text-center">
            <h5>
              Интересно? Тогда свяжитесь с нами и воспользуйтесь нашими
              услугами!
            </h5>
          </div>
          <div class="offset-2"></div>
          <div class="col-4">
            <NuxtLink to="/contacts"> <button>Контакты</button></NuxtLink>
          </div>
          <div class="col-4">

           <NuxtLink to="/contacts"><button>Обратная связь</button></NuxtLink>
          </div>
        </div>
        </div>
</template>

<style scoped>

 button {
  margin-top: 32px;
  margin-bottom: 120px;
  width: 100%;
  height: 64px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #FFFFFF;
  background: none;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;
  transition: all 0.4s;

}

 button:hover  {
  background: #811b7f;
}

h5 {
  margin-top: 130px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 155.9%;
  color: #FFFFFF;
  opacity: 0.8;
}

@media screen and (max-width: 991px){
    
    button {
      font-size: 20px;
    }

}

@media screen and (max-width: 767px){

    button {
      font-size: 16px;
      height: 40px;
      margin-bottom: 20px;
    }

h5 {
  margin-top: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 155.9%;
  color: #FFFFFF;
  opacity: 0.8;
}


}

@media screen and (max-width: 576px){
      
button {
      font-size: 10px;
      padding: 0;
      margin-bottom: 20px;
    }


h5 {
  margin-top: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 155.9%;
  color: #FFFFFF;
  opacity: 0.8;
}

}
</style>