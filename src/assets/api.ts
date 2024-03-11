import axios from "axios";

const api = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export const getUsers = async (page: number = 1, results: number = 10) => {
  const response = await api.get(`?page=${page}&results=${results}&seed=abc`);
  return response.data.results;
};
