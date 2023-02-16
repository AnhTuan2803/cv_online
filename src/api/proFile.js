import instance from "./config";

const getProFile = () => {
  return instance.get("/proFile");
};

export { getProFile };
