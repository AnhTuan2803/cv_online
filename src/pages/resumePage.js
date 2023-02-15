import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import Sidebar from "@/components/Sidebar";
import { useEffect } from "@/lib";

const ResumePage = () => {
    document.title = "MyCV - Resume";
    useEffect(() => {
      const active = document.querySelector(".Resume");
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
          <!-- About -->
          <div class="pb-3">
              <h1 class="title title--h1 first-title title__separate">Resume</h1>
          </div>
          
          <!-- Experience -->
          <div class="pb-0">
              <div class="row">
                  <div class="col-12 col-lg-6">
                      <h2 class="title title--h3"><img class="title-icon" src="https://art-template.ru/vcard1/assets/icons/dark/icon-education.svg" alt="" /> Education</h2>
                      <div class="timeline">
                          <!-- Item -->
                          <article class="timeline__item">
                              <h5 class="title title--h5 timeline__title">University School of the Arts</h5>
                              <span class="timeline__period">2007 — 2009</span>
                              <p class="timeline__description">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
                          </article>
                          
                          <!-- Item -->
                          <article class="timeline__item">
                              <h5 class="title title--h5 timeline__title">New York Academy of Art</h5>
                              <span class="timeline__period">2005 — 2007</span>
                              <p class="timeline__description">Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..</p>
                          </article>
                          
                          <!-- Item -->
                          <article class="timeline__item">
                              <h5 class="title title--h5 timeline__title">High School of Art and Design</h5>
                              <span class="timeline__period">2003 — 2005</span>
                              <p class="timeline__description">Duis aute irure dolor in reprehenderit in voluptate, quila voluptas  mag odit aut fugit, sed consequuntur magni dolores eos.</p>
                          </article>
                      </div>	
                  </div>
                  
                  <div class="col-12 col-lg-6">
                      <h2 class="title title--h3"><img class="title-icon" src="https://art-template.ru/vcard1/assets/icons/dark/icon-experience.svg" alt="" /> Experience</h2>
                      <div class="timeline">
                          <!-- Item -->
                          <article class="timeline__item">
                              <h5 class="title title--h5 timeline__title">Creative Director</h5>
                              <span class="timeline__period">2015 — Present</span>
                              <p class="timeline__description">Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.</p>
                          </article>
                          
                          <!-- Item -->
                          <article class="timeline__item">
                              <h5 class="title title--h5 timeline__title">Art Director</h5>
                              <span class="timeline__period">2013 — 2015</span>
                              <p class="timeline__description">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
                          </article>
                          
                          <!-- Item -->
                          <article class="timeline__item">
                              <h5 class="title title--h5 timeline__title">Web Designer</h5>
                              <span class="timeline__period">2010 — 2013</span>
                              <p class="timeline__description">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
                          </article>
                      </div>
                  </div>
              </div>
          </div>
          
          <!-- Skills -->
          <div class="box-inner box-inner--rounded">
              <div class="row">
                  <div class="col-12 col-lg-6">
                      <h2 class="title title--h3">Design Skills</h2>
                      <div class="box box__second">
                          <!-- Progress -->
                          <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                  <div class="progress-text"><span>Web Design</span><span>80%</span></div>
                              </div>
                              <div class="progress-text"><span>Web Design</span></div>
                          </div>
                          
                          <!-- Progress -->
                          <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                  <div class="progress-text"><span>Graphic Design</span><span>75%</span></div>
                              </div>
                              <div class="progress-text"><span>Graphic Design</span></div>
                          </div>
                          
                          <!-- Progress -->
                          <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                  <div class="progress-text"><span>Photoshop</span><span>90%</span></div>
                              </div>
                              <div class="progress-text"><span>Photoshop</span></div>
                          </div>
                          
                          <!-- Progress -->
                          <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                  <div class="progress-text"><span>Illustrator</span><span>50%</span></div>
                              </div>
                              <div class="progress-text"><span>Illustrator</span></div>
                          </div>
                      </div>
                  </div>
                  
                  <div class="col-12 col-lg-6 mt-4 mt-lg-0">
                      <h2 class="title title--h3">Coding Skills</h2>
                      <div class="box box__second">
                          <!-- Progress -->
                          <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                  <div class="progress-text"><span>WordPress</span><span>70%</span></div>
                              </div>
                              <div class="progress-text"><span>WordPress</span></div>
                          </div>
                          
                          <!-- Progress -->
                          <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                  <div class="progress-text"><span>Javascript</span><span>70%</span></div>
                              </div>
                              <div class="progress-text"><span>Javascript</span></div>
                          </div>
                          
                          <!-- Progress -->
                          <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                  <div class="progress-text"><span>HTML</span><span>100%</span></div>
                              </div>
                              <div class="progress-text"><span>HTML</span></div>
                          </div>
                          
                          <!-- Progress -->
                          <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                  <div class="progress-text"><span>PHP</span><span>30%</span></div>
                              </div>
                              <div class="progress-text"><span>PHP</span></div>
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
<div class="back-to-top"></div>`;
};

export default ResumePage;
