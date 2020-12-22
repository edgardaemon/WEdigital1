<template>
    <div>
        <div class="container main">
            <div class="row">
                <div class="col-12 text-center">
                    <img src="@/assets/images/logo_contacts.png" alt="">
                </div>
            </div>
        </div>
        <div class="container">
        <div class="row contacts">
            <div class="offset-1">
            </div>
            <div class="col-10 d-flex justify-content-between">
                <div>
                    <h6>Электронная почта</h6>
                    <p>info@wedigital.uz</p>
                </div>
                <div>
                    <h6>Адрес</h6>
                    <p>
                        город Ташкент, Мирзо <br> Улугбекский район, <br> улица Ziyolilar, 1-й дом
                    </p>
                </div>
                <div>
                    <h6>Телефон</h6>
                    <p>+998 99 987 65 43</p>
                </div>
            </div>
        </div>
           <div class="row">
          <div class="col-12">
            <h2>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 32H56M8 16H30" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M8 48H45.5" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
                    </svg>&nbsp; 
                    Связаться с нами
            </h2>
          </div>
        </div>

    
            <form>
                <div class="row">
                    <div class="col-6 d-flex flex-column ">
                        <label for="name-of-company">Название Вашей компании</label>
                        <input type="text" id="name-of-company" placeholder="Компания">
                     </div>
                       <div class="col-6 d-flex flex-column ">
                        <label for="name-and-surname">Ваше имя и фамилия</label>
                        <input type="text" id="name-and-surname" placeholder="Имя и фамилия">
                     </div>
                       <div class="col-6 d-flex flex-column">
                        <label class="tel_and_purpose" for="telephone">Контактный телефон</label>
                        <input type="text" id="telephone" placeholder="+998 90 973 72 60">
                     </div>
                       <div class="col-6 d-flex flex-column">
                        <label class="tel_and_purpose" for="addres-of-company">Адрес сайта компании</label>
                        <input type="text" id="addres-of-company" placeholder="example.uz">
                     </div>
                     <div class="col-6 d-flex flex-column">
                        <label class="tel_and_purpose" for="links-of-socials">Ссылки на социальные сети компании</label>
                        <textarea name="links-of-socials" id="" placeholder="Каждую ссылку на новой строкке" cols="30" rows="8"></textarea>
                     </div>
                     <div  class="col-6 d-flex flex-column">
                        <label class="tel_and_purpose" for="purpose">Ваша цель обращения в агентство</label>
                        <textarea name="purpose" placeholder="Какую проблему вы хотитеб чтобы мы решили?" id="" cols="30" rows="8"></textarea>
                     </div>
                </div>
            </form>
        </div>
           <div class="container slide_logo">
    <slider-partners />
    </div>
    </div>
</template>

<style scoped>


.main img {
    margin-top: 437px;
    margin-bottom: 217px;
}

.contacts h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 155.9%;
    color: #FFFFFF;
}

.contacts p {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 155.9%;
    color: #FFFFFF;
    opacity: 0.5;
    margin-bottom: 120px;
}

form {
    margin-top: 64px;
}

form label {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 155.9%;
    color: #FFFFFF;
    margin-bottom: 12px;

}



form input {
    height: 69px;
    padding: 16px 24px 16px 24px;
    background: #141311;
    border: 1px solid #ffffff;
    border-radius: 4px;
    font-weight: bold;
    font-size: 24px;
    line-height: 155.9%;
    color: #FFFFFF;
}

.tel_and_purpose {
    margin-top: 32px;
}

form input::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 155.9%;
    color: #FFFFFF;
    opacity: 0.2;
}

form textarea {
    padding: 16px 24px 16px 24px;
    background: #141311;
    border: 1px solid #ffffff;
    border-radius: 4px;
    font-weight: bold;
    font-size: 24px;
    line-height: 155.9%;
    color: #FFFFFF;
}


form textarea::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 155.9%;
    color: #FFFFFF;
    opacity: 0.2;
}
</style>