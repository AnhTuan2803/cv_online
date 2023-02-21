import instance from "./config";

const getBlog = () => {
  return instance.get("/blog");
};

export { getBlog };
