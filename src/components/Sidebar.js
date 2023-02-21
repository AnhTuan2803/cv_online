import { getProFile } from "@/api/proFile";
import { useEffect, useState } from "@/lib";
const Sidebar = () => {
  const [proFile, setProFile] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProFile();
        setProFile(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return /*html*/ ` <aside class=" col-xl-3">
  <div class="shadow tw-bg-[#302C40] tw-rounded-[20px]">
  <svg class="avatar" style="border-radius: 33% 67% 63% 37% / 34% 35% 65% 66%" viewBox="0 0 188 188">
                  <g>
                      <image xlink:href="${proFile.avatar}" height="100%" width="100%" />
                  </g>
              </svg>
        <div class="text-center">
            <h3 style="font-weight: 700;" class="tw-text-[#F1F2F4]">${proFile.name}</h3>
          <div style="font-size: 14px; font-weight: 500; padding: 9px 14px;" class="badge">${proFile.location}</div>
          
          <!-- Social -->
                    <div class="social">
                        <a class="social__link" target="_blank" href="https://www.facebook.com/tuanpa03"><i class="fa-brands fa-facebook-f"></i></a>
                        <a class="social__link" target="_blank" href="https://web.telegram.org/k/#@tuanpa03"><i class="fa-brands fa-telegram"></i></a>
                        <a class="social__link" target="_blank" href="https://github.com/AnhTuan2803"><i class="fa-brands fa-github"></i></a>
                    </div>
        </div>
        
        <div class="box-inner">
                    <ul>
                  <li class="contacts-block__item tw-text-[#DEDDE0]"  title="Birthday">
                  <i class="fa-solid fa-calendar tw-ml-[1px] tw-mr-[15px]"></i>${proFile.birthday}
              </li>
                <li class="contacts-block__item tw-text-[#DEDDE0]"  title="Address">
                <i class="fa-sharp fa-solid fa-location-dot tw-ml-[2px] tw-mr-[16px]"></i>${proFile.address}
              </li>
              <li class="contacts-block__item tw-text-[#DEDDE0]"  title="Education">
              <i class="fa-solid fa-graduation-cap tw-mr-[9px]"></i>${proFile.education}
            </li>
                <li class="contacts-block__item"  title="E-mail">
                  <a class="tw-no-underline tw-text-[#DEDDE0] " href="mailto:${proFile.email}"><i class="fa-solid fa-envelope tw-mr-[14px]"></i>${proFile.email}</a>
              </li>
                <li class="contacts-block__item tw-text-[#DEDDE0]"  title="Phone">
                <i class="fa-solid fa-mobile tw-ml-[2px] tw-mr-[14.5px]"></i></i>${proFile.phone}
              </li>
              </ul>
          <a class="btn" target="_blank" style="background-color: #0D86FF; color: #F1F2F4" href="https://drive.google.com/file/d/1ebk2OIx2pwMsspZwUGVTiEHbvpnYJA22/view"><i class="fa-solid fa-download"></i> Download CV</a>
        </div>
      </div>	
        </aside>`;
};

export default Sidebar;
