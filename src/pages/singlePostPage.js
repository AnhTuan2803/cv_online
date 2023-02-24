import { getBlog } from "@/api/blog";
import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "@/lib";

const SinglePostPage = ({ id }) => {
  document.title = "Blog - SinglePost";
  const [date, setDate] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getBlog(id);
        setDate(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
              
          
            <!-- Post -->
						<div class="pb-3">
              <header class="tw-text-center">
                  <div class="header-post__date tw-text-left">${date.date}</div>
                              <h1 class="tw-mt-8 tw-mb-[1.5rem] tw-text-[#F1F2F4] tw-font-serif tw-font-bold">${
                                date.title
                              }</h1>
              <div class="tw-ml-auto tw-mr-auto tw-mb-[2rem] tw-w-[80%]">
                  <p class="tw-text-[#DEDDE0]">${date.des}</p>
              </div>
              <div class="tw-h-[34rem] tw-mb-[2.5rem] tw-mr-[-30px] tw-ml-[-30px]">
                  <img class="tw-h-full tw-w-full" src="${date.img}" alt="" />
              </div>
            </header>
            <div class="tw-ml-auto tw-mr-auto tw-mb-[2rem] tw-w-[80%] tw-text-[#DEDDE0]">
              <p>${date.longdes}</p>
             
              </div>
            <div class="tw-flex tw-flex-wrap tw-mr-[-1rem] tw-ml-[-1rem]">
            ${date.album
              ?.map(
                (item) =>
                  `<img class="tw-mr-[1rem] tw-ml-[1rem] gallery-post__item" src="${item}" alt="" />`
              )
              .join("")}

            </div>
           

            <footer class="footer-post">
              <a class="footer-post__share" target="_blank" href="#"><i class="tw-mr-[10px] fa-brands fa-github"></i><span>Github</span></a>
              <a class="footer-post__share" target="_blank" href="#"><i class="tw-mr-[10px] fa-solid fa-link"></i><span>Preview</span></a>
        
            </footer>
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

export default SinglePostPage;
