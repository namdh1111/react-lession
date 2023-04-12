import api from "./api";

const list = () => {
  return api.get(api.url.student)
};

const get = (id) => {
  return api.get(`${api.url.student}/${id}`)
};

const add = (data) => {
  return api.post(api.url.student, data)
};

const update = (id, data) => {
  return api.put(`${api.url.student}/${id}`, data)
};

const remove = (id) => {
  return api.delete(`${api.url.student}/${id}`)
};

const studentService = {
  list,
  get,
  add,
  update,
  delete: remove,
};

export default studentService;
