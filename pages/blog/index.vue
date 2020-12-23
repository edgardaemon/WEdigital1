<template>
    <div>
        <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="head_text">Наш <span class="web-kit"> блог</span></h1>
        </div>
      </div>
      <div class="row">
        <h2>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 32H56M8 16H30"
              stroke="white"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M8 48H45.5"
              stroke="white"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
          &nbsp; Блог
        </h2>
      </div>
    </div>
    <div class="container blog">
        <div class="row">
            <div class="col-12 col-md-6">
                    <NuxtLink to="/blog/article">
                  <div class="blog_content d-flex">
                <div class="col-6">
                    <img src="@/assets/images/blog1.png" class="img-fluid" alt="">
                </div>
                <div class="col-6 ">
                  
                    <h3>Сейчас – не время для экспериментов</h3>
                    <p class="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                    </p>
                    <h4>
                    Подробно &nbsp; 
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0832 13.9999L15.4085 19.6746C14.9524 20.1308 14.9524 20.8693 15.4085 21.3243L15.5089 21.4246C15.965 21.8808 16.7035 21.8808 17.1585 21.4246L23.7584 14.8248C24.2145 14.3686 24.2145 13.6301 23.7584 13.1751L17.1585 6.57528C16.7024 6.11911 15.9639 6.11911 15.5089 6.57528L15.4085 6.67561C14.9524 7.13178 14.9524 7.87028 15.4085 8.32528L21.0832 13.9999Z" fill="white"/>
                        <path d="M22.1667 12.8333H4.66667C4.02267 12.8333 3.5 13.3559 3.5 13.9999C3.5 14.6439 4.02267 15.1666 4.66667 15.1666H22.1667V12.8333Z" fill="white"/>
                    </svg>
                    </h4>
                </div>
                </div>
                    </NuxtLink> 
            </div>
            <div class="col-12 col-md-6">
                   <NuxtLink to="/blog/article">
                <div class="blog_content right_side d-flex">
                <div class="col-6">
                    <img src="@/assets/images/blog2.png" class="img-fluid" alt="">
                </div>
                <div class="col-6">
                    <h3>Сейчас – не время для экспериментов</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                    </p>
                    <h4>
                   Подробно &nbsp; 
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0832 13.9999L15.4085 19.6746C14.9524 20.1308 14.9524 20.8693 15.4085 21.3243L15.5089 21.4246C15.965 21.8808 16.7035 21.8808 17.1585 21.4246L23.7584 14.8248C24.2145 14.3686 24.2145 13.6301 23.7584 13.1751L17.1585 6.57528C16.7024 6.11911 15.9639 6.11911 15.5089 6.57528L15.4085 6.67561C14.9524 7.13178 14.9524 7.87028 15.4085 8.32528L21.0832 13.9999Z" fill="white"/>
                        <path d="M22.1667 12.8333H4.66667C4.02267 12.8333 3.5 13.3559 3.5 13.9999C3.5 14.6439 4.02267 15.1666 4.66667 15.1666H22.1667V12.8333Z" fill="white"/>
                    </svg>
                    </h4>
                </div>
                </div>
                    </NuxtLink> 
            </div>
        </div>
                <div class="row">
            <div class="col-12 col-md-6">
                   <NuxtLink to="/blog/article">
                <div class="blog_content d-flex">
                <div class="col-6">
                    <img src="@/assets/images/blog3.png" class="img-fluid" alt="">
                </div>
                <div class="col-6">
                    <h3>Сейчас – не время для экспериментов</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                    </p>
                    <h4>
                   Подробно &nbsp; 
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0832 13.9999L15.4085 19.6746C14.9524 20.1308 14.9524 20.8693 15.4085 21.3243L15.5089 21.4246C15.965 21.8808 16.7035 21.8808 17.1585 21.4246L23.7584 14.8248C24.2145 14.3686 24.2145 13.6301 23.7584 13.1751L17.1585 6.57528C16.7024 6.11911 15.9639 6.11911 15.5089 6.57528L15.4085 6.67561C14.9524 7.13178 14.9524 7.87028 15.4085 8.32528L21.0832 13.9999Z" fill="white"/>
                        <path d="M22.1667 12.8333H4.66667C4.02267 12.8333 3.5 13.3559 3.5 13.9999C3.5 14.6439 4.02267 15.1666 4.66667 15.1666H22.1667V12.8333Z" fill="white"/>
                    </svg>
                    </h4>
                </div>
                </div>
                    </NuxtLink> 
            </div>
            <div class="col-12 col-md-6">
                   <NuxtLink to="/blog/article">
                <div class="blog_content right_side d-flex">
                <div class="col-6">
                    <img src="@/assets/images/blog4.png" class="img-fluid" alt="">
                </div>
                <div class="col-6">
                    <h3>Сейчас – не время для экспериментов</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                    </p>
                    <h4>
                   Подробно &nbsp; 
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0832 13.9999L15.4085 19.6746C14.9524 20.1308 14.9524 20.8693 15.4085 21.3243L15.5089 21.4246C15.965 21.8808 16.7035 21.8808 17.1585 21.4246L23.7584 14.8248C24.2145 14.3686 24.2145 13.6301 23.7584 13.1751L17.1585 6.57528C16.7024 6.11911 15.9639 6.11911 15.5089 6.57528L15.4085 6.67561C14.9524 7.13178 14.9524 7.87028 15.4085 8.32528L21.0832 13.9999Z" fill="white"/>
                        <path d="M22.1667 12.8333H4.66667C4.02267 12.8333 3.5 13.3559 3.5 13.9999C3.5 14.6439 4.02267 15.1666 4.66667 15.1666H22.1667V12.8333Z" fill="white"/>
                    </svg>
                    </h4>
                </div>
                </div>
                    </NuxtLink> 
            </div>
        </div>
                <div class="row">
            <div class="col-12 col-md-6">
                   <NuxtLink to="/blog/article">
                <div class="blog_content d-flex">
                <div class="col-6">
                    <img src="@/assets/images/blog5.png" class="img-fluid" alt="">
                </div>
                <div class="col-6">
                    <h3>Сейчас – не время для экспериментов</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                    </p>
                    <h4>
                   Подробно &nbsp; 
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0832 13.9999L15.4085 19.6746C14.9524 20.1308 14.9524 20.8693 15.4085 21.3243L15.5089 21.4246C15.965 21.8808 16.7035 21.8808 17.1585 21.4246L23.7584 14.8248C24.2145 14.3686 24.2145 13.6301 23.7584 13.1751L17.1585 6.57528C16.7024 6.11911 15.9639 6.11911 15.5089 6.57528L15.4085 6.67561C14.9524 7.13178 14.9524 7.87028 15.4085 8.32528L21.0832 13.9999Z" fill="white"/>
                        <path d="M22.1667 12.8333H4.66667C4.02267 12.8333 3.5 13.3559 3.5 13.9999C3.5 14.6439 4.02267 15.1666 4.66667 15.1666H22.1667V12.8333Z" fill="white"/>
                    </svg>
                    </h4>
                </div>
                </div>
                    </NuxtLink> 
            </div>
            <div class="col-12 col-md-6">
                   <NuxtLink to="/blog/article">
                <div class="blog_content right_side d-flex">
                <div class="col-6">
                    <img src="@/assets/images/blog6.png" class="img-fluid" alt="">
                </div>
                <div class="col-6">
                    <h3>Сейчас – не время для экспериментов</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                    </p>
                    <h4>
                   Подробно &nbsp; 
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0832 13.9999L15.4085 19.6746C14.9524 20.1308 14.9524 20.8693 15.4085 21.3243L15.5089 21.4246C15.965 21.8808 16.7035 21.8808 17.1585 21.4246L23.7584 14.8248C24.2145 14.3686 24.2145 13.6301 23.7584 13.1751L17.1585 6.57528C16.7024 6.11911 15.9639 6.11911 15.5089 6.57528L15.4085 6.67561C14.9524 7.13178 14.9524 7.87028 15.4085 8.32528L21.0832 13.9999Z" fill="white"/>
                        <path d="M22.1667 12.8333H4.66667C4.02267 12.8333 3.5 13.3559 3.5 13.9999C3.5 14.6439 4.02267 15.1666 4.66667 15.1666H22.1667V12.8333Z" fill="white"/>
                    </svg>
                    </h4>
                </div>
                </div>
                    </NuxtLink> 
            </div>
        </div>
                <div class="row">
            <div class="col-12 col-md-6">
                   <NuxtLink to="/blog/article">
                <div class="blog_content d-flex">
                <div class="col-6">
                    <img src="@/assets/images/blog7.png" class="img-fluid" alt="">
                </div>
                <div class="col-6">
                    <h3>Сейчас – не время для экспериментов</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                    </p>
                    <h4>
                   Подробно &nbsp; 
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0832 13.9999L15.4085 19.6746C14.9524 20.1308 14.9524 20.8693 15.4085 21.3243L15.5089 21.4246C15.965 21.8808 16.7035 21.8808 17.1585 21.4246L23.7584 14.8248C24.2145 14.3686 24.2145 13.6301 23.7584 13.1751L17.1585 6.57528C16.7024 6.11911 15.9639 6.11911 15.5089 6.57528L15.4085 6.67561C14.9524 7.13178 14.9524 7.87028 15.4085 8.32528L21.0832 13.9999Z" fill="white"/>
                        <path d="M22.1667 12.8333H4.66667C4.02267 12.8333 3.5 13.3559 3.5 13.9999C3.5 14.6439 4.02267 15.1666 4.66667 15.1666H22.1667V12.8333Z" fill="white"/>
                    </svg>
                    </h4>
                </div>
                </div>
                    </NuxtLink> 
            </div>
            <div class="col-12 col-md-6">
                   <NuxtLink to="/blog/article">
                <div class="blog_content right_side d-flex">
                <div class="col-6">
                    <img src="@/assets/images/blog3.png" class="img-fluid" alt="">
                </div>
                <div class="col-6">
                    <h3>Сейчас – не время для экспериментов</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                    </p>
                    <h4>
                   Подробно &nbsp; 
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0832 13.9999L15.4085 19.6746C14.9524 20.1308 14.9524 20.8693 15.4085 21.3243L15.5089 21.4246C15.965 21.8808 16.7035 21.8808 17.1585 21.4246L23.7584 14.8248C24.2145 14.3686 24.2145 13.6301 23.7584 13.1751L17.1585 6.57528C16.7024 6.11911 15.9639 6.11911 15.5089 6.57528L15.4085 6.67561C14.9524 7.13178 14.9524 7.87028 15.4085 8.32528L21.0832 13.9999Z" fill="white"/>
                        <path d="M22.1667 12.8333H4.66667C4.02267 12.8333 3.5 13.3559 3.5 13.9999C3.5 14.6439 4.02267 15.1666 4.66667 15.1666H22.1667V12.8333Z" fill="white"/>
                    </svg>
                    </h4>
                </div>
                </div>
                    </NuxtLink> 
            </div>
        </div>
    </div>
     <div class="container slide_logo">
    <slider-partners />
    </div>
    </div>
