import axios from "axios";
import type { DuckInput } from "../utils/types/DuckTypes";

const API_URL = "http://localhost:3000/ducks";

export const duckService = {
  create: (data: DuckInput) => axios.post(API_URL, data),
  update: (id: string, data: DuckInput) => axios.put(`${API_URL}/${id}`, data),
  getById: (id: string) => axios.get(`${API_URL}/${id}`),
  getAll: () => axios.get(API_URL),
  delete: (id: string) => axios.patch(`${API_URL}/${id}/erase`),
};
