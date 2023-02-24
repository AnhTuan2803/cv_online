import { getAbout } from "@/api/about";
import { getDoings } from "@/api/doing";
import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "@/lib";

const AboutPage = () => {
  document.title = "MyCV - CV Online";
  const [data, setData] = useState({});
  const [doing, setDoing] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await getAbout();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(async () => {
    try {
      const { data } = await getDoings();
      setDoing(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return /*html*/ `
  <main>
  <div><a class="tw-text-red-500 tw-text-[30px] tw-duration-500 tw-absolute tw-left-[130px] tw-top-[100px]" data-navigo href="#/signin"></div><i class="fa-solid fa-gears"></i></a></div>
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
            <p  class="tw-text-[#DEDDE0]">${data.introduce1}</p>
                        <p  class="tw-text-[#DEDDE0]">${data.introduce2}</p>
          </div>
        
        <!-- What -->
        <div class="box-inner">
            <h2 class="tw-text-[#F1F2F4] tw-mb-[1.3rem] tw-text-[1.5rem] tw-font-bold">What I'm Doing</h2>
         
            <div class="row">
                          <!-- Case Item -->
            ${doing
              ?.map(
                (item) => /*html*/ `<div class="col-12 col-lg-6">
            <div class="case-item box tw-bg-[#2C283A]">
            <img class="case-item__icon tw-max-w-full" src="${item.img}" alt="" />
          <div>

                <h3 class="tw-text-[#F1F2F4] tw-text-[1rem] tw-font-bold">${item.title}</h3>
              <p class="case-item__caption">${item.des}</p>
          </div>
        </div>
      </div> `
              )
              .join("")}
        
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
