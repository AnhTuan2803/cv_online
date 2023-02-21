import { getProject } from "@/api/project";
import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "@/lib";

const ProjectDetailPage = ({ id }) => {
  document.title = "Project - Detail";
  const [project, setProject] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProject(id);
        setProject(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const btn = document.querySelector(".hamburger");
    btn.addEventListener("click", () => {
      const _menu = document.querySelector("#_menu");
      const item = document.querySelector("#item");
      if (_menu.style.width == "0%") {
        item.className = "fa-solid fa-xmark";
        document.body.scrollWidth >= 1024
          ? (_menu.style.width = "60%")
          : (_menu.style.width = "100%");
        _menu.style.display = "block";
      } else {
        item.className = "fa-solid fa-bars-staggered";
        _menu.style.width = "0%";
        _menu.style.display = "none";
      }
    });
  });

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
                <div class="circle-menu">
        
                <div class="hamburger">
                <i id="item" class="fa-solid fa-bars-staggered"></i>
                  </div>
             
                 </div>
             ${Menus()}
              
          
            <!-- Post -->
						<div class="pb-3">
              <header class="tw-text-center">
                  <div class="header-post__date tw-text-left">${
                    project.date
                  }</div>
                              <h1 class="tw-mt-8 tw-mb-[1.5rem] tw-text-[#F1F2F4] tw-font-serif tw-font-bold">${
                                project.name
                              }</h1>
              <div class="tw-ml-auto tw-mr-auto tw-mb-[2rem] tw-w-[80%]">
                  <p class="tw-text-[#DEDDE0]">Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes.</p>
              </div>
              <div class="tw-h-[34rem] tw-mb-[2.5rem] tw-mr-[-30px] tw-ml-[-30px]">
                  <img class="tw-h-full tw-w-full" src="${
                    project.avatar
                  }" alt="" />
              </div>
            </header>
            <div class="tw-ml-auto tw-mr-auto tw-mb-[2rem] tw-w-[80%] tw-text-[#DEDDE0]">
              <p>${project.des}</p>
             
              </div>
            <div class="tw-flex tw-flex-wrap tw-mr-[-1rem] tw-ml-[-1rem]">
            ${project.album
              ?.map(
                (item) =>
                  `<img class="tw-mr-[1rem] tw-ml-[1rem] gallery-post__item" src="${item}" alt="" />`
              )
              .join("")}

              <div class="tw-w-full tw-text-center tw-px-[1rem] tw-pb-[2rem] tw-pt-[1rem] tw-italic tw-text-[#8697A8] tw-text-[14px]">Work by <a class="tw-text-[#dedde0] tw-no-underline tw-duration-300" target="_blank" href="https://www.facebook.com/tuanpa03">${
                project.author
              }</a></div>
            </div>
           

            <footer class="footer-post">
              <a class="footer-post__share" target="_blank" href="${
                project.linkGithub
              }"><i class="tw-mr-[10px] fa-brands fa-github"></i><span>Github</span></a>
              <a class="footer-post__share" target="_blank" href="${
                project.linkPreview
              }"><i class="tw-mr-[10px] fa-solid fa-link"></i><span>Preview</span></a>
        
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

export default ProjectDetailPage;
