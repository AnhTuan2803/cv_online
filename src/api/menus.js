import instance from "./config";

const getMenus = () => {
  return instance.get("/menus");
};

export { getMenus };
