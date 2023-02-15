import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import Sidebar from "@/components/Sidebar";

const AboutPage = () => {
  document.title = "MyCV - CV Online";

  // useEffect(() => {
  //   const active = document.querySelector(".About");
  //   active.className = "active tw-no-underline";
  // });
  return /*html*/ `
    <!-- Preloader -->
    <div class="preloader">
      <div class="preloader__wrap">
        <div class="circle-pulse">
          <div class="circle-pulse__1"></div>
          <div class="circle-pulse__2"></div>
        </div>
        <div class="preloader__progress"><span></span></div>
      </div>
    </div>
    <main class="main">
      <div class="container gutter-top">
        <div class="row sticky-parent">
  <!-- Sidebar -->
  ${Sidebar()}
      <!-- Content -->
      <div class="col-12 col-md-12 col-xl-9">
      <div class="box shadow pb-0">
        <!-- Menu -->
        <div class="circle-menu">
        <div class="hamburger">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
    </div>
    <div class="inner-menu js-menu tw-max-w-xl">
    <ul class="nav">
   
    ${Menus()}
    </ul>
    </div>
        <!-- About -->
      <div class="pb-0 pb-sm-2">
                  <h1 class="title title--h1 first-title title__separate">About Me</h1>
          <p class="tw-text-[#DEDDE0]">I'm Frontend Developer, working in web development. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                      <p class="tw-text-[#DEDDE0]">My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.</p>
        </div>
      
      <!-- What -->
      <div class="box-inner pb-0">
          <h2 class="title title--h3">What I'm Doing</h2>
        <div class="row">
            <!-- Case Item -->
            <div class="col-12 col-lg-6">
                <div class="case-item box box__second">
                <img class="case-item__icon" src="https://art-template.ru/vcard1/assets/icons/dark/icon-design.svg" alt="" />
              <div>
                    <h3 class="title title--h5">Web Design</h3>
                  <p class="case-item__caption">The most modern and high-quality design made at a professional level.</p>
              </div>	
            </div>
          </div> 
          
          <!-- Case Item -->
          <div class="col-12 col-lg-6">
                <div class="case-item box box__second">
                <img class="case-item__icon" src="https://art-template.ru/vcard1/assets/icons/dark/icon-dev.svg" alt="" />
              <div>
                    <h3 class="title title--h5">Web Development</h3>
                  <p class="case-item__caption">High-quality and professional development of sites at the professional level.</p>
              </div>
            </div>
          </div>
          
        </div>	
      </div>

        </div>
      </div>
    </div>
      <!-- Footer -->
  ${Footer()}
  </div>
  </div>
  </div>
</main>
<div class="back-to-top"></div>
  `;
};
export default AboutPage;
