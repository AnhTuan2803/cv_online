import instance from "./config";

const getContacts = () => {
  return instance.get("/contacts");
};

const deleteContact = (id) => {
  return instance.delete(`/contacts/${id}`);
};

export { getContacts, deleteContact };
