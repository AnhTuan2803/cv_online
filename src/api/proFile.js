import instance from "./config";

const getProFile = () => {
  return instance.get("/proFile");
};

const updateProFile = (proFile) => {
  return instance.put(`/proFile`, proFile);
};

export { getProFile, updateProFile };
