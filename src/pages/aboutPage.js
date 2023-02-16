import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import Sidebar from "@/components/Sidebar";

const AboutPage = () => {
  document.title = "MyCV - CV Online";

  return /*html*/ `
  <main>
  <div class="container tw-pt-[6rem]">
    <div class="row">
      <!-- Sidebar -->
     ${Sidebar()}
        
    <!-- Content -->
        <div class="col-xl-9">
        <div class="shadow box tw-bg-[#302C40] tw-rounded-[20px]">
          <!-- Menu -->
         
        ${Menus()}
        
          <!-- About -->
        <div  class="tw-pb-2">
                    <h1 class="tw-relative title__separate tw-text-[#F1F2F4] tw-mb-[2rem] tw-text-[2rem] tw-font-bold tw-leading-[1.2]">About Me</h1>
            <p  class="tw-text-[#DEDDE0]">I'm Frontend Developer, working in web development. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                        <p  class="tw-text-[#DEDDE0]">My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.</p>
          </div>
        
        <!-- What -->
        <div class="box-inner">
            <h2 class="tw-text-[#F1F2F4] tw-mb-[1.3rem] tw-text-[1.5rem] tw-font-bold">What I'm Doing</h2>
         
            <div class="row">
              <!-- Case Item -->
              <div class="col-12 col-lg-6">
                  <div class="case-item box tw-bg-[#2C283A]">
                  <img class="case-item__icon tw-max-w-full" src="https://art-template.ru/vcard1/assets/icons/dark/icon-design.svg" alt="" />
                <div>

                      <h3 class="tw-text-[#F1F2F4] tw-text-[1rem] tw-font-bold">Web Design</h3>
                    <p class="case-item__caption">The most modern and high-quality design made at a professional level.</p>
                </div>
              </div>
            </div> 
            
             <!-- Case Item -->
             <div class="col-12 col-lg-6">
              <div class="case-item box tw-bg-[#2C283A]">
              <img class="case-item__icon tw-max-w-full" src="https://art-template.ru/vcard1/assets/icons/dark/icon-dev.svg" alt="" />
            <div>

                  <h3 class="tw-text-[#F1F2F4] tw-text-[1rem] tw-font-bold">Web Development</h3>
                <p class="case-item__caption">High-quality and professional development of sites at the professional level.</p>
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