</template>

<style scoped>
 
.slide_logo {
    margin-top: 120px;
}

* {
    padding: 0;
    font-family: "Montserrat";
}

.blog h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 140%;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    text-shadow: 0px 4px 34px rgba(0, 0, 0, 0.65);
}


.blog p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    color: #FFFFFF;
    opacity: 0.5;
    }

.blog a h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}

.blog a:hover h4 {
    text-decoration: none;
    color: #81007F;
    font-weight: 500;
}

.blog a:hover svg path {
    fill: #81007F;
}

.blog_content {
    background: #2B2B29;
    /* width: 556px; */
    /* height: 211px; */
    margin-top: 24px;
    margin-left: 32px;
    padding: 20px 24px 20px 0;
    width: 90%;
    height: auto;
}

.blog_content img {
    position: absolute;
    margin-top: -38px;
    margin-left: -32px;
      transition: 0.5s ease;
}


.right_side {
    margin-left: 53px;
}

.blog_content:hover img{
   transform: scale(1.1);
  
}


@media screen and (max-width: 576px) {
    h2 {
        margin-left: 20px;
    }

    .blog_content {
        width: 100%;
        /* height: auto; */
        margin-left: 0;
    }

    .blog_content h3 {
        font-size: 12px;
    }

    .blog_content p {
        box-sizing: border-box;
        width: 150px;
        font-size: 12px;
    }

    .blog_content a h4{
        font-size: 12px;
    }

    .blog_content h4  svg {
        width: 20px;
    }

    .right_side {
    margin-left: 0px;
}

    .blog_content img {
    position: static;
    margin-top: 0;
    margin-left: 0px;
      transition: 0.5s ease;
      margin-right: 10px;
}

}

</style>