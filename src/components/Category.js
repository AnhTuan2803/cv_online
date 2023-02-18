import { getCategories } from "@/api/category";
import { useEffect, useState } from "@/lib";

const Category = () => {
  const [cate, setCate] = useState([]);
  useEffect(async () => {
    try {
      const { data } = await getCategories();
      setCate(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return `
  ${cate
    ?.map(
      (item) => `<li class="filter__item">
    <a class="filter__link">${item.name}</a>
  </li>`
    )
    .join("")}
  `;
};

export default Category;
