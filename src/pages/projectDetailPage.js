import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import Sidebar from "@/components/Sidebar";
import { router, useEffect } from "@/lib";

const ProjectDetailPage = ({ id }) => {
  document.title = "Project - Detail";
  const projects = JSON.parse(localStorage.getItem("myProjects")) || [];
  const curren = projects.find((project) => project.id == id);
  if (!curren) return router.navigate("/notFound");
  useEffect(() => {
    const active = document.querySelector(".Projects");
    active.className = "active tw-no-underline";
  });
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
    <!-- Post -->
    <div class="pb-3">
        <header class="header-post">
            <div class="header-post__date">Sep 15, 2019</div>
                        <h1 class="title title--h1">${curren.name}</h1>
        <div class="caption-post">
            <p>Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes.</p>
        </div>
        <div class="header-post__image-wrap">
            <img class="cover lazyload" src="../assets/img/image_02.jpg" alt="" />
        </div>
      </header>
      <div class="caption-post">
        <p>Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes. We can learn how to take joy in the things we create whether they take the form of a fleeting experience or an heirloom that will last for generations. We can learn that reward comes in creation and re-creation.</p>
        <p>It is not enough that we build products that function, that are understandable and usable, we also need to build products that bring joy and excitement, pleasure and fun, and, yes, beauty to people’s lives. Creativity is to discover a question that has never been asked.</p>
        </div>
      <div class="gallery-post">
          <img class="gallery-post__item cover lazyload" src="../assets/img/image_06.jpg" data-zoom alt="" />
        <img class="gallery-post__item cover lazyload" src="../assets/img/image_08.jpg" data-zoom alt="" />
        <div class="gallery-post__caption">Work by ${
          curren.teams
            ? curren.teams
                .map(
                  (item) =>
                    `<a class="tw-no-underline" href="#">${item.name}</a>`
                )
                .join(", ")
            : `<a class="tw-no-underline" href="#">${curren.author}</a>`
        }</div>
      </div>
      <div class="caption-post">
          <h3 class="title title--h3">If you’re not prepared to be wrong, you’ll never come up with anything original.</h3>
        <p>Here is one of the few effective keys to the design problem: the ability of the designer to recognize as many of the constraints as possible his willingness and enthusiasm for working within these constraints. The most profound technologies are those that disappear. They weave themselves into the fabric of everyday life until they are indistinguishable from it.</p>
        <blockquote class="block-quote">
            <p>The alternative to good design is always bad design. There is no such thing as no design.</p>
            <span class="block-quote__author tw-text-[#DEDDE0]">Adam Judge</span>
        </blockquote>
        <p>Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes.</p>
        <p>We can learn how to take joy in the things we create whether they take the form of a fleeting experience or an heirloom that will last for generations. We can learn that reward comes in creation and re-creation, no just in the consumption of the world around us. Active participation in the process of creation is our right and our privilege. We can learn to measure the success of our ideas not by our bank accounts by their impact on the world.</p>
      </div>
      <footer class="footer-post">
          <a class="footer-post__share tw-no-underline" href="http://facebook.com/"><i class="fa-brands fa-facebook-f"></i><span style="margin-left: 10px">Facebook</span></a>
        <a class="footer-post__share tw-no-underline" href="http://twitter.com/"><i class="fa-brands fa-twitter"></i><span style="margin-left: 10px">Twitter</span></a>
        <a class="footer-post__share tw-no-underline" href="http://linkedin.com/"><i class="fa-brands fa-linkedin-in"></i><span style="margin-left: 10px">Linkedin</span></a>
      </footer>
    </div>
    
    <div class="box-inner box-inner--rounded">
        <h2 class="title title--h3">Comments <span class="color--light">(3)</span></h2>
      
      <!-- Comment -->
              <div class="comment-box">
          <div class="comment-box__inner">
                            <svg class="avatar avatar--60" viewBox="0 0 84 84">
                                <g class="avatar__hexagon">
                                    <image xlink:href="../assets/img/avatar-2.jpg" height="100%" width="100%" />
                                </g>
                            </svg>
                            <div class="comment-box__body">
                                <h5 class="comment-box__details"><span>Daniel Lewi</span><span class="comment-box__details-date">5 min ago</span></h5>
                                <p>Very interesting and informative article on design. I learned a lot of new and interesting.</p>

            <ul class="comment-box__footer">
                <li><i class="font-icon icon-like-fill"></i> <span>80</span></li>
                <li><i class="font-icon icon-reply"></i> <span>Reply</span></li>
            </ul>
                            </div>
        </div>
        
        <!-- Comment -->
              <div class="comment-box">
            <div class="comment-box__inner">
                                <svg class="avatar avatar--60" viewBox="0 0 84 84">
                                    <g class="avatar__hexagon">
                                        <image xlink:href="../assets/img/avatar-3.jpg" height="100%" width="100%" />
                                    </g>
                                </svg>
                                <div class="comment-box__body">
                                    <h5 class="comment-box__details"><span>Jessica Miller</span><span class="comment-box__details-date">1 min ago</span></h5>
                                    <p>I agree, a very interesting article. Thank you very much! <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-nerd.svg" alt="nerd"/></p>
              
              <ul class="comment-box__footer">
                    <li><i class="font-icon icon-like-fill"></i> <span>35</span></li>
                    <li><i class="font-icon icon-reply"></i> <span>Reply</span></li>
                </ul>
                                </div>
          </div>
                        </div>
          </div>
      
              <!-- Comment -->
              <div class="comment-box">
          <div class="comment-box__inner">
                            <svg class="avatar avatar--60" viewBox="0 0 84 84">
                                <g class="avatar__hexagon">
                                    <image xlink:href="../assets/img/avatar-6.jpg" height="100%" width="100%" />
                                </g>
                            </svg>
                            <div class="comment-box__body">
                                <h5 class="comment-box__details"><span>Henry William</span><span class="comment-box__details-date">15 min ago</span></h5>
                                <p>Thanks for the good article. Looking forward to new ones.</p>
            
            <ul class="comment-box__footer">
                <li><i class="font-icon icon-like-fill"></i> <span>15</span></li>
                <li><i class="font-icon icon-reply"></i> <span>Reply</span></li>
            </ul>
                            </div>
        </div>
                    </div>
      
      <!-- Comment form -->
      <ul class="social-auth">
          <li class="social-auth__item">Login with:</li>
          <li class="social-auth__item"><a class="social-auth__link" href="#"><i class="font-icon icon-facebook"></i></a></li>
        <li class="social-auth__item"><a class="social-auth__link" href="#"><i class="font-icon icon-twitter"></i></a></li>
        <li class="social-auth__item"><a class="social-auth__link" href="#"><i class="font-icon icon-dribbble"></i></a></li>
        <li class="social-auth__item"><a class="social-auth__link" href="#"><i class="font-icon icon-behance"></i></a></li>
      </ul>
      <form class="comment-form">
          <textarea id="commentForm" class="textarea textarea--white form-control" required="required" placeholder="Write a Comment..." rows="1"></textarea>
        <button type="submit" class="btn"><i class="font-icon icon-send"></i></button>
        <div class="dropdown dropup">
            <i class="font-icon icon-smile" id="dropdownEmoji" data-toggle="dropdown" aria-haspopup="true"></i>
            <div class="dropdown-menu dropdown-menu-center" aria-labelledby="dropdownEmoji">
              <div class="emoji-wrap">
                                    <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-laughing.svg" title=":laughing:" alt="laughing"/>
                <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-happy-2.svg" title=":happy 2:" alt="happy 2"/>
                <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-crazy.svg" title=":crazy:" alt="crazy"/>
              <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-bad.svg" title=":bad:" alt="bad"/>
                <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-angry.svg" title=":angry:" alt="angry"/>
                <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-happy.svg" title="happy" alt="happy"/>
                                    <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-thinking.svg" title=":thinking:" alt="thinking"/>
                <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-sad.svg" title=":sad:" alt="sad"/>
                <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-pressure.svg" title=":pressure:" alt="pressure"/>
              <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-in-love.svg" title=":in love:" alt="in love"/>
                <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-nerd.svg" title=":laughing:" alt="nerd"/>
                <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-happy-3.svg" title=":happy 3:" alt="happy 3"/>
                                    <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-shocked.svg" title=":shocked:" alt="shocked"/>
                <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-wink.svg" title=":wink:" alt="wink"/>
                <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-sweating.svg" title=":sweating:" alt="sweating"/>
              <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-shocked-2.svg" title=":shocked 2:" alt="shocked 2"/>
                <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-shocked-3.svg" title=":shocked 3:" alt="shocked 3"/>
                <img class="emoji" src="https://art-template.ru/vcard1/assets/icons/emoji/emoji-sad-2.svg" title=":sad 2:" alt="sad 2"/>
            </div>	
                            </div>
                        </div>	
      </form>
      
      </div>
  </div>
  
  <!-- Footer -->
  ${Footer()}
    </div>
    </div>
    </div>
  </main>
  <div class="back-to-top"></div>`;
};

export default ProjectDetailPage;
