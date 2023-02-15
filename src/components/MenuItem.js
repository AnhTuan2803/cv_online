const MenuItem = ({ menu }) => {
  return `<li class="nav__item"><a class="tw-no-underline ${menu.name}" href="${menu.link}">${menu.name}</a></li>`;
};

export default MenuItem;
