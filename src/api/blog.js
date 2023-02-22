import instance from "./config";

const getBlogs = () => {
  return instance.get("/blog");
};

const getBlog = (id) => {
  return instance.get(`/blog/${id}`);
};

const addBlog = (blog) => {
  return instance.post(`/blog`, blog);
};

const updateBlog = (blog) => {
  return instance.put(`/blog/${blog.id}`, blog);
};

const deleteBlog = (id) => {
  return instance.delete(`/blog/${id}`);
};

export { getBlogs, getBlog, addBlog, updateBlog, deleteBlog };
