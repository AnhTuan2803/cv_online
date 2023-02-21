import instance from "./config";

const getAbout = () => {
  return instance.get("/about");
};

export { getAbout };
