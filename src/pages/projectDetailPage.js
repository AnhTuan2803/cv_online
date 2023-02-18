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
      console.log(_menu.style.width);
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
                  <img class="tw-h-full tw-w-full" src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg" alt="" />
              </div>
            </header>
            <div class="tw-ml-auto tw-mr-auto tw-mb-[2rem] tw-w-[80%] tw-text-[#DEDDE0]">
              <p>Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes. We can learn how to take joy in the things we create whether they take the form of a fleeting experience or an heirloom that will last for generations. We can learn that reward comes in creation and re-creation.</p>
              <p>It is not enough that we build products that function, that are understandable and usable, we also need to build products that bring joy and excitement, pleasure and fun, and, yes, beauty to people’s lives. Creativity is to discover a question that has never been asked.</p>
              </div>
            <div class="tw-flex tw-flex-wrap tw-mr-[-1rem] tw-ml-[-1rem]">
                <img class="tw-mr-[1rem] tw-ml-[1rem] gallery-post__item" src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg" alt="" />
              <img class="tw-mr-[1rem] tw-ml-[1rem] gallery-post__item" src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg" alt="" />

              <div class="tw-w-full tw-text-center tw-px-[1rem] tw-pb-[2rem] tw-pt-[1rem] tw-italic tw-text-[#8697A8] tw-text-[14px]">Work by <a class="tw-text-[#dedde0] tw-no-underline tw-duration-300" href="https://www.facebook.com/tuanpa03">${
                project.author
              }</a></div>
            </div>
            <div class="caption-post">
                <h3 class="tw-text-[#F1F2F4] tw-text-[1.5rem] tw-mb-[1.3rem] tw-font-bold tw-font-serif">If you’re not prepared to be wrong, you’ll never come up with anything original.</h3>
              <p class="tw-text-[#DEDDE0]">Here is one of the few effective keys to the design problem: the ability of the designer to recognize as many of the constraints as possible his willingness and enthusiasm for working within these constraints. The most profound technologies are those that disappear. They weave themselves into the fabric of everyday life until they are indistinguishable from it.</p>
              
              <blockquote class="block-quote">
                  <p class="tw-text-[#DEDDE0]">The alternative to good design is always bad design. There is no such thing as no design.</p>
                  <span class="block-quote__author tw-text-[#DEDDE0]">Adam Judge</span>
              </blockquote>

              <p class="tw-text-[#DEDDE0]">Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes.</p>
              <p class="tw-text-[#DEDDE0]">We can learn how to take joy in the things we create whether they take the form of a fleeting experience or an heirloom that will last for generations. We can learn that reward comes in creation and re-creation, no just in the consumption of the world around us. Active participation in the process of creation is our right and our privilege. We can learn to measure the success of our ideas not by our bank accounts by their impact on the world.</p>
            </div>

            <footer class="footer-post">
              <a class="footer-post__share" href="${
                project.linkGithub
              }"><i class="tw-mr-[10px] fa-brands fa-github"></i><span>Github</span></a>
              <a class="footer-post__share" href="${
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
