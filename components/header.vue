<template>
  <div>
    <div
      class="menu"
      :class="{ sidebarActive: sidebar }"
    >
      <div class="container">
        <div class="toggled_menu">
          <div class="row justify-content-between nav_of_toggled_menu">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5" clip-path="url(#clip0)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 0C9.62663 0 7.30656 0.703839 5.33317 2.02242C3.35978 3.34099 1.82169 5.21513 0.913437 7.40785C0.00518554 9.60056 -0.232436 12.0133 0.230587 14.3411C0.69361 16.6689 1.8365 18.8071 3.51473 20.4853C5.19296 22.1635 7.33115 23.3065 9.65892 23.7695C11.9867 24.2325 14.3995 23.9949 16.5922 23.0866C18.7849 22.1783 20.6591 20.6403 21.9777 18.6669C23.2962 16.6935 24 14.3734 24 12C23.9964 8.81851 22.7309 5.76834 20.4813 3.51869C18.2316 1.26903 15.1815 0.00360918 12 0ZM22.3636 11.4545H18.5455C18.3818 7.87091 16.8595 4.20545 14.3127 1.90363C16.5091 2.40672 18.4824 3.61051 19.9346 5.33336C21.3869 7.05622 22.2395 9.20467 22.3636 11.4545ZM10.9091 2.18182V11.4545H7.09092C7.24692 8.03454 8.59474 4.09091 10.9091 2.18182ZM10.9091 13.0909V21.8182C8.75619 19.92 7.40128 16.1455 7.09092 13.0909H10.9091ZM12.5455 21.8182V13.0909H16.8987C16.5415 16.1945 14.9411 19.9145 12.5455 21.8182ZM12.5455 11.4545V2.18182C15.1216 4.08545 16.7291 7.99091 16.9091 11.4545H12.5455ZM9.35563 1.99086C6.96436 4.25449 5.60399 7.82727 5.45509 11.4545H1.66364C1.77829 9.26579 2.58496 7.17 3.96737 5.46919C5.34977 3.76839 7.2365 2.55038 9.35563 1.99086ZM1.69473 13.0909H5.44799C5.75181 16.4291 6.95892 19.5927 9.27273 21.8182C7.25085 21.3481 5.42929 20.2509 4.06831 18.6835C2.70733 17.1162 1.87656 15.1587 1.69473 13.0909ZM14.1857 22.1291C16.6742 19.7356 18.2212 16.5285 18.5455 13.0909H22.3636C22.1198 15.2645 21.1991 17.3065 19.7316 18.9283C18.2641 20.5501 16.3241 21.6698 14.1857 22.1291Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              &nbsp;<select name="languages" id="languages" >
                <option value="Русский">Русский</option>
                <option value="O‘zbekcha">O‘zbekcha</option>
                <option value="English">English</option>
              </select>
            </div>
            <div>
              <NuxtLink to="/" >
               <img src="@/assets/images/logo_toggled.svg"  @click="sidebar = false" alt="">
              </NuxtLink>
            </div>
            <div>
              <svg
                @click="sidebar = false"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.9429 7.05727C25.4636 7.57797 25.4636 8.42219 24.9429 8.94289L8.94289 24.9429C8.42219 25.4636 7.57797 25.4636 7.05727 24.9429C6.53657 24.4222 6.53657 23.578 7.05727 23.0573L23.0573 7.05727C23.578 6.53657 24.4222 6.53657 24.9429 7.05727Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.05727 7.05727C7.57797 6.53657 8.42219 6.53657 8.94289 7.05727L24.9429 23.0573C25.4636 23.578 25.4636 24.4222 24.9429 24.9429C24.4222 25.4636 23.578 25.4636 23.0573 24.9429L7.05727 8.94289C6.53657 8.42219 6.53657 7.57797 7.05727 7.05727Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div class="row">
            <div class="col-12 text-right">
              <NuxtLink to="/about-us"> <h1 @click="sidebar = false">О НАС</h1></NuxtLink>
              <NuxtLink to="/services"> <h1  @click="sidebar = false">УСЛУГИ</h1></NuxtLink>
              <NuxtLink to="/portfolio"> <h1  @click="sidebar = false">ПОРТФОЛИО</h1></NuxtLink>
              <NuxtLink to="/team"> <h1  @click="sidebar = false">КОМАНДА</h1></NuxtLink>
            </div>
          </div>
          <div class="row">
            <div class="col-5">
              <p class="text">г.Ташкент, Мирзо-Улугбекский район, улица Зиёлилар, 1</p>
              <p class="telephone">
                <strong> +998 99 987 65 43 </strong>
              </p>
            </div>
            <div class="col-7 text-right">
              <NuxtLink to="/blog"> <h1  @click="sidebar = false">БЛОГ</h1></NuxtLink>
            </div>
          </div>
          <div class="row justify-content-between toggled_menu_footer">
            <div>
              <NuxtLink to="/contacts">
                <button class="call_back"  @click="sidebar = false">Обратная связь</button></NuxtLink
              >
            </div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4.3085C23.1075 4.7 22.1565 4.9595 21.165 5.0855C22.185 4.4765 22.9635 3.5195 23.3295 2.366C22.3785 2.933 21.3285 3.3335 20.2095 3.557C19.3065 2.5955 18.0195 2 16.6155 2C13.8915 2 11.6985 4.211 11.6985 6.9215C11.6985 7.3115 11.7315 7.6865 11.8125 8.0435C7.722 7.844 4.1025 5.8835 1.671 2.897C1.2465 3.6335 0.9975 4.4765 0.9975 5.384C0.9975 7.088 1.875 8.5985 3.183 9.473C2.3925 9.458 1.617 9.2285 0.96 8.867C0.96 8.882 0.96 8.9015 0.96 8.921C0.96 11.312 2.6655 13.298 4.902 13.7555C4.5015 13.865 4.065 13.9175 3.612 13.9175C3.297 13.9175 2.979 13.8995 2.6805 13.8335C3.318 15.782 5.127 17.2145 7.278 17.261C5.604 18.5705 3.4785 19.3595 1.1775 19.3595C0.774 19.3595 0.387 19.3415 0 19.292C2.1795 20.6975 4.7625 21.5 7.548 21.5C16.602 21.5 21.552 14 21.552 7.499C21.552 7.2815 21.5445 7.0715 21.534 6.863C22.5105 6.17 23.331 5.3045 24 4.3085Z"
                  fill="white"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8.25H13.5V5.25C13.5 4.422 14.172 3.75 15 3.75H16.5V0H13.5C11.0145 0 9 2.0145 9 4.5V8.25H6V12H9V24H13.5V12H16.5L18 8.25Z"
                  fill="white"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.3839 22.7791C18.7059 23.0071 19.1209 23.0641 19.4909 22.9241C19.8609 22.7831 20.1329 22.4671 20.2149 22.0841C21.0839 18.0001 23.1919 7.66315 23.9829 3.94815C24.0429 3.66815 23.9429 3.37715 23.7229 3.19015C23.5029 3.00315 23.1979 2.94915 22.9259 3.05015C18.7329 4.60215 5.81991 9.44715 0.54191 11.4001C0.20691 11.5241 -0.0110904 11.8461 -9.04276e-05 12.1991C0.0119096 12.5531 0.24991 12.8601 0.59291 12.9631C2.95991 13.6711 6.06691 14.6561 6.06691 14.6561C6.06691 14.6561 7.51891 19.0411 8.27591 21.2711C8.37091 21.5511 8.58991 21.7711 8.87891 21.8471C9.16691 21.9221 9.47491 21.8431 9.68991 21.6401C10.9059 20.4921 12.7859 18.7171 12.7859 18.7171C12.7859 18.7171 16.3579 21.3361 18.3839 22.7791ZM7.37391 14.1021L9.05291 19.6401L9.42591 16.1331C9.42591 16.1331 15.9129 10.2821 19.6109 6.94715C19.7189 6.84915 19.7339 6.68515 19.6439 6.57015C19.5549 6.45515 19.3909 6.42815 19.2679 6.50615C14.9819 9.24315 7.37391 14.1021 7.37391 14.1021Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 0H7.5C3.3585 0 0 3.3585 0 7.5V16.5C0 20.6415 3.3585 24 7.5 24H16.5C20.6415 24 24 20.6415 24 16.5V7.5C24 3.3585 20.6415 0 16.5 0ZM21.75 16.5C21.75 19.395 19.395 21.75 16.5 21.75H7.5C4.605 21.75 2.25 19.395 2.25 16.5V7.5C2.25 4.605 4.605 2.25 7.5 2.25H16.5C19.395 2.25 21.75 4.605 21.75 7.5V16.5Z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M12 6C8.6865 6 6 8.6865 6 12C6 15.3135 8.6865 18 12 18C15.3135 18 18 15.3135 18 12C18 8.6865 15.3135 6 12 6ZM12 15.75C9.933 15.75 8.25 14.067 8.25 12C8.25 9.9315 9.933 8.25 12 8.25C14.067 8.25 15.75 9.9315 15.75 12C15.75 14.067 14.067 15.75 12 15.75Z"
                  fill="url(#paint1_linear)"
                />
                <path
                  d="M18.4494 6.34948C18.891 6.34948 19.2489 5.99153 19.2489 5.54998C19.2489 5.10844 18.891 4.75049 18.4494 4.75049C18.0079 4.75049 17.6499 5.10844 17.6499 5.54998C17.6499 5.99153 18.0079 6.34948 18.4494 6.34948Z"
                  fill="url(#paint2_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="3.51557"
                    y1="20.4867"
                    x2="20.4844"
                    y2="3.51557"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="0.507" stop-color="white" />
                    <stop offset="0.99" stop-color="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="7.75779"
                    y1="16.2433"
                    x2="16.2422"
                    y2="7.75779"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="0.507" stop-color="white" />
                    <stop offset="0.99" stop-color="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="17.8841"
                    y1="6.11541"
                    x2="19.0147"
                    y2="4.98471"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="0.507" stop-color="white" />
                    <stop offset="0.99" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <p  style="margin-top: 12px">© 2020 WeDigital</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="top_menu">
      <div class="container">
        <div
          class="row navbar justify-content-between align-items-center"
          :class="{ hideMenu: sidebar }"
        >
          <div class="logo">
            <NuxtLink to="/">
             <img src="@/assets/images/logo_header.svg" class="img-fluid" alt=""> 
            </NuxtLink>
          </div>
          <div class="text_links">
            <ul class="d-flex">
              <li><NuxtLink to="/about-us"> О нас </NuxtLink></li>
              <li><NuxtLink to="/services"> Услуги </NuxtLink></li>
              <li><NuxtLink to="/portfolio">Портфолио </NuxtLink></li>
              <li><NuxtLink to="/team"> Команда </NuxtLink></li>
              <li><NuxtLink to="/blog">Блог </NuxtLink></li>
            </ul>
          </div>
          <div>
            <ul class="d-flex align-items-center tel">
              <li>+998 99 987 65 43</li>
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5" clip-path="url(#clip0)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 0C9.62663 0 7.30656 0.703839 5.33317 2.02242C3.35978 3.34099 1.82169 5.21513 0.913437 7.40785C0.00518554 9.60056 -0.232436 12.0133 0.230587 14.3411C0.69361 16.6689 1.8365 18.8071 3.51473 20.4853C5.19296 22.1635 7.33115 23.3065 9.65892 23.7695C11.9867 24.2325 14.3995 23.9949 16.5922 23.0866C18.7849 22.1783 20.6591 20.6403 21.9777 18.6669C23.2962 16.6935 24 14.3734 24 12C23.9964 8.81851 22.7309 5.76834 20.4813 3.51869C18.2316 1.26903 15.1815 0.00360918 12 0ZM22.3636 11.4545H18.5455C18.3818 7.87091 16.8595 4.20545 14.3127 1.90363C16.5091 2.40672 18.4824 3.61051 19.9346 5.33336C21.3869 7.05622 22.2395 9.20467 22.3636 11.4545ZM10.9091 2.18182V11.4545H7.09092C7.24692 8.03454 8.59474 4.09091 10.9091 2.18182ZM10.9091 13.0909V21.8182C8.75619 19.92 7.40128 16.1455 7.09092 13.0909H10.9091ZM12.5455 21.8182V13.0909H16.8987C16.5415 16.1945 14.9411 19.9145 12.5455 21.8182ZM12.5455 11.4545V2.18182C15.1216 4.08545 16.7291 7.99091 16.9091 11.4545H12.5455ZM9.35563 1.99086C6.96436 4.25449 5.60399 7.82727 5.45509 11.4545H1.66364C1.77829 9.26579 2.58496 7.17 3.96737 5.46919C5.34977 3.76839 7.2365 2.55038 9.35563 1.99086ZM1.69473 13.0909H5.44799C5.75181 16.4291 6.95892 19.5927 9.27273 21.8182C7.25085 21.3481 5.42929 20.2509 4.06831 18.6835C2.70733 17.1162 1.87656 15.1587 1.69473 13.0909ZM14.1857 22.1291C16.6742 19.7356 18.2212 16.5285 18.5455 13.0909H22.3636C22.1198 15.2645 21.1991 17.3065 19.7316 18.9283C18.2641 20.5501 16.3241 21.6698 14.1857 22.1291Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                &nbsp;<select name="languages" id="languages">
                  <option value="Русский">Русский</option>
                  <option value="O‘zbekcha">O‘zbekcha</option>
                  <option value="English">English</option>
                </select>
              </li>
            </ul>
          </div>
          <div class="toggler-btn">
            <button id="toggler-btn" @click="sidebar = true">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 16H28M4 8H28M4 24H28"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({
    sidebar: false,
  }),
};
</script>


