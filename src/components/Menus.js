import { menus } from "@/data";
const Menus = () => {
  return /*html*/ `
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
    ${menus
      ?.map(
        (menu) =>
          `<li class="nav__item"><a class="tw-no-underline ${menu.name}" href="${menu.link}">${menu.name}</a></li>`
      )
      .join("")}
    </ul>
</div>
    `;
};
export default Menus;
