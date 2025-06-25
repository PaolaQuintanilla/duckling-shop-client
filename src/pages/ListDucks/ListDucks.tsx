import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import DuckTable from "../../components/Table/Table";
import { useNavigate } from "react-router";
import type { Duck } from "../../utils/types/DuckTypes";
import { duckService } from "../../services/duckService";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";

const ListDucks = () => {
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

  useEffect(() => {
    fetchDucks();
  }, []);

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

  return (
    <Card
      title="Almacen de Patitos"
      footer={
        <p className="text-sm text-gray-500">Total: {ducks.length} patitos</p>
      }
    >
      <div className="border p-2">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded"
          onClick={handleCreateClick}
        >
          Agregar Patito
        </button>
        {loading && <p className="text-sm text-gray-500">Cargando...</p>}
      </div>
      <DuckTable ducks={ducks} onEdit={handleEdit} onDelete={confirmDelete} />
      {showConfirm && (
        <ConfirmModal
          message="¿Estás seguro de que deseas eliminar este patito?"
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </Card>
  );
};

export default ListDucks;
