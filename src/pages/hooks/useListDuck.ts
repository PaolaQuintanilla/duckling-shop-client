import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { duckService } from "../../services/duckService";
import type { Duck } from "../../utils/types/DuckTypes";

export const useListDuck = () => {
  const navigate = useNavigate();
  const [ducks, setDucks] = useState<Duck[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const fetchDucks = async () => {
    setLoading(true);
    try {
      const response = await duckService.getAll();
      setDucks(response.data);
    } catch (error) {
      console.error("Error al cargar los patitos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/almacen/editar/${id}`);
  };

  const confirmDelete = (id: string) => {
    setSelectedId(id);
    setShowConfirm(true);
  };

  const handleDelete = async () => {
    if (!selectedId) return;
    try {
      await duckService.delete(selectedId);
      setDucks((prev) => prev.filter((duck) => duck._id !== selectedId));
      setShowConfirm(false);
      setSelectedId(null);
    } catch (error) {
      console.error("Error al eliminar el patito:", error);
      alert("No se pudo eliminar el patito");
    }
  };

  const handleCreateClick = () => {
    navigate("/almacen/nuevo");
  };

  useEffect(() => {
    fetchDucks();
  }, []);

  return {
    ducks,
    loading,
    showConfirm,
    handleCreateClick,
    handleEdit,
    confirmDelete,
    handleDelete,
    setShowConfirm,
  };
};
