import { useState } from "react";
import Card from "../../components/Card/Card";
import DuckTable from "../../components/Table/Table";

const ListDucks = () => {
  const [ducks, setDucks] = useState([
    { id: 1, color: "Amarillo", size: "Pequeño", price: 4.99, quantity: 10 },
    { id: 2, color: "Azul", size: "Mediano", price: 5.99, quantity: 5 },
  ]);

  const handleEdit = (id: number) => {
    console.log(`Editar patito con ID ${id}`);
  };

  const handleDelete = (id: number) => {
    setDucks((prev) => prev.filter((duck) => duck.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Card
        title="Gestión de Patitos"
        footer={
          <p className="text-sm text-gray-500">Total: {ducks.length} patitos</p>
        }
      >
        <DuckTable ducks={ducks} onEdit={handleEdit} onDelete={handleDelete} />
      </Card>
    </div>
  );
};

export default ListDucks;
