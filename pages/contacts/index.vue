<template>
    <div>
        <div class="container main">
        <div class="row contacts">
            <div class="offset-md-1">
            </div>
            <div class="col-12 col-md-10 d-flex justify-content-between">
                <div>
                    <h6>Электронная почта</h6>
                    <p class="text">info@wedigital.uz</p>
                </div>
                <div>
                    <h6>Адрес</h6>
                    <p class="text">
                        город Ташкент, Мирзо <br> Улугбекский район, <br> улица Ziyolilar, 1-й дом
                    </p>
                </div>
                <div>
                    <h6>Телефон</h6>
                    <p class="text">+998 99 987 65 43</p>
                </div>
            </div>
        </div>
           <div class="row">
          <div class="col-12">
           <img src="@/assets/images/contacts.svg" class="img-fluid" alt="">
          </div>
        </div>

    
            <form>
                <div class="row">
                    <div class="col-12 d-flex flex-column ">
                        <label for="name-of-company">Название Вашей компании</label>
                        <input type="text" id="name-of-company" autocomplete="none" placeholder="Компания">
                     </div>
                       <div class="col-6 d-flex flex-column">
                        <label class="tel_and_purpose" for="addres-of-company">Адрес сайта компании</label>
                        <input type="text" id="addres-of-company" autocomplete="none" placeholder="example.uz">
                     </div>
                       <div class="col-6 d-flex flex-column ">
                        <label class="tel_and_purpose" for="name-and-surname">Ваше имя и фамилия</label>
                        <input type="text" id="name-and-surname" autocomplete="none" placeholder="Имя и фамилия">
                     </div>
                     <div class="col-6 d-flex flex-column">
                        <label class="tel_and_purpose" for="links-of-socials">Ссылки на социальные сети компании</label>
                        <input type="text" id="name-and-surname" autocomplete="none" placeholder="Каждую ссылку на новой строкке">
                        
                     </div>
                       <div class="col-6 d-flex flex-column">
                        <label class="tel_and_purpose" for="telephone">Контактный телефон</label>
                        <input type="text" id="telephone" autocomplete="none" placeholder="+998 90 973 72 60">
                     </div>
                     <div  class="col-12 d-flex flex-column">
                        <label class="tel_and_purpose" for="purpose">Ваша цель обращения в агентство</label>
                        <textarea name="purpose" placeholder="Какую проблему вы хотите чтобы мы решили?" autocomplete="off" id="" cols="30" rows="8"></textarea>
                     </div>
                     <div class="col-12 text-right">
                         <button>Отправить</button>
                     </div>
                </div>
            </form>
        </div>
           <div class="container slide_logo">
    <slider-partners />
    </div>
    </div>
</template>

<style lang="scss" scoped>


.main {
    padding-top: 230px;
    padding-bottom: 120px;
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
    font-weight: 300;
}

form {
    margin-top: 64px;

    button {
        width: 384px;
        height: 64px;
        background: transparent;
        border: 1px solid white;
        border-radius: 4px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 32px;
        transition: 0.5s all;

        &:hover {
        background: #81007F;
        
        }
    }
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

@media screen and (max-width: 991px) {
.contacts h6 {
    font-size: 20px;
    text-align: center;
}

form {
    button {
        width: 300px;
        height: 60px;
    }
}


h2 {
    font-size: 25px;
}

.row h2 svg {
    width: 42px;
}


form label {
    font-size: 22px;
}

form input::placeholder {
    font-size: 20px;
}
}

@media screen and (max-width: 768px) {

form {
    button {
        font-size: 19px;
        margin-top: 124px;
        width: 160px;
        height: 46px;
        font-weight: 500;
        letter-spacing: 0.5px;
    }
}

.main {
    padding-top: 120px;
    padding-bottom: 32px;
}

.contacts h6 {
    font-size: 19px;
    font-weight: 500;
    text-align: center;
}

.contacts p {
    font-size: 14px !important;
    margin-bottom: 40px;
}

.row h2 {
    font-size: 20px!important;
}

.row h2 svg {
    width: 35px;
}


form label {
    font-size: 15px;
}

form input::placeholder {
    font-size: 15px;
}

form input {
    height: 40px;
    padding: 10px;
}

form textarea::placeholder {
    font-size: 15px;

}

form input {
    font-size: 15px;
}

form textarea {
    font-size: 15px;
    padding: 7px;
    margin-bottom: -100px;
}

}

@media screen and (max-width: 576px) {
.contacts h6 {
    font-size: 12px;
    font-weight: 500;
    text-align: center;
}

form {
    button {
        font-size: 9px;
          margin-top: 112px;
    width: 73px;
    height: 33px;
        font-weight: 500;
        letter-spacing: 0.5px;
    }
}

.contacts p {
    font-size: 10px !important;
    margin-bottom: 40px;
}






.row h2 {
    font-size: 15px;
}

.row h2 svg {
    width: 28px;
}


form label {
    font-size: 9px;
}

form input::placeholder {
    font-size: 10px;
}

form input {
    height: 25px;
    padding-top: 5px;
}

form input {
    font-size: 10px;
}

form textarea {
    font-size: 10px;
    padding: 7px;
}

form textarea::placeholder {
    font-size: 10px;

}
}
</style>