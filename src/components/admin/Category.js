import { getCategories } from "@/api/category";
import { useEffect, useState } from "@/lib";

const Category = (id) => {
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
      (item) =>
        `${
          id === item.id
            ? `<option selected="selected" value="${item.id}">${item.name}</option>`
            : `<option value="${item.id}">${item.name}</option>`
        }`
    )
    .join("")}
  `;
};

export default Category;
