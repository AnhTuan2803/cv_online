import instance from "./config";

const getCategories = () => {
  return instance.get("categories");
};

export { getCategories };
