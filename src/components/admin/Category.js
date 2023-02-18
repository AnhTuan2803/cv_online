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
    ?.map((item) => `<option value="${item.id}">${item.name}</option>`)
    .join("")}
  `;
};

export default Category;
