import ConfirmModal from "../../../components/ConfirmModal/ConfirmModal";
import Card from "../../../components/Card/Card";
import DuckTable from "../../../components/Table/Table";

import { useListDuck } from "../../hooks/useListDuck";

const ListDucks = () => {
  const {
    ducks,
    loading,
    showConfirm,
    handleCreateClick,
    handleEdit,
    confirmDelete,
    handleDelete,
    setShowConfirm,
  } = useListDuck();

  return (
    <Card
      title="Almacen de Patitos"
      footer={
        <p className="text-sm text-gray-500">Total: {ducks?.length} patitos</p>
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
