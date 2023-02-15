import Footer from "@/components/Footer";
import Menus from "@/components/Menus";
import ProjectList from "@/components/ProjectList";
import Sidebar from "@/components/Sidebar";
import { useEffect } from "@/lib";

const ProjectsPage = () => {
  document.title = "MyCV - Projects";
  const projects = JSON.parse(localStorage.getItem("myProjects")) || [];
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
    <!-- About -->
  <div class="pb-2">
              <h1 class="title title--h1 first-title title__separate">Projects</h1>
    </div>

  <!-- Gallery -->
  <div class="pb-0">
    <!-- Filter -->
                  <div class="select">
                <span class="placeholder">Select category</span>
                <ul class="filter">
                    <li class="filter__item">Category</li>
                  <li class="filter__item active" data-filter="*"><a class="filter__link active" href="#filter">All</a></li>
                  <li class="filter__item" data-filter=".category-concept"><a class="filter__link" href="#filter">Concept</a></li>
                  <li class="filter__item" data-filter=".category-design"><a class="filter__link" href="#filter">Design</a></li>
                  <li class="filter__item" data-filter=".category-life"><a class="filter__link" href="#filter">Life</a></li>
                </ul>
                <input type="hidden" name="changemetoo"/>
              </div>

    <!-- Content -->
    <div class="gallery-grid js-masonry js-filter-container">
        <div class="gutter-sizer"></div>
       <!-- Item -->
       ${ProjectList({ projects })}
        <!-- Item 1 -->
        <figure class="gallery-grid__item category-concept">
          <div class="gallery-grid__image-wrap">
                              <img class="gallery-grid__image cover lazyload" src="../assets/img/image_01.jpg" data-zoom alt="" />
        </div>
                          <figcaption class="gallery-grid__caption">
            <h4 class="title gallery-grid__title">Half Avocado</h4>
          <span class="gallery-grid__category">Concept</span>
        </figcaption>
                      </figure>


        <!-- Item 2 -->
        <figure class="gallery-grid__item category-concept">
          <div class="gallery-grid__image-wrap">
                              <img class="gallery-grid__image cover lazyload" src="../assets/img/image_02.jpg" data-zoom alt="" />
        </div>	
                          <figcaption class="gallery-grid__caption">
            <h4 class="title gallery-grid__title">Pink Flamingo</h4>
          <span class="gallery-grid__category">Concept</span>
        </figcaption>
                      </figure>

        <!-- Item 3 -->
        <figure class="gallery-grid__item category-design">
          <div class="gallery-grid__image-wrap">
                              <img class="gallery-grid__image cover lazyload" src="../assets/img/image_03.jpg" data-zoom alt="" />
        </div>	
                          <figcaption class="gallery-grid__caption">
            <h4 class="title gallery-grid__title">Abstract</h4>
          <span class="gallery-grid__category">Design</span>
        </figcaption>
                      </figure>

        <!-- Item 4 -->
        <figure class="gallery-grid__item category-design">
          <div class="gallery-grid__image-wrap">
                              <img class="gallery-grid__image cover lazyload" src="../assets/img/image_04.jpg" data-zoom alt="" />
        </div>
        <figcaption class="gallery-grid__caption">
            <h4 class="title gallery-grid__title">Abstract #2</h4>
          <span class="gallery-grid__category">Design</span>
        </figcaption>
                      </figure>

        <!-- Item 5 -->
        <figure class="gallery-grid__item category-design">
          <div class="gallery-grid__image-wrap">
                              <img class="gallery-grid__image cover lazyload" src="../assets/img/image_05.jpg" data-zoom alt="" />
        </div>
        <figcaption class="gallery-grid__caption">
            <h4 class="title gallery-grid__title">Abstract #3</h4>
          <span class="gallery-grid__category">Design</span>
        </figcaption>
                      </figure>

        <!-- Item 6 -->
        <figure class="gallery-grid__item category-life">
          <div class="gallery-grid__image-wrap">
                              <img class="gallery-grid__image cover lazyload" src="../assets/img/image_06.jpg" data-zoom alt="" />
        </div>
        <figcaption class="gallery-grid__caption">
            <h4 class="title gallery-grid__title">Golden Gate</h4>
          <span class="gallery-grid__category">Life</span>
        </figcaption>
                      </figure>

        <!-- Item 7 -->
        <figure class="gallery-grid__item category-concept">
          <div class="gallery-grid__image-wrap">
                              <img class="gallery-grid__image cover lazyload" src="../assets/img/image_07.jpg" data-zoom alt="" />
        </div>
        <figcaption class="gallery-grid__caption">
            <h4 class="title gallery-grid__title">Peach</h4>
          <span class="gallery-grid__category">Concept</span>
        </figcaption>
                      </figure>

        <!-- Item 8 -->
        <figure class="gallery-grid__item category-design">
          <div class="gallery-grid__image-wrap">
                              <img class="gallery-grid__image cover lazyload" src="../assets/img/image_08.jpg" data-zoom alt="" />
        </div>
        <figcaption class="gallery-grid__caption">
            <h4 class="title gallery-grid__title">Abstract #4</h4>
          <span class="gallery-grid__category">Design</span>
        </figcaption>
                      </figure>

        <!-- Item 9 -->
        <figure class="gallery-grid__item category-life">
          <div class="gallery-grid__image-wrap">
                              <img class="gallery-grid__image cover lazyload" src="../assets/img/image_09.jpg" data-zoom alt="" />
        </div>
        <figcaption class="gallery-grid__caption">
            <h4 class="title gallery-grid__title">Hedgehog</h4>
          <span class="gallery-grid__category">Life</span>
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
