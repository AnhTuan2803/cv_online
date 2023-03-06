import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import Sidebar from "@/components/Sidebar";

const ResumePage = () => {
  document.title = "MyCV - Resume";

  return /*html*/ `<main>
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
          <div class="tw-pb-2">
          <h1 class="tw-relative title__separate tw-text-[#F1F2F4] tw-mb-[2rem] tw-text-[2rem] tw-font-bold tw-leading-[1.2]">
          Resume
          </h1>
        </div>
        
        <!-- Experience -->
        <div class="tw-pb-0">
          <div class="row">
              <div class="col-12 col-lg-6">
                <h2 class="tw-text-[#F1F2F4] tw-text-[1.5rem] tw-mb-[1.3rem] tw-flex"><img class="title-icon" src="https://art-template.ru/vcard1/assets/icons/dark/icon-education.svg" alt="" /> Education</h2>
                <div class="timeline">
                  <!-- Item -->
                  <article class="timeline__item">
                      <h5 class="tw-text-[#F1F2F4] tw-text-[1rem] timeline__title">FPT Polytechnic College</h5>
                    <span class="timeline__period">2021 — Present</span>
                    <p class="timeline__description">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
                </article>
                                    
                <!-- Item -->
                  <article class="timeline__item">
                      <h5 class="tw-text-[#F1F2F4] tw-text-[1rem] timeline__title">New York Academy of Art</h5>
                    <span class="timeline__period">2005 — 2007</span>
                    <p class="timeline__description">Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..</p>
                </article>
                                    
              </div>	
            </div>
            
              <div class="col-12 col-lg-6">
                <h2 class="tw-text-[#F1F2F4] tw-text-[1.5rem] tw-mb-[1.3rem] tw-flex"><img class="title-icon" src="https://art-template.ru/vcard1/assets/icons/dark/icon-experience.svg" alt="" /> Experience</h2>
              <div class="timeline">
                  <!-- Item -->
                  <article class="timeline__item">
                      <h5 class="tw-text-[#F1F2F4] tw-text-[1rem] timeline__title">Creative Director</h5>
                    <span class="timeline__period">2015 — Present</span>
                    <p class="timeline__description">Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.</p>
                </article>
                                    
                <!-- Item -->
                  <article class="timeline__item">
                      <h5 class="tw-text-[#F1F2F4] tw-text-[1rem] timeline__title">Art Director</h5>
                    <span class="timeline__period">2013 — 2015</span>
                    <p class="timeline__description">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
                </article>
        
              </div>
            </div>
          </div>
        </div>
        
        <!-- Skills -->
        <div class="box-inner">
            <div class="row">
              <div class="col-12 col-lg-6">
                    <h2 class="tw-text-[#F1F2F4] tw-text-[1.5rem] tw-mb-[1.3rem]">Design Skills</h2>
              <div class="box__second">
                  <!-- Progress -->
                  <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" style="width: 70%; z-index: 2" aria-valuemax="100">
                      <div class="progress-text"><span>Web Design</span><span>70%</span></div>
                  </div>
                  <div class="progress-text"><span>Web Design</span></div>
                                    </div>
                
                  <!-- Progress -->
                  <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" style="width: 0%; z-index: 2" aria-valuemax="100">
                      <div class="progress-text"><span>Graphic Design</span><span>0%</span></div>
                  </div>
                  <div class="progress-text"><span>Graphic Design</span></div>
                                    </div>
                
                  <!-- Progress -->
                  <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" style="width: 0%; z-index: 2" aria-valuemax="100">
                      <div class="progress-text"><span>Photoshop</span><span>0%</span></div>
                  </div>
                  <div class="progress-text"><span>Photoshop</span></div>
                                    </div>
                
                  <!-- Progress -->
                  <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" style="width: 0%; z-index: 2" aria-valuemax="100">
                      <div class="progress-text"><span>Illustrator</span><span>0%</span></div>
                  </div>
                  <div class="progress-text"><span>Illustrator</span></div>
                                    </div>
              </div>
                            </div>
            
              <div class="col-12 col-lg-6 mt-4 mt-lg-0">
                    <h2 class="tw-text-[#F1F2F4] tw-text-[1.5rem] tw-mb-[1.3rem]">Coding Skills</h2>
              <div class="box__second">
                  <!-- Progress -->
                  <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" style="width: 40%; z-index: 2" aria-valuemax="100">
                      <div class="progress-text"><span>WordPress</span><span>40%</span></div>
                  </div>
                  <div class="progress-text"><span>WordPress</span></div>
                                    </div>
                
                  <!-- Progress -->
                  <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" style="width: 70%; z-index: 2" aria-valuemax="100">
                      <div class="progress-text"><span>Javascript</span><span>70%</span></div>
                  </div>
                  <div class="progress-text"><span>Javascript</span></div>
                                    </div>
                
                  <!-- Progress -->
                  <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0"style="width: 85%; z-index: 2" aria-valuemax="100">
                      <div class="progress-text"><span>HTML - CSS</span><span>85%</span></div>
                  </div>
                  <div class="progress-text"><span>HTML - CSS</span></div>
                                    </div>
                
                  <!-- Progress -->
                  <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" style="width: 30%; z-index: 2" aria-valuemax="100">
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
