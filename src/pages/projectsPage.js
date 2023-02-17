import { getProjects } from "@/api/project";
import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import ProjectList from "@/components/ProjectList";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "@/lib";

const ProjectsPage = () => {
  document.title = "MyCV - Projects";
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProjects();
        setProjects(data);
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
        _menu.style.width = "60%";
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
        
        
         <!-- About -->
         <div class="tw-pb-2">
          <h1 class="tw-relative title__separate tw-text-[#F1F2F4] tw-mb-[2rem] tw-text-[2rem] tw-font-bold tw-leading-[1.2]">
            Portfolio
          </h1>
        </div>

        <!-- Gallery -->
        <div>
          <!-- Filter -->
          <div class="select">
       
            <ul class="filter">
              
              <li class="filter__item active" data-filter="*">
                <a class="filter__link active" href="#filter">All</a>
              </li>
              <li class="filter__item" data-filter=".category-html-css">
                <a class="filter__link" href="#filter">Html/css</a>
              </li>
              <li class="filter__item" data-filter=".category-reactjs">
                <a class="filter__link" href="#filter">Reactjs</a>
              </li>
              <li class="filter__item" data-filter=".category-php">
                <a class="filter__link" href="#filter">Php</a>
              </li>
            </ul>
            <!-- <input type="hidden" name="changemetoo" /> -->
          </div>

          <!-- Content -->
          <div class="tw-grid tw-grid-cols-3 tw-gap-4">
         
            <!-- Item 1 -->
            ${ProjectList({ projects })}
            <figure class="gallery-grid__item">
              <div class="gallery-grid__image-wrap">
                <img
                  class="gallery-grid__image"
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg"
                  data-zoom
                  alt=""
                />
              </div>
              <figcaption class="">
                <h4 class="gallery-grid__title tw-text-[#F1F2F4]">Half Avocado</h4>
                <span class="gallery-grid__category">Concept</span>
              </figcaption>
            </figure>

            <!-- Item 2 -->
            <figure class="gallery-grid__item">
              <div class="gallery-grid__image-wrap">
                <img
                  class="gallery-grid__image"
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg"
                  data-zoom
                  alt=""
                />
              </div>
              <figcaption class="">
                <h4 class="gallery-grid__title tw-text-[#F1F2F4]">Half Avocado</h4>
                <span class="gallery-grid__category">Concept</span>
              </figcaption>
            </figure>

            <!-- Item 3 -->
            <figure class="gallery-grid__item">
              <div class="gallery-grid__image-wrap">
                <img
                  class="gallery-grid__image"
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg"
                  data-zoom
                  alt=""
                />
              </div>
              <figcaption class="">
                <h4 class="gallery-grid__title tw-text-[#F1F2F4]">Half Avocado</h4>
                <span class="gallery-grid__category">Concept</span>
              </figcaption>
            </figure>
            <!-- Item 4 -->
            <figure class="gallery-grid__item">
              <div class="gallery-grid__image-wrap">
                <img
                  class="gallery-grid__image"
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg"
                  data-zoom
                  alt=""
                />
              </div>
              <figcaption class="">
                <h4 class="gallery-grid__title tw-text-[#F1F2F4]">Half Avocado</h4>
                <span class="gallery-grid__category">Concept</span>
              </figcaption>
            </figure>

            <!-- Item 5 -->
            <figure class="gallery-grid__item">
              <div class="gallery-grid__image-wrap">
                <img
                  class="gallery-grid__image"
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg"
                  data-zoom
                  alt=""
                />
              </div>
              <figcaption class="">
                <h4 class="gallery-grid__title tw-text-[#F1F2F4]">Half Avocado</h4>
                <span class="gallery-grid__category">Concept</span>
              </figcaption>
            </figure>

            <!-- Item 6 -->
            <figure class="gallery-grid__item">
              <div class="gallery-grid__image-wrap">
                <img
                  class="gallery-grid__image"
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1676477750/cld-sample-2.jpg"
                  data-zoom
                  alt=""
                />
              </div>
              <figcaption class="">
                <h4 class="gallery-grid__title tw-text-[#F1F2F4]">Half Avocado</h4>
                <span class="gallery-grid__category">Concept</span>
              </figcaption>
            </figure>

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
export default ProjectsPage;
