import { duckService } from "../services/duckService";
import type { DuckInput } from "../utils/types/DuckTypes";

export function useDucks() {
  const createDuck = async (data: DuckInput) => {
    try {
      const response = await duckService.create(data);
      return response.data;
    } catch (error) {
      console.error("Error creando el patito:", error);
      throw error;
    }
  };

  const getDuckById = async (id: string) => {
    try {
      const response = await duckService.getById(id);
      return response.data;
    } catch (error) {
      console.error("Error obteniendo el patito por ID:", error);
      throw error;
    }
  };

  const updateDuck = async (id: string, data: DuckInput) => {
    try {
      const response = await duckService.update(id, data);
      return response.data;
    } catch (error) {
      console.error("Error actualizando el patito:", error);
      throw error;
    }
  };

  const getAllDucks = async () => {
    try {
      const response = await duckService.getAll();
      return response.data;
    } catch (error) {
      console.error("Error obteniendo todos los patitos:", error);
      throw error;
    }
  };

  return { createDuck, updateDuck, getDuckById, getAllDucks };
}