<style scoped>
* {
  box-sizing: border-box;
  font-family: "Montserrat";
}

.top_menu {
  position: fixed;
  z-index: 19;
  width: 100%;
  background: #141311;
}

select {
  background: none;
  color: white;
  border: none;
  outline: none;
}

select option {
  background: #141311;
  color: white;
  border: none;
  outline: none;
}

a {
  color: white;
}

a:hover {
  opacity: 0.3;
  text-decoration: none;
}

ul {
  list-style-type: none;
}

ul li {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}

.tel li {
  margin-right: 41px;
}

.text_links li {
  margin-left: 30px;
}

.text_links {
  margin-left: -5%;
}

.navbar {
  padding: 1%;
  transition: 0.4s all;
}

.text_links {
  padding-top: 12px;
}

.tel {
  padding-top: 12px;
}

.tel svg {
  margin-top: -5px;
}

.toggler-btn button {
  background: none;
  outline: none;
  border: none;
  margin-top: 3px;
}

.toggled_menu {
  margin-top: 60px;
  height: 90vh;
  width: 100%;
}

.nav_of_toggled_menu {
  margin-bottom: 10%;
}

.toggled_menu h1 {
  font-size: 76px;
  color: white;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  font-style: normal;
  font-weight: 800;
  font-size: 76px;
  line-height: 93px;
  opacity: 0.7;
  margin-bottom: 16px;
  margin-top: 0;
}

