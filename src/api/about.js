import instance from "./config";

const getAbout = () => {
  return instance.get("/about");
};

const updateAbout = (about) => {
  return instance.put(`/about`, about);
};

export { getAbout, updateAbout };
