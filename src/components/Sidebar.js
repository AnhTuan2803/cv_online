const Sidebar = () => {
  return /*html*/ `<aside class="col-12 col-md-12 col-xl-3">
  <div class="sidebar box shadow pb-0 sticky-column">
  <svg class="avatar avatar--180" style="border-radius:33% 67% 63% 37% / 34% 35% 65% 66%" viewBox="0 0 188 188">
                  <g class="avatar__box">
                      <image xlink:href="../assets/img/avatar.jpg" height="100%" width="100%" />
                  </g>
              </svg>
        <div class="text-center">
            <h3 style="font-weight: 700;" class="title title--h3 sidebar__user-name"><span class="weight--500">Phạm Anh</span> Tuấn</h3>
          <div style="font-size: 14px; font-weight: 500; padding: 9px 14px;" class="badge badge--dark">Frontend Developer</div>
          
          <!-- Social -->
                    <div class="social">
                        <a class="social__link tw-text-base" href="https://www.facebook.com/tuanpa03"><i class="fa-brands fa-facebook-f"></i></a>
                        <a class="social__link tw-text-base" href="https://web.telegram.org/k/#@tuanpa03"><i class="fa-brands fa-telegram"></i></a>
                        <a class="social__link tw-text-base" href="https://github.com/AnhTuan2803"><i class="fa-brands fa-github"></i></a>
                    </div>
        </div>
        
        <div class="sidebar__info box-inner">
                    <ul class="contacts-block">
                  <li class="contacts-block__item tw-text-[#DEDDE0]" data-toggle="tooltip" data-placement="top" title="Birthday">
                  <i class="fa-solid fa-calendar tw-ml-[1px] tw-mr-[15px]"></i>March 28, 2003
              </li>
                <li class="contacts-block__item tw-text-[#DEDDE0]" data-toggle="tooltip" data-placement="top" title="Address">
                <i class="fa-sharp fa-solid fa-location-dot tw-ml-[2px] tw-mr-[16px]"></i>HaNoi, VietNam
              </li>
              <li class="contacts-block__item tw-text-[#DEDDE0]" data-toggle="tooltip" data-placement="top" title="Education">
              <i class="fa-solid fa-graduation-cap tw-mr-[9px]"></i>FPT Polytechnic
            </li>
                <li class="contacts-block__item tw-text-[#DEDDE0]" data-toggle="tooltip" data-placement="top" title="E-mail">
                  <a href="mailto:tuanpaph20520@fpt.edu.vn"><i class="fa-solid fa-envelope tw-mr-[14px]"></i>tuanpaph20520@fpt.edu.vn</a>
              </li>
                <li class="contacts-block__item tw-text-[#DEDDE0]" data-toggle="tooltip" data-placement="top" title="Phone">
                <i class="fa-solid fa-mobile tw-ml-[2px] tw-mr-[14.5px]"></i></i>+84 98 7957355
              </li>
              </ul>
          <a class="btn" style="background-color: #0D86FF; color: #F1F2F4" href="#"><i class="fa-solid fa-download"></i> Download CV</a>
        </div>
      </div>	
        </aside>`;
};

export default Sidebar;
