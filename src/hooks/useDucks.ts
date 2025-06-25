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

  const updateDuck = async (id: string, data: DuckInput) => {
    try {
      const response = await duckService.update(id, data);
      return response.data;
    } catch (error) {
      console.error("Error actualizando el patito:", error);
      throw error;
    }
  };

  return { createDuck, updateDuck };
}
