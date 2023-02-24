import { useEffect } from "@/lib";

const Category = ({ categories, onClick }) => {
  useEffect(() => {
    const btns = document.querySelectorAll(".btnA");
    for (const btn of btns) {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        onClick(id);
      });
    }
  });

  return `
  <li class="filter__item" >
  <a class="filter__link tw-cursor-pointer btnA" data-id="0">All</a>
</li>
  ${categories
    ?.map(
      (item) => `<li class="filter__item">
    <a class="filter__link tw-cursor-pointer btnA" data-id="${item.id}">${item.name}</a>
  </li>`
    )
    .join("")}
  `;
};

export default Category;
