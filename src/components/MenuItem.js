const MenuItem = ({ menu }) => {
  return `
  <li class="nav__item"><a class="tw-no-underline" href="${menu.link}" data-navigo >${menu.name}</a></li>`;
};

export default MenuItem;