.toggled_menu h1:hover {
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  opacity: 1;
}

.toggled_menu p {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 155.9%;
  color: #ffffff;
  opacity: 0.8;
  letter-spacing: 0.5px;
}

.telephone {
  font-style: normal;
  font-size: 24px;
  line-height: 29px;
  opacity: 1;
  margin-bottom: 64px;
}

.call_back {
  background: transparent;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
  width: 126%;
  height: 100%;
}

.call_back:hover {
  background: #81007f;
  opacity: 1;
}

.toggled_menu_footer a:hover {
  opacity: 1;
}

.toggled_menu_footer svg {
  margin-left: 20px;
  margin-top: 20px;
}

.toggled_menu_footer svg:hover path {
  fill: #81007f;
}

/* ANIMATION */

.menu {
  z-index: 20;
  position: fixed;
  transition: 0.5s all;
  backdrop-filter: blur(30px);
  right: 0;
  width: 100vw;
  height: 100vh;
  top: 0;
  transform: translateX(100%);
}

.hideMenu {
  opacity: 0;
}

.sidebarActive {
  transform: translateX(0%);
}

/* .text_links

.tel */

@media screen and (max-width: 1200px) {
  .text_links {
    display: none !important;
  }

  .tel {
    display: none !important;
  }

  #toggler-btn {
    display: block !important;
  }
}

@media screen and (max-width: 767px) {
  .text {
    font-size: 16px;
  }
}


@media screen and (max-width: 576px) {
  .toggled_menu {
    height: 80vh;
    margin-top: 20px;
    width: 99%;
  }

  .toggled_menu img {
    width: 140px;
  }

  .toggled_menu select {
    width: 90px;
  }

  .toggled_menu p {
    display: none;
  }

  .toggled_menu button {
    display: none;
  }

  .toggled_menu h1  {
    font-size: 45px;
    margin-top: 0px;
    margin-bottom: -25px;
  }

  .toggled_menu .telephone {
    font-size: 15px;
  }

  .toggled_menu .call_back {
    height: 130%;
  }

   svg {
    width: 30px;
    height: 30px;
  }
}
</style>