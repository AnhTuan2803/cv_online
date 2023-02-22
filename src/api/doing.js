import instance from "./config";

const getDoings = () => {
  return instance.get("/doing");
};

const getDoing = (id) => {
  return instance.get(`/doing/${id}`);
};

const addDoing = (doing) => {
  return instance.post(`/doing`, doing);
};

const updateDoing = (doing) => {
  return instance.put(`/doing/${doing.id}`, doing);
};

const deleteDoing = (id) => {
  return instance.delete(`/doing/${id}`);
};

export { getDoings, getDoing, addDoing, updateDoing, deleteDoing };
