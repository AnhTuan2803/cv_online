import { useEffect } from "@/lib";

const Menus = () => {
  useEffect(() => {
    const btn = document.querySelector(".hamburger");
    btn.addEventListener("click", () => {
      const _menu = document.querySelector("#_menu");
      const item = document.querySelector("#item");
      if (_menu.style.width == "0%") {
        item.className = "fa-solid fa-xmark";
        _menu.style.width = "100%";
      } else {
        item.className = "fa-solid fa-bars-staggered";
        _menu.style.width = "0%";
      }
    });
  });
  return /*html*/ `
  <div class="circle-menu">
        
  <div class="hamburger">
  <i id="item" class="fa-solid fa-bars-staggered"></i>
    </div>

   </div>
  <div id="_menu" style="width: 0%;" class="inner-menu">
        <ul class="nav">
        <li class="nav__item"><a class="tw-no-underline" href="#/" data-navigo>About</a></li>
        <li class="nav__item"><a class="tw-no-underline" href="#/resume" data-navigo>Resume</a></li>
        <li class="nav__item"><a class="tw-no-underline" href="#/projects" data-navigo>Projects</a></li>
        <li class="nav__item"><a class="tw-no-underline" href="#/blog" data-navigo>Blog</a></li>
        <li class="nav__item"><a class="tw-no-underline" href="#/contact" data-navigo>Contact</a></li>
        </ul>
  </div>
  `;
};
export default Menus;
