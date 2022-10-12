import axiosClient from "./axiosClient";

const postApi = {
  create: (params) => axiosClient.post("post/create", params),
  getAll: () => axiosClient.get("post/search"),
  getOne: (id) => axiosClient.get(`post/search/${id}`),
  //update: (id, params) => axiosClient.put(`memo/${id}`, params),
  //delete: (id) => axiosClient.delete(`memo/${id}`),
};

export default postApi;
